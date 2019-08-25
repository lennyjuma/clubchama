<template>
  <div id="app">
      <preloader></preloader>
      <navbar></navbar> 
      <sidebar></sidebar>          
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>    
    <btop ></btop>
    <futer></futer>
  </div>
</template>

<script>
import preloader from './components/preloader.vue'
import navbar from './components/navbar.vue'
import btop from './components/backtotop.vue'
import sidebar from './components/sidebar.vue'
import futer from './components/footer.vue'

export default {
  components: {
    navbar,
    btop,
    futer,
    sidebar,
    preloader
  }  
}
</script>