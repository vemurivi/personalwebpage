<template>

  <div id="app">
    <router-view/>
    <Navbar />
    <!-- Other content and components -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
