<template>
  <header class="bg-CMS-monte-carlo h-16 md:h-24 flex justify-between items-center fixed top-0 left-0 w-full z-50">
    <img class="md:w-32 w-24 cursor-pointer" src="../../assets/cms-logo.png" alt="Cinema Movie Shop Logo"
      @click="redirectToHome(); $emit('turnSidebarOff', false);;" />
    <CMSInput inputType="search" inputPlaceholder="Procure um filme!" />
    <div class="flex ml-4">
      <IconButton v-for="(header, index) in iconHeaders" :key="index" :class="[
        canOpenSidebar
          ? 'cursor-pointer'
          : 'cursor-not-allowed',
      ]" class="mr-4 md:mr-10" @click="toggleSidebarOpen(); setIsCart(header.isCart);" :buttonIconFile="header.buttonIconFile"
       :buttonName="header.buttonName" :hasCounter="header.hasCounter" />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import CMSInput from "../CMSInput.vue";
import IconButton from "../buttons/IconButton.vue";

@Options({
  components: {
    CMSInput,
    IconButton,
  },
})
export default class Header extends Vue {
  iconHeaders: any = [
    {
      buttonName: "Ícone de coração para favorito",
      buttonIconFile: "heart-icon-white.png",
    },
    {
      buttonName: "Ícone de carrinho de compras",
      buttonIconFile: "cart-white-icon.png",
      hasCounter: true,
      isCart: true
    },
  ];

  get canOpenSidebar() {
    return this.$route.meta.canOpenSidebar
  }

  setIsCart(isCart: boolean) {
    if (isCart) {
      this.$store.dispatch("updateIsCart", true);
    } else {
      this.$store.dispatch("updateIsCart", false);
    }
  }

  toggleSidebarOpen() {
    let newSidebarState = !this.$store.state.isSidebarOpen;
    this.$store.dispatch("updateIsSidebarOpen", newSidebarState);
  }


  redirectToHome() {
    this.$router.push("/");
  }
}
</script>
