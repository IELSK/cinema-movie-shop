<template>
  <table class="w-full md:w-128">
    <tr class="font-semibold text-sm md:text-lg">
      <td>Imagem</td>
      <td>Nome</td>
      <td>Qtd</td>
      <td>Preço</td>
    </tr>
    <tr class="border-b-2">
      <CheckoutCard></CheckoutCard>
    </tr>
  </table>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import CheckoutCard from "../cards/CheckoutCard.vue";

@Options({ components: { CheckoutCard } })
export default class CheckoutTable extends Vue {
}
</script>
