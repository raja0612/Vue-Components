<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="loadComponent = 'appBlue'">
                    Load Blue Template</button>
                <button class="btn btn-success" @click="loadComponent = 'appGreen'">
                    Load Green Template</button>
                <button class="btn btn-danger"  @click="loadComponent  = 'appRed'">
                    Load Red Template</button>
                <hr>
                <transition name="bounce" appear mode="out-in">
               <component :is="loadComponent">
                   <h2>loaded component  is {{loadComponent}}</h2>
               </component>
               </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
         components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data () {
          return {
              loadComponent: 'appBlue'
          }
        }
       
    }
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
