<template>
  <div v-if="isModalOn"
    class="bg-white border-2 z-100 flex flex-col justify-evenly items-center left-1/2 top-1/2 fixed rounded -translate-x-1/2 -translate-y-1/2 w-128 h-96">
    <h1 class="text-center text-3xl">Obrigado {{formData.name}}!</h1>
    <p class="text-xl">Sua compra foi finalizada com sucesso!</p>
    <CMSButton @click="$emit('modalOnCheckout', false); redirectToHome(); $emit('turnSidebarOff', false); clearForm(formData)" class="w-5/6"
      buttonName="Ir para loja" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Options } from "vue-property-decorator";
import CMSButton from "../buttons/CMSButton.vue";
import { user } from "../../helpers/form";
import { clearForm } from "../../helpers/utils"

@Options({
  components: {
    CMSButton,
  },
})
export default class CheckoutModal extends Vue {
  @Prop({ default: false }) isModalOn!: boolean;


  internalIsModalOn: boolean = this.isModalOn;
  formData = user;
  clearForm = clearForm;

  redirectToHome() {
    this.$router.push("/");
  }
}
</script>
