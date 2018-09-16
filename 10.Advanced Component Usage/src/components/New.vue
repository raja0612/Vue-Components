<template>
    <div>
        <transition name="bounce" appear>
          <p>New Quote Component</p>
        </transition>
          <button class="btn btn-primary" @click="counter++">Click</button>
          {{counter}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            counter:0
        }
    },
    destroyed () {
        console.log('destroyed')
    },
    activated () {
        console.log('activated')
    },
    deactivated () {
        console.log('deactivated')
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

