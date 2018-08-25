<template>
   <div class="container">
       <p></p>
       <p>This is root componennt</p>
       <button @click="showServer(1)">Show Server1</button>
        <button @click="showServer(2)">Show Server2</button>
       <div v-for="i in 2">
           <app-server v-if="i === serverNumber" :server="i"></app-server>
       </div>
       
   </div>
</template>

<script>
  export default {
      data () {
          return  {
              serverNumber: null,

          }
      },
      methods: {
          showServer (number ){
              this.serverNumber = number;
          }
      }
  }

</script>

<style>

</style>
