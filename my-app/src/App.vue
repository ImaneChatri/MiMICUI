<template>
  <img alt="MiMIC logo" src="./assets/MiMICLogo.png">
  <Boxes msg="Hello World!"/>
  <ClearButton msg="Hello World!"/>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Boxes from './components/Boxes.vue'
import ClearButton from './components/ClearButton.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Boxes,
    ClearButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: -5px;
  margin-bottom: 50px;
  background-color:#aecfff;
}
</style>
