import { createApp } from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import commicStore from './store';
import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/app.scss';
import '@/assets/scss/header.scss';
import '@/assets/scss/cartoonCards.scss';
import '@/assets/scss/cartoonModal.scss';
import '@/assets/scss/cartoonStatsModal.scss';
import '@/assets/scss/footer.scss';

createApp(App)
  .use(commicStore)
  .mount('#app');
