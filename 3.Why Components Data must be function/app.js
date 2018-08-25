
var person = {
    name: 'Raja'
}

Vue.component('global-component',{
    data: function () {
        return {
            person
        }
    },
    methods : {
        changeName  () {
             this.person.name = "Max"
        }
    },
    template: '<p> {{person.name}}  <button @click="changeName"> Change Name </button></p>'
})

Vue.component('my-component',{
    data: function () {
        return {
           name : 'Raja'
        }
    },
    methods : {
        changeName  () {
             this.name = "Max"
        }
    },
    template: '<p> {{name}}  <button @click="changeName"> Change Name </button></p>'
})

new Vue({
    el:'#app'
})

new Vue({
    el:'#app2'
})
