<script setup>
import { ref, onActivated } from 'vue';
onActivated(() => {
  console.log('com2');
});
</script>
<template>
  <p>com2</p>
  <input type="text" />
</template>
