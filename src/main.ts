import { createApp } from "vue";
import App from "./App.vue";
import "./styles/globals.scss";
import router from "./router";
import { store, key } from "./store/index"

createApp(App).use(store).provide("$store", store).use(router).mount("#app");
