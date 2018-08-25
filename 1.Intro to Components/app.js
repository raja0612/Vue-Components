//Global Components declaration
Vue.component('my-component', {
    data() {
        // data is function which returns the component data
        return {
            learn: 'I learn today Vue Components. So get a beer buddy. This means love myself',
            beer: 0
        }
    },
    watch: {
        beer: function (beerCount) {
            this.beer = beerCount;
            if (this.beer > 3) {
                alert('Easy...! It"s not the end of world... Stop Drinking go home ...Call Uber')
            }
        }
    },
    template: '<p>{{learn}} <br> <button @click="beer++">Order Beer</button>{{beer}}</p>'
})
new Vue({
    el: '#app',
    data: {
        question: 'color:red',
        answer: 'color:blue',
        style: ''
    }
})