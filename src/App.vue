<template>
  <div class="container">
    <app-header />
    <hr>
    <div class="row">
      <app-server-list />
      <app-server-info />
    </div>
    <hr>
    <app-footer />
    <hr>
    <hr>
    <parent />
  </div>
</template>

<script>
import Header from './components/server-components/Header.vue'
import Footer from './components/server-components/Footer.vue'
import ServerInfo from './components/server-components/ServerInfo.vue'
import ServerList from './components/server-components/ServerList.vue'
import Parent from './components/parent-child-comps/Parent.vue'

export default{
  name: 'App',
  components: {
    appHeader : Header,
    appFooter : Footer,
    appServerInfo : ServerInfo,
    appServerList : ServerList,
    Parent
  }
};
</script>

<style>

</style>
