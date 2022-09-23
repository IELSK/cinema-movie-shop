<template>
  <div v-if="hasCounter">
    <img
      class="h-8 w-8 md:w-12 md:h-12 cursor-pointer"
      :src="getIconUrl(buttonIconFile)"
      :alt="buttonName"
      @click="handleClick"
    />
  </div>
  <img
    v-else
    class="h-8 w-8 md:w-12 md:h-12 cursor-pointer"
    :src="getIconUrl(buttonIconFile)"
    :alt="buttonName"
    @click="handleClick"
  />
</template>
  
  <script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class IconButton extends Vue {
  @Prop({ default: "" }) buttonIconFile!: string;
  @Prop({ default: "" }) buttonName!: string;
  @Prop({ default: false }) hasCounter!: boolean;

  getIconUrl(url: string) {
    return new URL(`../../assets/icons/${url}`, import.meta.url).href;
  }

  handleClick() {
    this.$emit("click");
  }
}
</script>