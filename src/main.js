import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    sendToServerInfo(serverInfo){
      this.$emit('serverInfoSent', serverInfo);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
