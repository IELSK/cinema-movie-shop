<template>
  <div class="flex justify-between items-center text-sm sm:text-base">
    <img :src="imageUrl" :alt="imageAlt" class="w-12 h-12" />
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
  @Prop({ default: "imagem" })
  imageAlt!: string;
  @Prop({ default: 0 }) itemCount!: number;
  @Prop({ default: 9.99 }) itemPrice!: number;
  @Prop({ default: false }) isCart!: boolean;
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 12rem;
  background-color: #4b5c6b;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px 8px;
  position: absolute;
  z-index: 1;
  top: 125%;
  right: -40%;
  font-weight: 600;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  right: 13%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #555 transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>