<template>
  <header
    class="bg-CMS-monte-carlo h-16 md:h-24 flex justify-between items-center"
  >
    <img
      class="md:w-32 w-24"
      src="../../assets/cms-logo.png"
      alt="Cinema Movie Shop Logo"
    />
    <CMSInput />
    <div class="flex ml-4">
      <div
        v-for="(header, index) in iconHeaders"
        :key="index"
        class="mr-4 md:mr-10"
      >
        <IconButton
          :buttonIconFile="header.buttonIconFile"
          :buttonName="header.buttonName"
          :hasCounter="header.hasCounter"
        />
      </div>
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
  iconHeaders = [
    { buttonName: "Coração branco", buttonIconFile: "heart-icon-white.png" },
    {
      buttonName: "Carrinho de compras",
      buttonIconFile: "cart-white-icon.png",
      hasCounter: true,
    },
  ];
}
</script>