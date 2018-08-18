<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Components</h1>
                 <app-hello :greetings="Raja"></app-hello>
            </div>
        </div>
    </div>
</template>

<script>
   import Hello from './components/Hello.vue'

    export default {
         components: {
              appHello: Hello
         }
    }
</script>

<style>

</style>
