<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <server-details></server-details>
        </div>
        <hr>
       <app-footer></app-footer>
    </div>
</template>

<script>
import Header  from './components/shared/Header.vue'
import Footer  from './components/shared/Footer.vue'
import Servers from './components/servers/Servers.vue'
import ServerDetails from './components/servers/ServerDetails.vue'

export default {
    components : {
        'app-header': Header,
        'app-footer': Footer,
        'app-servers': Servers,
        'server-details':ServerDetails
    }
}
</script>

<style>

</style>
