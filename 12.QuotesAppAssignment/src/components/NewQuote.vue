<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
            </div>
        </form>


    </div>
</template>
<script>
export default {
    data () {
        return {
            quote:''
        }
    },
    methods: {
        addQuote () {
            //emit event to parent component App.vue when new quote is added.
            this.$emit('quoteAdded', this.quote);
            // after quote is emitted make quote text area empty so user can enter new quote.
            this.quote = ''
        }

    }
}
</script>

