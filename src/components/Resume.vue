

<template>
   <div class="pdfContainer">
    <div>
      <button @click="page = page > 1 ? page - 1 : page">
        Prev
      </button>
      <span>{{ page }} / {{ pages }}</span>
      <button @click="page = page < pages ? page + 1 : page">
        Next
      </button>
    </div>
    <VuePDF :pdf="pdf" :page="page" :scale="scale"/>
  </div>
    
</template>
        
<script setup>
import { ref } from 'vue';
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import vresume from '../assets/VamsiVemuriResume.pdf'
const page = ref(1)
const scale = ref(1)
const { pdf, pages } = usePDF(vresume)
</script>
<script> 
export default {
    name: 'Resume'
  }
</script>
<style>
.pdfContainer{
  margin-top: 75px;
}
</style>

          