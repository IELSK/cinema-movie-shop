<template>
  <div>
    <Sidebar />
    <Header></Header>
    <router-view>
    </router-view>
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
export default class App extends Vue {}
</script>
