<template>
  <img alt="EducaTec-logo" src="../public/prueba.png">
  <div>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default { 
  setup() {
    const store = useStore()
    
    onBeforeMount(()=> {
      store.dispatch)('fetchUser')
    })
    
    }
  }

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>