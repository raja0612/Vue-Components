<template>
   <div class="container">
       <p></p>
       <p>This is root componennt</p>
        <div v-on:click="firstFunction(); secondFunction();">Click</div>
        <button @click="showServer(1)">Show Server1</button>
        <button @click="showServer(2)">Show Server2</button>
        <div v-on:click="firstFunction(); secondFunction();"></div>
       <div v-for="i in 2">
           <app-server v-if="i === serverNumber" :server="i"></app-server>
       </div>
<!--
       <div>
           Steps to follow for Office work:

           1. On CoordinatorConfernces component

           Iterate all coordinator ranks child components 
           based upon coordinator no of conferences 
           and intially hide them.

           <div v-for="i in noOfConferenceLength">
               <coordinator-ranks  v-if="i === serverNumber" :componentNumber="i">
               </coordinator-ranks>
           </div>
           <div v-on:click="firstFunction(); secondFunction();"></div>
           2. When the user clicks on particular data table confernce row
           pass index number bacause it;s unique
           <coordinator-ranks :componentNumber="index"></coordinator-ranks>
           in coordinator-ranks component
           declare props property add :componentNumber

       </div>
       -->
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
          },
         firstFunction() {
           console.log('firstFunction')
         },
        secondFunction() {
            console.log('secondFunction')

        }
      }
  }

</script>

<style>

</style>
