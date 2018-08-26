<template>
    <div class="component">
        <strong>Child Component</strong>
        <h3>You may view the User Details here</h3>
        <p>User Details</p>
        <p>Username : {{myName}}</p>
        <p>Reverse Name : {{reverseName()}} </p>
        <button class="btn btn-primary" @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default {
       props: {
           myName: String,
           required: true,
       },
       methods : {
           reverseName(){
               console.log('reverseName')
               return this.myName.split("").reverse().join("");
           },
           resetName(){
               console.log('resetName')
               this.myName = 'Child component updated parent property';

               //emit event to Parent component User.vue
               this.$emit('nameWasReset',this.myName); 

           }
       }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
