<template>
    <nav class="navbar">
        <i class="fab fa-vuejs fa-2x"></i>
      <a href="/" class="nav-item">Home</a>
      <a href="experience" class="nav-item">Experience</a>
      <a href="resume" class="nav-item">Resume</a>
      <a href="contact" class="nav-item">Contact</a>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
 .navbar {
  
  width: 100%; /* Make the navbar take the full width of the screen */
  position: fixed; /* Fix the navbar to the top of the screen */
  top: 0; /* Position the navbar at the very top */
  left: 0; /* Align the navbar to the left edge of the screen */
  background-color: #333; /* Adjust the color as needed */
  z-index: 1000; /* Ensure the navbar is above other content */
  display: flex;
  align-items: center; /* Center the navigation links vertically */
  padding: 10px 0; /* Add some padding on the top and bottom */
}

.nav-item {
    margin-left: 35px;

  color: white; /* Color of the nav items */
  text-decoration: none; /* Remove underline from links */
  padding: 14px 10px;  /* Add padding to each nav item for spacing */
  float: left; /* Align links to the left */
  text-align: center;
  display: block;
}

.nav-item:hover {
  background-color: #555; /* Color of nav items on hover */
}

i.fab.fa-vuejs {
  color: #42b883; /* Vue.js brand color */
}

  </style>
  