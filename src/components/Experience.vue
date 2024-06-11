<template>
  <section id="experience" class="experience-section">
    <h5>The skills I have</h5>
    <h2>My Experience</h2>

    <div class="experience__container">
      <!-- Each skill set is now a column in the flex container -->
      <div class="skills-column">
        <h3>Frontend Development</h3>
        <div class="experience__content">
          <article class="experience__details" v-for="(skill, index) in frontendSkills" :key="'frontend-'+index">
            <font-awesome-icon icon="check-circle" class="experience__details-icon"/>
            <div>
              <h4>{{ skill.name }}</h4>
              <small class="text-light">{{ skill.level }}</small>
            </div>
          </article>
        </div>
      </div>

      <div class="skills-column">
        <h3>Backend Development</h3>
        <div class="experience__content">
          <article class="experience__details" v-for="(skill, index) in backendSkills" :key="'backend-'+index">
            <font-awesome-icon icon="check-circle" class="experience__details-icon"/>
            <div>
              <h4>{{ skill.name }}</h4>
              <small class="text-light">{{ skill.level }}</small>
            </div>
          </article>
        </div>
      </div>

      <div class="skills-column">
        <h3>DEVOPS</h3>
        <div class="experience__content">
          <article class="experience__details" v-for="(skill, index) in devopsSkills" :key="'devops-'+index">
            <font-awesome-icon icon="check-circle" class="experience__details-icon"/>
            <div>
              <h4>{{ skill.name }}</h4>
              <small class="text-light">{{ skill.level }}</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)

export default {
  name: 'Experience',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      frontendSkills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Vue.js', level: 'Advanced' },
        { name: 'Angular', level: 'Advanced' },
        { name: 'Blazor', level: 'Advanced' }
      ],
      backendSkills: [
        { name: '.NET Framework', level: 'Experienced' },
        { name: 'ASP.NET', level: 'Experienced' },
        { name: 'REST API', level: 'Experienced' },
        { name: 'Azure', level: 'Advanced' },
        { name: 'Microsoft SQL', level: 'Experienced' }
      ],
      devopsSkills: [
        { name: 'Azure DEVOPS', level: 'Experienced' },
        { name: 'GITHUB', level: 'Experienced' },
        { name: 'Jenkins', level: 'Experienced' },
        { name: 'Team City', level: 'Experienced' },
        { name: 'BuildMaster', level: 'Intermediate' }
      ]
    }
  }
}
</script>

<style scoped>
.experience-section {
  background-color: #60a0e0;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Takes the full width of the viewport */
}

.experience__container {
  display: flex;
  justify-content: space-evenly;
  width: 100%; /* Expand the container to take the full available width */
  max-width: none; /* Remove the max-width restriction or set to a larger value */
}

.skills-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #34495E;
  padding: 15px; /* Adjust padding as needed */
  border-radius: 10px;
  margin: 10px;
  width: 30%; /* Assign a percentage width to each column based on the number of columns */
}

.experience__content {
  display: flex;
  flex-direction: column;
}

.experience__details {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
}

.experience__details-icon {
  color: #fff;
}

.text-light {
  margin: 0;
}

</style>
