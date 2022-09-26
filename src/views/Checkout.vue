<template>
  <div class="mx-10">
    <div class="flex flex-wrap justify-around items-start">
      <div class="flex flex-col">
        <h2 class="md:text-3xl mb-8">Finalizar compra</h2>
        <form class="md-64 md:w-128 mb-20">
          <CMSInput v-for="(header, index) in formHeaders" :mask="header.mask" :inputKey="header.key"
            v-model="currentFormData[header.key]" :onChange="inputChange" :key="index" :customClass="header.customClass"
            :inputPlaceholder="header.inputPlaceholder" />
        </form>
      </div>
      <div class="mr-10 w-full md:w-128">
        <CheckoutTable></CheckoutTable>
        <div class="flex justify-between mt-20">
          <h1 class="text-lg">Total:</h1>
          <h1>
            R$ {{ totalValue.toString().replace(".", ",") }}
          </h1>
        </div>
        <CMSButton class="self-center mt-10 mb-4" @click="$emit('modalOn', true)" buttonName="Finalizar"
          :disabled="buttonDisabled" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";
import CMSInput from "../components/CMSInput.vue";
import CheckoutTable from "@/components/table/CheckoutTable.vue";
import CMSButton from "@/components/buttons/CMSButton.vue";
import { hasMissingRequiredKeys } from "../helpers/utils";
import { user } from "../helpers/form"

@Options({ components: { CMSInput, CheckoutTable, CMSButton } })
export default class Checkout extends Vue {
  @Prop({ default: "" }) value!: string;
  totalValue: number = 19.98;

  formData = user;

  formHeaders = [
    {
      key: "name",
      inputPlaceholder: "Nome Completo*",
      customClass: "w-full mb-5 md:mb-10",
      required: "true"
    },
    {
      key: "cpf",
      inputPlaceholder: "CPF*",
      customClass: "w-full mb-5 md:w-60 md:mr-4",
      required: "true",
      mask: "cpf"
    },
    {
      key: "phoneNumber",
      inputPlaceholder: "Celular*",
      customClass: "w-full mb-5 md:w-1/2 md:mb-10",
      required: "true",
      mask: "phone"
    },
    {
      key: "email",
      inputPlaceholder: "E-mail*",
      customClass: "w-full mb-5 md:mb-10",
      required: "true"
    },
    {
      key: "cep",
      inputPlaceholder: "CEP*",
      customClass: "w-full mb-5 md:w-52 md:mr-4",
      required: "true",
      mask: "cep"
    },
    {
      key: "address",
      inputPlaceholder: "Endereço*",
      customClass: "w-full mb-5 md:w-72 md:mb-10",
      required: "true"
    },
    {
      key: "city",
      inputPlaceholder: "Cidade*",
      customClass: "w-full mb-5 md:w-60 md:mr-4",
      required: "true"
    },
    {
      key: "state",
      inputPlaceholder: "Estado*",
      customClass: "w-full md:w-1/2",
      required: "true"
    },
  ];

  inputChange(event: Event, key: string) {
    const currentHeader = this.formHeaders.find((header: { key: string; }) => header.key == key);
    return currentHeader;
  }

  get buttonDisabled() {
    return hasMissingRequiredKeys(this.formHeaders, this.formData)
  }

  get currentFormData(): any {
    return this.formData;
  }

}
</script>
