<template>
<div>
  <!-- <img alt="MiMIC logo" src="./assets/MiMICLogo.png">
  <Boxes msg="Hello World!"/>
  <ClearButton msg="Hello World!"/> -->
  <Home />
</div>
  
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import Boxes from './components/Boxes.vue'
//import ClearButton from './components/ClearButton.vue'
import Home from './Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    //Boxes,
    //ClearButton
    Home
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: -5px;
  margin-bottom: 50px;
  background-color:#aecfff;
} */
</style>
