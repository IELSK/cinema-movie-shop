<template>
  <div v-if="inputType == 'search'" class="custom-search md:w-128 w-52 md:placeholder:text-lg">
    <input type="text" class="custom-search-input" :placeholder="inputPlaceholder" />
    <img src="../assets/icons/search-icon.png" class="custom-search-bottom cursor-pointer w-12 h-7" />
  </div>
  <input v-else-if="inputMask" type="text" :class="customClass" v-mask="inputMask"
    class="h-10 pl-3 border-2 rounded-sm outline-none" :placeholder="inputPlaceholder" :value="modelValue"
    @change="inputChange" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  <input v-else type="text" :class="customClass" class="h-10 pl-3 border-2 rounded-sm outline-none"
    :placeholder="inputPlaceholder" :value="modelValue" @change="inputChange"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script lang="ts">
import { InputMask } from "@/helpers/utils";
import { Options, Prop, Vue, Watch } from "vue-property-decorator";
import { mask } from "vue-the-mask";

@Options({
  directives: { mask },
})
export default class CMSInput extends Vue {
  @Prop({ default: "" }) inputType!: string;
  @Prop({ default: "" }) inputPlaceholder!: string;
  @Prop({ default: "" }) modelValue!: string;
  @Prop({ default: "" }) mask!: InputMask;
  @Prop({ default: "" }) inputKey!: string;
  @Prop({ default: "" }) customClass!: string;
  @Prop({ default: (event: Event) => null }) onChange!: (event: Event, inputKey: string) => void;

  inputChange(event: Event | any) {
    if (this.onChange && typeof this.onChange === "function") {
      this.onChange(event, this.inputKey);
    }
  }

  @Watch("value")
  valueChange() {
    this.inputChange(undefined);
  }

  get inputMask() {
    switch (this.mask) {
      case "phone":
        return ["(##) ####-####", "(##) #####-####"];
      case "cpf":
        return "###.###.###-##";
      case "cep":
        return "#####-###";

      default:
        return this.mask || "";
    }
  }

}
</script>

<style scoped>
.custom-search {
  height: 3rem;
  position: relative;
}

.custom-search-input {
  height: 100%;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0px 50px 0px 20px;
  box-sizing: border-box;
  outline: none;
}

.custom-search-bottom {
  position: absolute;
  right: 3px;
  top: 8px;
  bottom: 3px;
  border: 0;
  outline: none;
  margin: 0;
  padding: 0 10px;
  z-index: 2;
}

input::placeholder {
  font-size: 10px;
  letter-spacing: 0.0001rem;
  font-weight: 600;
  opacity: 0.2;
  color: black;
}

@media (min-width: 768px) {
  input::placeholder {
    font-size: large;
  }
}
</style>
