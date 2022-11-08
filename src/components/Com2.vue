<script setup>
import { ref, onActivated } from 'vue';
import Common from './Common.vue'
onActivated(() => {
  console.log('com2');
});
</script>
<template>
  <p>com2</p>
  <input type="text" />
  <Common />
</template>
