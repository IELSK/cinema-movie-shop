<template>
  <div :class="[isOpen ? 'ease-in-out duration-300' : 'ease-in-out translate-x-full duration-300']" class="
      fixed
      z-50
      bg-white
      md:w-128
      w-screen
      h-full
      top-0
      right-0
      border-2 border-solid
      mt-16
      md:mt-24
      px-4
      pt-4
    ">
    <header class="flex justify-between items-center mb-4">
      <h2 v-if="isCart" class="text-lg sm:text-3xl">Meu Carrinho</h2>
      <h2 v-else>Meus Favoritos</h2>
      <span class="text-CMS-purple cursor-pointer underline">Esvaziar</span>
    </header>
    <div class="flex flex-col justify-between h-full">
      <div>
        <SidebarCard :isCart="isCart"></SidebarCard>
      </div>
      <footer v-if="isCart" class="flex flex-col mb-56">
        <div class="flex justify-between">
          <h2 class="text-lg sm:text-3xl">Total:</h2>
          <h1 class="text-base sm:text-4xl">
            R$ {{ totalValue.toString().replace(".", ",") }}
          </h1>
        </div>
        <CMSButton class="self-center mt-8" buttonName="Finalizar compra" />
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
  @Prop({ default: false }) isOpen!: boolean;
  totalValue: number = 19.98;


}
</script>