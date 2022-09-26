<template>
  <div class="flex justify-evenly flex-wrap" id="cards-container" :class="[
    isSidebarOpen
      ? 'mr-128'
      : 'md:mx-20',
  ]">
    <MovieCard v-for="(movie, index) in movies" :movieName="movie.title" :movieRate="movie.vote_average"
      :imageUrl="movie.backdrop_path" :movieGenre="movie.genre_ids" :movieDate="movie.release_date" />
    <ClipLoader v-if="loadingMorePosts" class="place-self-center flex content-center" :loading="true" size="4rem" color="#2E2E2E"></ClipLoader>
  </div>
</template>

<script lang="ts">
import { Movie } from "@/interfaces/movie";
import { Options, Vue, Prop } from "vue-property-decorator";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import MovieCard from "../components/cards/MovieCard.vue";
import { getPopularMovies } from "@/api/movie";

@Options({
  components: { MovieCard, ClipLoader },
})
export default class Home extends Vue {

  movies: Movie[] = [];
  pageFeed = 1;
  loadingMorePosts = false;

  async getMovies(page: number) {
    try {
      this.loadingMorePosts = true;

      const moviesList = await getPopularMovies(page);

      if (moviesList.length === 0) {
        this.loadingMorePosts = false;

        const desktopContainer = document.getElementById("cards-container");
        window.scrollBy(0, -50);
        desktopContainer?.scrollBy(0, -50);
      } else {
        this.movies.push(...moviesList);
        this.loadingMorePosts = false;
        this.pageFeed += 1;
      }
    } catch (error) {
      console.log(error);
    }

  }

  scrollOnMobile() {
    window.onscroll = () => {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow && !this.loadingMorePosts) {
        this.getMovies(this.pageFeed);
        return;
      }
    };
  }

  handleScroll() {
    const desktopContainer = document.getElementById("cards-container");
    const scrollTop = desktopContainer?.scrollTop || 0;
    const offsetHeight = desktopContainer?.offsetHeight || 0;
    const bottomOfWindow = scrollTop + offsetHeight === desktopContainer?.scrollHeight;

    if (bottomOfWindow && !this.loadingMorePosts) {
      this.getMovies(this.pageFeed);
      return;
    }
  }

  get isSidebarOpen() {
    return this.$store.state.isSidebarOpen;
  }

  mounted(): void {
    this.movies = [];
    this.getMovies(this.pageFeed);
    const desktopContainer = document.getElementById("cards-container");
    desktopContainer?.addEventListener("scroll", this.handleScroll);
    this.scrollOnMobile();
  }
}
</script>
