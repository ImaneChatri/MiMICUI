<template>
<div>
  <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="Paste the text you would like to be summarized..."></textarea>

    <div id="example-1">
  <button @click="counter += 1">Summarize</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
    
</div>

</template>


<script>
// import Vue from 'vue'

export default {
  name: 'Boxes',
  props: {
    msg: String
  },

data (){
    return{
        counter: 0
    }
}
}
</script>

<style scoped>

button {
    background-color: #e27642; 
    border: none;
    color: white;
    padding: 15px 25px;
    margin: 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    position: absolute;
    bottom: 300px;
  }
</style>