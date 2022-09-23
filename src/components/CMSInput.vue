<template>
  <div class="custom-search md:w-128 w-52 md:placeholder:text-lg">
    <input
      type="text"
      class="custom-search-input"
      placeholder="Procure um filme!"
    />
    <img
      src="../assets/icons/search-icon.png"
      class="custom-search-bottom cursor-pointer w-12 h-7"
    />
  </div>
</template>
  
  <script lang="ts">
import { Vue } from "vue-property-decorator";

export default class CMSInput extends Vue {}
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