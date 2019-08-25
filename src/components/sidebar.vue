<template>         
    <el-menu
      default-active="1"
      class="sd"
      @open="handleOpen"
      @close="handleClose"
      vue-router="true"
      active-text-color="#F39200"
      background-color="#344258"
      text-color="#fff"
      >     
      
        <router-link   router-link-exact-active to="/">
        <el-menu-item index="1"><i class="el-icon-s-home">Home</i></el-menu-item>
        </router-link>
        
      
      
        <router-link   router-link-exact-active to="/about">
        <el-menu-item index="2"><i class="el-icon-s-opportunity">About Us</i></el-menu-item>
        </router-link>
      
      
        <router-link  router-link-exact-active to="/memebers">
        <el-menu-item index="3"><i class="el-icon-s-custom">Members</i></el-menu-item>
        </router-link>
      
      
        <router-link  router-link-exact-active to="/contact">
        <el-menu-item index="4"><i class="el-icon-s-promotion">Contact Us</i></el-menu-item>
        </router-link>
      
      
     
    </el-menu>
 
  
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


// <router-link class="nav-section-title" router-link-exact-active to="/"><i class="el-icon-s-home">Home</i></router-link>
//                 <router-link class="have-children" router-link-exact-active to="/about"><i class="el-icon-s-opportunity">About</i></router-link>
//                 <router-link class="have-children" router-link-exact-active to="/pages"><i class="el-icon-s-custom">Members</i></router-link>
//                 <router-link class="have-children" router-link-exact-active to="/pages"><i class="el-icon-s-custom">Conatct Us</i></router-link>
//                 <router-link  router-link-exact-active to="/contact"></router-link>