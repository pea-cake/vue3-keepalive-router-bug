<script setup>
import { ref, onActivated } from 'vue';
</script>
<template>
  <p>com3</p>
  <router-view v-slot="{ Component, route }">
    <keep-alive v-if="route.meta.keepAlive">
      <component
        :is="Component"
        :key="route.meta.usePathKey ? route.path : undefined"
      />
    </keep-alive>
  </router-view>
</template>
