<template>
    <div class="background"></div>
  </template>
  <script>
  export default {
    name: 'Background'
  }
  </script>
  
  <style scoped>
  .background {
  background-image: url('@/assets/bgpic.jpeg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
  </style>
  