<template>
  <button
    class="
      bg-CMS-purple
      rounded-sm
      text-white
      py-2
      -mb-14
      font-semibold
      text-lg
      w-full
    "
  >
    {{ buttonName }}
  </button>
</template>
  
  <script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class CMSButton extends Vue {
  @Prop({ default: "" }) buttonName!: string;
}
</script>