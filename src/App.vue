<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import Header from "./components/layouts/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>
