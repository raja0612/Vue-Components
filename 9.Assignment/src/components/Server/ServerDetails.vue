<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select Server</p>
        <p v-else>Server  {{server.id}} is selected and It's Status {{server.status}}</p>
        <button class="btn btn-primary" @click="chnageStatus">Change Status</button>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
    data (){
        return {
            server:null
        }
    },
    created(){
        eventBus.$on('serverSelected',(selectedServer) => {
            this.server = selectedServer;
        })
    },
    methods : {
        chnageStatus () {
            this.server.status = 'Normal'
        }
    }
}
</script>

<style>

</style>
