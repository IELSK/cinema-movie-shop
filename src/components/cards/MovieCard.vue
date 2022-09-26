<template>
  <div class="w-64 md:w-96 h-96 md:h-movie-card-height border-2 md:mx-5 mx-5 mb-20">
    <div class="h-3/5 relative">
      <img src="../../assets/icons/heart-icon-white.png" alt="Ícone de favorito"
        class="absolute right-0 cursor-pointer w-12 h-12" />
      <img :src="fullMovieImageUrl" alt="Imagem do filme" class="h-full" />
      <span
        class="absolute letter-shadow text-white font-bold drop-shadow-2xl mx-auto left-0 right-0 text-center bottom-0">
        {{ formattedMovieDate }}
      </span>
    </div>
    <div class="flex flex-col h-2/5 text-center justify-evenly items-center">
      <h1 class="w-4/5 md:text-xl mt-3">{{ movieName }}</h1>
      <div class="flex justify-center items-center">
        <div class="flex w-full justify-center items-center">
          <img src="../../assets/icons/star-icon.png" alt="Ícone de favorito" class="w-6 h-6 mx-1" />
          <span class="font-bold text-lg mt-1">{{ movieRate }}</span>
        </div>
        <span class="ml-5 pt-1 font-semibold">{{ movieGenreName }}</span>
      </div>
      <span class="font-semibold mt-2">R$ 9,99</span>
      <CMSButton @click="addMovieToCart(id)" class="mt-2" buttonName="Adicionar" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Options } from "vue-property-decorator";
import CMSButton from "../buttons/CMSButton.vue";
import { img_url } from '../../helpers/utils'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { movies } from "@/helpers/movie";
import { Movie } from "@/interfaces/movie";

@Options({
  components: {
    CMSButton,
  },
})
export default class MovieCard extends Vue {
  @Prop({
    default:
      "",
  })
  imageUrl!: string;
  @Prop({
    default: "",
  })
  movieName!: string;
  @Prop({
    default: 0,
  })
  movieRate!: number;
  @Prop({
    default: [],
  })
  movieGenre!: number[];
  @Prop({
    default: "",
  })
  movieDate!: Date;
  @Prop({
    default: 0,
  })
  id!: number;
  @Prop({ default: [] })
  homeMovies!: Movie[];
  ptBR: Locale = ptBR;


  addMovieToCart(id: number) {
    let movieToAdd = this.homeMovies.filter((movie: Movie) =>
      movie.id === id
    )
    movieToAdd[0].quantity = 1;
    movieToAdd[0].price = 9.99;

    this.$store.dispatch("updateMoviesCart", movieToAdd);

  }

  get formattedMovieDate() {
    return format(new Date(this.movieDate), "dd 'de' MMMM',' yyyy", {
      locale: ptBR
    })
  }

  get fullMovieImageUrl() {
    return `${img_url}${this.imageUrl}`
  }

  get movieGenreName() {
    switch (this.movieGenre[0]) {
      case 28:
        return "Ação";
      case 12:
        return "Aventura";
      case 16:
        return "Animação";
      case 35:
        return "Comédia";
      case 80:
        return "Crime";
      case 99:
        return "Documentário";
      case 18:
        return "Drama";
      case 10751:
        return "Família";
      case 14:
        return "Fantasia";
      case 36:
        return "História";
      case 27:
        return "Terror";
      case 10402:
        return "Música";
      case 9648:
        return "Mistério";
      case 10749:
        return "Romance";
      case 878:
        return "Ficção científica"
      case 10770:
        return "Cinema TV"
      case 53:
        return "Thriller"
      case 10752:
        return "Guerra"
      case 37:
        return "Faroeste"

      default:
        return this.movieGenre[0] || "";
    }
  }
}
</script>

<style scoped>
.letter-shadow {
  -webkit-text-stroke: 1px black;
}
</style>
