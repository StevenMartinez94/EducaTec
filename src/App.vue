<template>
  <NavBar/>
  <img alt="EducaTec-logo" src="../public/prueba.png">
  <div>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
//export default {
//  name: 'App',
//}
export default {
  components: {
    NavBar
  }
}
</script>

<style lang='scss'>
@import './scss/App.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>