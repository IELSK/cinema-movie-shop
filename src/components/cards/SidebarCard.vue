<template>
  <div class="flex justify-between items-center text-sm sm:text-base">
    <img :src="imageUrl" alt="Imagem do filme" class="w-12 h-12" />
    <p class="sm:w-36 break-words">{{ itemName }}</p>
    <p v-if="isCart">{{ itemCount }}</p>
    <p>R$ {{ itemPrice.toString().replace(".", ",") }}</p>

    <div v-if="!isCart" class="tooltip">
      <img
        src="../../assets/icons/cart-mm-icon.png"
        alt="Ícone carrinho de compra"
        class="w-8 h-8 cursor-pointer"
      />
      <span class="tooltiptext">Adicionar ao carrinho</span>
    </div>
    <div class="tooltip">
      <img
        src="../../assets/icons/trash-can.png"
        alt="Ícone de lixeira"
        class="w-8 h-8 cursor-pointer"
      />
      <span class="tooltiptext"
        >Remover {{ isCart ? "do carrinho" : "dos favoritos" }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

export default class SidebarCard extends Vue {
  @Prop({
    default:
      "https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg",
  })
  imageUrl!: string;
  @Prop({ default: "Constantines" })
  itemName!: string;
  @Prop({ default: 0 }) itemCount!: number;
  @Prop({ default: 9.99 }) itemPrice!: number;
  @Prop({ default: false }) isCart!: boolean;
}
</script>
