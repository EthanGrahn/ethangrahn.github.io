<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <font-awesome-icon :icon="['fas','file-code']" size="2x" />
        <h1 class="app-title">Ethan Grahn</h1>
      </div>

      <div v-if="!isMobile" class="nav-buttons">
        <button @click="tab = 'summary'" class="nav-button">Summary</button>
        <button @click="tab = 'projects'" class="nav-button">Projects</button>
      </div>

      <v-spacer />

      <button v-if="isMobile" @click.stop="drawer = !drawer" aria-label="menu" class="menu-button">☰</button>
    </v-app-bar>

    <v-main v-if="!isMobile">
      <div v-if="tab === 'summary'"><Home /></div>
      <div v-else-if="tab === 'projects'"><Projects /></div>
    </v-main>

    <v-main v-else>
      <div v-if="drawer" class="drawer-panel">
        <button @click="(tab = 'summary', drawer = false)" class="drawer-button">Summary</button>
        <button @click="(tab = 'projects', drawer = false)" class="drawer-button">Projects</button>
      </div>

      <Home :key="tab" v-if="tab == 'summary'" />
      <Projects :key="tab" v-if="tab == 'projects'" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'

const tab = ref('summary')
const drawer = ref(false)

const isMobile = ref(typeof window !== 'undefined' ? window.innerWidth <= 680 : false)
function onResize() { isMobile.value = window.innerWidth <= 680 }
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

// removed debug watcher
</script>

<style scoped>
.app-title { width: 6em; margin: auto 0.4em; }
.nav-buttons { display: flex; gap: 12px; align-items: center; }
.nav-button { background: none; border: none; color: white; font-size: 16px; padding: 8px 12px; cursor: pointer; font-weight: 600; }
.menu-button { background: none; border: none; color: white; font-size: 24px; cursor: pointer; }
.drawer-panel { position: fixed; top: 0; right: 0; height: 100vh; width: 280px; background: #fff; box-shadow: -2px 0 8px rgba(0,0,0,0.2); z-index: 9999; padding: 12px; }
.drawer-button { display: block; width: 100%; background: #1976D2; color: white; border: none; padding: 10px; margin-bottom: 8px; text-align: left; border-radius: 4px; cursor: pointer; }
</style>
