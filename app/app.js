import Vue from 'nativescript-vue';

import Home from './components/Home.vue';

new Vue({
  components: {
    Home,
  },

  template: `
        <Frame>
            <Home />
        </Frame>`,
}).$start();
