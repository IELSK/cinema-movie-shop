<template>
  <CheckoutModal />
  <Sidebar :isCart="isCart"  />
  <Header />
  <router-view class="mt-24 md:mt-36" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import CheckoutModal from "./components/modal/CheckoutModal.vue";

@Options({
  components: {
    Header,
    Sidebar,
    CheckoutModal,
  },
})
export default class App extends Vue {
  isCart: boolean = false;

}
</script>
