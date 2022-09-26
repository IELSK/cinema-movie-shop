<template>
  <button
  :class="[disabled ? 'bg-CMS-light-black text-gray-600 cursor-not-allowed' : '']"
    class="bg-CMS-purple rounded-sm text-white py-2 -mb-14 font-semibold text-lg w-full"
    :disabled="disabled"
  >
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class CMSButton extends Vue {
  @Prop({ default: "" }) buttonName!: string;
  @Prop({ default: false }) disabled!: boolean;
}
</script>
