<template>
  <div
    class="
      absolute
      md:w-110
      w-screen
      h-partial-screen
      top-0
      right-0
      border-l-2 border-solid
      mt-16
      md:mt-24
      px-4
      pt-4
    "
  >
    <header class="flex justify-between items-center cursor-pointer mb-4">
      <h2 v-if="isCart" class="text-lg sm:text-3xl">Meu Carrinho</h2>
      <h2 v-else>Meus Favoritos</h2>
      <span class="text-CMS-purple underline">Esvaziar</span>
    </header>
    <div class="flex flex-col justify-between h-11/12 max-h-screen">
      <div>
        <SidebarCard :isCart="isCart"></SidebarCard>
      </div>
      <footer v-if="isCart" class="flex flex-col">
        <div class="flex justify-between">
          <h2 class="text-lg sm:text-3xl">Total:</h2>
          <h1 class="text-base sm:text-4xl">R$ {{ totalValue.toString().replace(".", ",") }}</h1>
        </div>
        <CMSButton class="self-center mb-4" buttonName="Finalizar compra" />
      </footer>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { Vue, Prop, Options } from "vue-property-decorator";
import SidebarCard from "../../cards/SidebarCard.vue";
import CMSButton from "@/components/buttons/CMSButton.vue";

@Options({
  components: { SidebarCard, CMSButton },
})
export default class Sidebar extends Vue {
  @Prop({ default: true }) isCart!: boolean;
  totalValue: number = 19.98;
}
</script>