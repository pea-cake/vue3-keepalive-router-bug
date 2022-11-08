<script setup>
import { ref, onActivated } from 'vue';
import Common from './Common.vue'
onActivated(() => {
  console.log('com4child1');
});
</script>
<template>
	<p>com4child1</p>
	<input type="text" name="" id="">
	<Common />
</template>
