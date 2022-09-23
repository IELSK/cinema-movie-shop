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
      <h1 v-if="isCart">Meu Carrinho</h1>
      <h1 v-else>Meus Favoritos</h1>
      <span class="text-CMS-purple underline">Esvaziar</span>
    </header>
    <div class="flex flex-col justify-between h-5/6">
      <div>
        <SidebarCard :isCart="isCart"></SidebarCard>
      </div>
      <footer v-if="isCart" class="flex flex-col">
        <div class="flex justify-between">
          <h1>Total:</h1>
          <h2>R$ {{ totalValue.toString().replace(".", ",") }}</h2>
        </div>
        <CMSButton class="self-center" buttonName="Finalizar compra" />
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