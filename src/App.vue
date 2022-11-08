<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>
<template>
  <div class="demo">
    <router-link to="/">to com1</router-link><br>
    <router-link to="/com2">to com2</router-link><br>
    <router-link to="/com3">to com3-child1</router-link><br>
	<router-link to="/com4">to com4-child1</router-link><br>
	<router-link to="/com4/child2">to com4-child2</router-link><br>

    <br />
    <router-view v-slot="{ Component, route }">
      <keep-alive v-if="route.meta.keepAlive">
        <component
          :is="Component"
          :key="route.meta.usePathKey ? route.path : undefined"
        />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
