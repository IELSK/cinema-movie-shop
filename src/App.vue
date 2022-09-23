<template>
  <div>
    <Sidebar :isOpen="isOpen"  />
    <Header @isOpen="handleMenuToggle"></Header>
    <router-view class="mt-16 md:mt-24"> </router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/sidebar/Sidebar.vue";

@Options({
  components: {
    Header,
    Sidebar,
  },
})
export default class App extends Vue {
  isOpen: boolean = false;

  handleMenuToggle() {
    this.isOpen = !this.isOpen;
  }
}
</script>
