<template>
    <div>
        <slot name="title"></slot>
        <slot name="subtitle"> <span style="color: #ccc">Subtitle</span></slot>
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  div {
      border: 1px solid #ccc;
      box-shadow: 1px 1px 2px black;
      padding:  30px;
      margin: 30px auto;
      text-align: center;
  }
 h2 {
     color:aqua
 }
 .title {
     font-style: italic
 }
</style>


