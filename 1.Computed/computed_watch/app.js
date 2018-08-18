new Vue ({
    el:'#app',
    data : {
        computed : 'Computed Propeties are cached based upon thier dependcies(data properties) '
        +'and computed proprties are re evaluated only when thier depencies are changed',
        watch: 'Vue Does provide a more generic way to observe and react to data changes on Vue Instance',
        message : 'Hello Vue Js World',
        a: 0,
        b: 0,
        sum: 0
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
    },
    watch: {
        a:function(value){
            console.log('a is changed ', value);
            this.a = value;
            this.sum = this.a + this.b;
        },
        b:function(value){
            this.b = value;
            console.log('b is changed', value);
            this.sum = this.a + this.b;
        }

    }
})