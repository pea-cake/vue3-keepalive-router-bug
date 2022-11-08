<script setup>
import { ref, onActivated } from 'vue';
onActivated(() => {
  console.log('com3child1 active');
  alert('com3child1 active')
});
</script>
<template>
	<p>com3child1</p>
	<input type="text" name="" id="">
</template>
