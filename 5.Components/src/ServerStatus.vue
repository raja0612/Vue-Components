<template>
    <div>
        Server Status  : {{status}}
        <button @click="changeStatus" class="btn btn-primary">Change Status</button>
        <hr>
    </div>
</template>
<script>
export default {
    data () {
        return {
            status :'Critical'
        }
    },
    methods: {
        changeStatus(){
            this.status = 'Normal'
        }

    }
}
</script>

