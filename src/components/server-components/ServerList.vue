<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" >
          <Server @click.native='sendToInfo(server)' v-for="server in servers" :key='server' :serverData='server'></Server>
        </ul>
      </div>
</template>

<script>
import Server from './Server'
import {eventBus} from '../../main'

export default {
    name: 'ServerList',
    components : {
      Server
    },
    data : function(){
      return {
        servers : [
          { id: 1, status: 'Critical' },
          { id: 2, status: 'Normal' },
          { id: 3, status: 'Danger' },
          { id: 4, status: 'Unknown' }
        ]
      }
    },
    methods : {
      sendToInfo(server){
        eventBus.sendToServerInfo(server);
      }
    }
}
</script>

<style scoped>
  div {
    border : 2px solid red;
  }
</style>