<template>
  <td><img :src="imageUrl" alt="Imagem do filme" class="md:w-20 md:h-20 w-16 h-16" /></td>
  <td>{{itemName}}</td>
  <td>
    <p>{{ itemCount }}</p>
  </td>
  <td>
    <p>R$ {{ itemPrice.toString().replace(".", ",") }}</p>
  </td>
  <td>
    <div class="tooltip">
      <img src="../../assets/icons/trash-can.png" alt="Ícone de lixeira" class="w-8 h-8 cursor-pointer" />
      <span class="tooltiptext">Remover do Carrinho</span>
    </div>
  </td>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class CheckoutCard extends Vue {
  @Prop({
    default:
      "https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg",
  })
  imageUrl!: string;
  @Prop({ default: "Constantines" })
  itemName!: string;
  @Prop({ default: 9.99 }) itemPrice!: number;
  @Prop({ default: 0 }) itemCount!: number;
}
</script>
