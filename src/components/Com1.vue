<script setup>
import { ref, onActivated } from 'vue';
onActivated(() => {
  console.log('com1');
});
</script>
<template>
	<p>com1</p>
</template>
