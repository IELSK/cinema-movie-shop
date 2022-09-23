<template>
  <div class="mt-16">
    <MovieCard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import MovieCard from "../components/cards/MovieCard.vue";

@Options({
  components: { MovieCard },
})
export default class Home extends Vue {}
</script>
