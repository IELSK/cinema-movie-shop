<template>
  <div class="w-64 h-movie-card-height border-2">
    <div class="h-3/5 relative">
      <img
        src="../../assets/icons/heart-icon-gray.png"
        alt="Ícone de favorito"
        class="absolute right-0 cursor-pointer w-16 h-16"
      />
      <img :src="imageUrl" alt="Imagem do filme" class="h-full" />
      <div class="absolute mx-auto left-0 right-0 text-center bottom-0">{{ movieDate }}</div>
    </div>
    <div class="flex flex-col text-center items-center">
      <h1 class="w-4/5 text-xl mt-3">{{ movieName }}</h1>
      <div class="flex justify-center items-center">
        <div class="flex w-full justify-center items-center">
          <img
            src="../../assets/icons/star-icon.png"
            alt="Ícone de favorito"
            class="w-6 h-6 mx-1"
          />
          <span class="font-bold text-lg mt-1">{{ movieRate }}</span>
        </div>
        <span class="ml-5 pt-1 font-semibold">{{ movieGenre }}</span>
      </div>
      <span class="font-semibold mt-2">R$ 9,99</span>
      <CMSButton class="mt-2" buttonName="Adicionar" />
    </div>
  </div>
</template>
  
  <script lang="ts">
import { Vue, Prop, Options } from "vue-property-decorator";
import CMSButton from "../buttons/CMSButton.vue";

@Options({
  components: {
    CMSButton,
  },
})
export default class MovieCard extends Vue {
  @Prop({
    default:
      "https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg",
  })
  imageUrl!: string;
  @Prop({
    default: "A Volta dos que não foram",
  })
  movieName!: string;
  @Prop({
    default: 7,
  })
  movieRate!: string;
  @Prop({
    default: "Terror",
  })
  movieGenre!: string;
  @Prop({
    default: "7 de Janeiro, 2019",
  })
  movieDate!: string;
}
</script>