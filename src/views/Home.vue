<template>
  <div>
    <home-run></home-run>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    

  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import HomeRun from '@/components/HomeRun.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeRun
  }
}
</script>
