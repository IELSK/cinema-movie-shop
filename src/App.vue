<template>
  <CheckoutModal :isModalOn="isModalOn" @modalOnCheckout="saveModalValue" @turnSidebarOff="saveSidebarValue"/>
  <Sidebar :isSidebarOpen="isSidebarOpen" />
  <Header @isSidebarOpen="handleSidebarToggle" @turnSidebarOff="saveSidebarValue"></Header>
  <router-view @modalOn="saveModalValue" :isSidebarOpen="isSidebarOpen" class="mt-24 md:mt-36"> </router-view>
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
  isSidebarOpen: boolean = false;
  isModalOn: boolean = false;
  

  saveSidebarValue(value: boolean) {
    this.isSidebarOpen = value;
  }

  saveModalValue(value: boolean) {
    this.isModalOn = value;
  }

  handleSidebarToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleModalToggle() {
    this.isModalOn = !this.isModalOn;
  }
}
</script>
