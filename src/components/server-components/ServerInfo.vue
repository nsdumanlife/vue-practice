<template>
    <div class="col-xs-12 col-sm-6" 
    v-if="Object.keys(server).length === 0">
        <p>Click on the server you want to learn more about it.</p>
    </div>
    <div class="col-xs-12 col-sm-6" v-else="">
        <p>Sunucu #{{ server.id }}</p>
        <p>Sunucu Durumu : {{ server.status }}</p>
        <button class="btn btn-primary btn-xs" 
        @click='changeServerStatus'>Fix Problem</button>
    </div>
</template>

<script>
    import {eventBus} from '../../main'

    export default {
        name: 'ServerInfo',
        data : function() {
            return{
                server : {}
            }
        },
        created(){
            eventBus.$on('serverInfoSent', (info) => {
                this.server = info;
            })
        },
        methods: {
            changeServerStatus(){
                this.server.status = 'Normal';
            }
        }   
    }
</script>
<style scoped>
    div {
        border : 2px solid #fbbd08;
    }
</style>