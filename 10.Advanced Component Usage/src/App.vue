<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <!-- un comment this to know how slot is compiled and styled in child compoents
                   
                   <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p slot="content">A wonderful Quote!</p>
               </app-quote> 
               -->
                <hr>
               <button class="btn btn-primary" @click="selectedComponent='appQuote'">Quote</button>
               <button class="btn btn-primary" @click="selectedComponent='appAuthor'">Author</button>
               <button class="btn btn-primary" @click="selectedComponent='appNewQuote'">New Quote</button>
               <hr>
               <keep-alive>
               <component :is="selectedComponent">
                 <h2 slot="title">{{quoteTitle}}</h2>
                 <p slot="content">A wonderful Quote!</p>
               </component>
               </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
   import Quote from './components/Quote.vue'
   import Author from './components/Author.vue'
   import New from './components/New.vue'

    export default {
        data (){
          return {
            quoteTitle: 'The Quote',
            selectedComponent: 'appQuote'
         }
        },
        components : {
            'appQuote' : Quote,
            'appAuthor' : Author,
            'appNewQuote' : New

        }
        
    }
</script>

<style scoped>
h2 {
      color: red
  }
</style>
