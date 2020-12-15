<template>
  
    <div class="home">
      <div id="app">
        <div id="nav">
          <router-link to="/"></router-link>
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/services">Services</router-link> 
        </div>
      <router-view/>
      <seccion-banners></seccion-banners>
      </div>
    </div>
  
</template>


<script>

import SeccionBanners from '@/components/SeccionBanners.vue'

export default {
    components: { SeccionBanners }
}
</script>



<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000046;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: royalblue;
}

#nav a.router-link-exact-active {
  color: navy;
}
</style>
