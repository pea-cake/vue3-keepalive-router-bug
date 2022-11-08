<script setup>
import { ref, onActivated } from 'vue';
onActivated(() => {
  console.log('com4child1 active');
  alert('com4child1 active')
});
</script>
<template>
	<p>com4child1</p>
	<input type="text" name="" id="">
</template>
