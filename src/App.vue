<template>
  <div id="app">
    <Step_1/>
    <Step_2/>
  </div>
</template>

<script>
import Step_1 from '@/pages/Step_1.vue'
import Step_2 from "@/pages/Step_2.vue";

export default {
  name: 'App',
  components: {
    Step_2,
    Step_1
  }
}
</script>
