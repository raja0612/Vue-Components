Vue.component('global-component',{
    data: function (){
        return {
            message:' I am Global Component'
        }
    },
    template: '<p> {{message}} </p>'
})

var local =  {
    data: function (){
        return {
            message:' I am Local Component'
        }
    },
    template: '<p> {{message}} </p>'
}

new Vue({
    el:'#app',
    components : {
        'local-component' : local
    }
})
new Vue({
    el:'#app2'
})