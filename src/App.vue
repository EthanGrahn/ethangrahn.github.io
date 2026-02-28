<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      class="app-bar"
    >
      <div class="d-flex align-center">
        <font-awesome-icon
          :icon="['fas','file-code']"
          size="2x"
        />
        <h1 class="app-title">
          Ethan Grahn
        </h1>
      </div>

      <div
        v-if="!isMobile"
        class="nav-buttons"
      >
        <button
          class="nav-button"
          @click="tab = 'summary'"
        >
          Summary
        </button>
        <button
          class="nav-button"
          @click="tab = 'projects'"
        >
          Projects
        </button>
      </div>

      <v-spacer />

      <button
        v-if="isMobile"
        aria-label="menu"
        class="menu-button"
        @click.stop="drawer = !drawer"
      >
        ☰
      </button>
    </v-app-bar>

    <v-main v-if="!isMobile">
      <div v-if="tab === 'summary'">
        <Home />
      </div>
      <div v-else-if="tab === 'projects'">
        <Projects />
      </div>
    </v-main>

    <v-main v-else>
      <div
        v-if="drawer"
        class="drawer-panel"
      >
        <button
          class="drawer-button"
          @click="(tab = 'summary', drawer = false)"
        >
          Summary
        </button>
        <button
          class="drawer-button"
          @click="(tab = 'projects', drawer = false)"
        >
          Projects
        </button>
      </div>

      <Home
        v-if="tab == 'summary'"
        :key="tab"
      />
      <Projects
        v-if="tab == 'projects'"
        :key="tab"
      />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'

const tab = ref('summary')
const drawer = ref(false)

// show the compact (drawer) nav under this width
const BREAKPOINT = 900
const isMobile = ref(typeof window !== 'undefined' ? window.innerWidth <= BREAKPOINT : false)
function onResize() { isMobile.value = window.innerWidth <= BREAKPOINT }
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<style scoped>
.app-title { width: 6em; margin: auto 0.4em; }
.nav-buttons { display: flex; gap: 12px; align-items: center; }
.nav-button { background: none; border: none; color: white; font-size: 16px; padding: 8px 12px; cursor: pointer; font-weight: 600; }
.menu-button { background: none; border: none; color: white; font-size: 24px; cursor: pointer; }
.drawer-panel { position: fixed; top: 0; right: 0; height: 100vh; width: 280px; background: #fff; box-shadow: -2px 0 8px rgba(0,0,0,0.2); z-index: 9999; padding: 12px; }
.drawer-button { display: block; width: 100%; background: #1976D2; color: white; border: none; padding: 10px; margin-bottom: 8px; text-align: left; border-radius: 4px; cursor: pointer; }
.app-bar { padding: 0 20px; }
</style>
