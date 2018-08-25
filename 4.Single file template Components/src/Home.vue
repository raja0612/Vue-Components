<template>
    <div>
        <p>Server Status : {{status}}</p>
        <br>
         Server : {{this.server}}
        <button @click="changeStatus" class="btn btn-primary">Change Status</button>
    </div>
</template>
<script>
export default {
    props: ['server'],
    data () {
        return {
            status : 'Crticial'
        }
    },
    methods : {
        changeStatus () {
            this.status = 'Normal'
        }
    }
}
</script>

