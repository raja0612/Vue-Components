<template>
    <li class="list-group-item" style="cursor: pointer" @click="serverSelected">
        Server {{ server.id }} Status : {{server.status}}
    </li>
</template>

<script>
  import { eventBus } from '../../main'

    export default {
        props: ['server'],
        methods : {
            serverSelected () {
                console.log('serverSelected ',this.server)
                eventBus.$emit('serverSelected',this.server)
            }
        }
    }
</script>

<style>

</style>