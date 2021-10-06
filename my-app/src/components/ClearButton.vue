<template>

    <div id="example1-1">
  <button @click="counter += 1">Clear</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>

</template>


<script>
// import Vue from 'vue'

export default {
  name: 'ClearButton',
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
    background-color: #e59a20; 
    border: black;
    color: white;
    padding: 15px 32px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
  }
</style>