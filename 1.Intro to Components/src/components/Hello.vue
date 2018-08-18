<template>
   <div>
       {{ name }} {{this.greetings}} {{mygreeting}}
   </div>
    
</template>
<script>
export default {
    props: ['greetings'],
     data () {
         return {
             name : 'Hello Vue Component',
             mygreeting: 'Test'
         }
     }
    
}
</script>
<style>

</style>


