<script setup>
import { ref, onActivated } from 'vue';
onActivated(() => {
  console.log('com4child2 active');
  alert('com4child2 active')
});
</script>
<template>
	<p>com4child2</p>
	<input type="text" name="" id="">
</template>
