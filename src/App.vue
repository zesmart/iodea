<script setup lang="ts">
import { ref } from 'vue'
import GravityUiCircles3Plus from './components/GravityUiCircles3Plus.vue'
import GravityUiCompass from './components/GravityUiCompass.vue'
import GravityUiPerson from './components/GravityUiPerson.vue'
import GravityUiHouse from './components/GravityUiHouse.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Discover from './views/Discover.vue'
import Profile from './views/Profile.vue'

const activeTab = ref('home')
</script>

<template>
  <div class="app">
    <main class="content">
      <Home v-if="activeTab === 'home'" />
      <Dashboard v-else-if="activeTab === 'dashboard'" />
      <Discover v-else-if="activeTab === 'discover'" />
      <Profile v-else-if="activeTab === 'profile'" />
    </main>
    <nav class="bottom-nav">
      <div class="nav-item" @click="activeTab = 'home'">
        <GravityUiHouse />
      </div>
      <div class="nav-item" @click="activeTab = 'dashboard'">
        <GravityUiCircles3Plus />
      </div>
      <div class="nav-item" @click="activeTab = 'discover'">
        <GravityUiCompass />
      </div>
      <div class="nav-item" @click="activeTab = 'profile'">
        <GravityUiPerson />
      </div>
    </nav>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: white;
}

.content {
  padding: 0;
  min-height: calc(100vh - 60px);
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
}

.nav-item {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.nav-item svg {
  color: black;
  font-size: 24px;
}
</style>
