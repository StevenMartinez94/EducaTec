<template>
  <div v-if="$store.state.user"> 
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default { 
  setup() {
    const store = useStore()
    
    onBeforeMount(()=> {
      store.dispatch('fetchUser')
    })
    
    }
  }
</script>

<style>

</style>