import { createApp } from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import commicStore from './store';
import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
  .use(commicStore)
  .mount('#app');
