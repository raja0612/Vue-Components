import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//Declaring Home component as global component
Vue.component('app-server',Home);

new Vue({
  el: '#app',
  render: h => h(App)
})

//Here render is vue method , it is alternative for template , 
//because template has some limitaions
//and also it has some additional features.
//Here render is taking root component App and displays compiled JS code on DOM
