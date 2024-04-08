
<template>

<Background/>
  <div class="about-container">
   
    <div class="profile">
        
      <img src="@/assets/profile.jpeg" alt="Vamsi Vemuri" class="profile-pic">
    </div>
    <div class="about-content">
      <h2>About Me</h2>
      <p>I am Vamsi Vemuri, a seasoned IT professional with over 12 years of experience specializing in .NET frameworks, web development technologies, and Azure cloud.</p>
      <p>My expertise spans from developing robust, scalable applications using .Net, Angular, React, and Vue JS, to leading migrations and optimizations in cloud environments, particularly Azure.</p>
      <p>I am passionate about driving innovation through team leadership and technical excellence.</p>
      <p>Based in Tampa, Florida, I am dedicated to transforming complex business requirements into effective, user-centric software solutions.</p>
   
        <!-- Social Media Icons -->
    <div class="social-media">
        <br/>
        <a href="https://www.linkedin.com/in/vemurivamsi/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://medium.com/@vemurivi" target="_blank"><i class="fab fa-medium fa-2x"></i></a>
        <a href="https://github.com/vemurivi" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>
        <!-- Add more icons as needed -->
    </div>

    </div>
    </div>

  </template>
  
  <script>
  import Background from './Background.vue'; // Adjust the path as necessary

  export default {
    name: 'Home',
  components: {
    Background
  }
}
  </script>
  <style scoped>
  @import url('https://use.fontawesome.com/releases/v5.15.1/css/all.css');

  
  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4; /* Light grey background */
    padding: 20px;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow */
    width:max-content
  }
  
  .profile-pic {
    width: 300px;
    height: auto;
    border-radius: 50%; /* Circular image */
  }
  
  .about-content {
  max-width: 800px; /* Adjust based on your layout */
  background: #f9f9f9; /* Light background for the text */
  border-radius: 10px;
  padding: 20px;
  color:black;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1); /* Optional: adds depth */
}

.about-content h2 {
  margin-top: 0;
}

.about-content p {
  font-size: 1.1rem; /* Larger text for readability */
  line-height: 1.6;
  margin-top: 10px;
}
  
  .social-media a {
    margin: 0 10px;
    color: #333; /* Icon color */
    font-size: 24px; /* Icon size */
  }
  
  .social-media a:hover {
    color: #007bff; /* Color change on hover */
  }

  
  
  /* Import FontAwesome for social media icons */
  
  </style>
  
