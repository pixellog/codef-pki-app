import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue, {
  BButton: { variant: 'primary' },
  BModal: {
    cancelTitle: '취소',
    okTitle: '확인',
  },
  BToast: {
    toaster: 'b-toaster-top-center',
    autoHideDelay: 2000,
    variant: 'dark',
    toastClass: null,
    headerClass: 'd-none',
    bodyClass: 'text-center',
  },
});
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
