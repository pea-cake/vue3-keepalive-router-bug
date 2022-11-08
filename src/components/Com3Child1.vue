<script setup>
import { ref, onActivated } from 'vue';
import Common from './Common.vue'
onActivated(() => {
  console.log('child1');
});
</script>
<template>
	<p>child1</p>
	<input type="text" name="" id="">
	<Common />
</template>
