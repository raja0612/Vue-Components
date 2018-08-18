new Vue ({
    el:'#app',
    data : {
        computed : 'Computed Propeties are cached based upon thier dependcies(data properties) '
        +'and computed proprties are re evaluated only when thier depencies are changed',
        watch: 'Vue Does provide a more generic way to observe and react to data changes on Vue Instance',
        message : 'Hello Vue Js World'
    },
    computed : {
        reversedMessage: function () {
            console.log('reversedMessage computed')
            return this.message.split('').reverse().join(' ');
        }
    },
    methods : {
        messageReverse () {
            console.log('messageReverse method')
            return this.message.split('').reverse().join(' ');
        }
    }
})