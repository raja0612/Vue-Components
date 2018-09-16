<template>
    <div class="container">
        <app-header :quoteCount="quotes.length"
                    :maxQuotes="maxQuotes" ></app-header>
        <app-new-quote @quoteAdded="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @deleteQuoteIndex="deleteQuote"></app-quote-grid>
        <app-footer></app-footer>
    </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue"
import QuoteGrid from './components/QuoteGrid.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  data (){
      return {
          quotes: [],
          maxQuotes: 10
      }
  },
  components : {
    'appQuoteGrid': QuoteGrid,
    'appNewQuote': NewQuote,
    'appFooter': Footer,
    'appHeader': Header
   },
   methods : {
       addQuote (quote){
            if(this.quotes.length >= this.maxQuotes){
              return  alert('Sorry You cannot add more than 10 Quotes')
           }
           this.quotes.push(quote)
       },
       deleteQuote (index){
           console.log('deleteQuote Index',index)
           this.quotes.splice(index,1)
       }
   },
        
}
</script>

<style>
</style>
