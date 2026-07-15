<template>
  <div>
    <header class="nav-bar">
      <div class="nav-left">
        <font-awesome-icon
          :icon="['fas','file-code']"
          size="2x"
          class="brand-icon"
        />
        <h1 class="brand-title">
          Ethan Grahn
        </h1>
      </div>

      <nav
        v-if="!isMobile"
        class="nav-right"
      >
        <button
          type="button"
          :class="['nav-item', { active: tab === 'summary' }]"
          @click="tab = 'summary'"
        >
          Summary
        </button>
        <button
          type="button"
          :class="['nav-item', { active: tab === 'projects' }]"
          @click="tab = 'projects'"
        >
          Projects
        </button>
        <a
          class="nav-item"
          href="https://www.linkedin.com/in/ethangrahn/"
          target="_blank"
          rel="noopener"
        >
          <font-awesome-icon :icon="['fab','linkedin']" />
          LinkedIn
        </a>
        <a
          class="nav-item"
          href="https://github.com/EthanGrahn"
          target="_blank"
          rel="noopener"
        >
          <font-awesome-icon :icon="['fab','github']" />
          GitHub
        </a>
      </nav>

      <button
        v-else
        type="button"
        class="menu-button"
        aria-label="Toggle navigation menu"
        @click.stop="drawer = !drawer"
      >
        ☰
      </button>
    </header>

    <div
      v-if="isMobile && drawer"
      class="mobile-panel"
    >
      <button
        type="button"
        :class="['mobile-item', { active: tab === 'summary' }]"
        @click="selectTab('summary')"
      >
        Summary
      </button>
      <button
        type="button"
        :class="['mobile-item', { active: tab === 'projects' }]"
        @click="selectTab('projects')"
      >
        Projects
      </button>
      <a
        class="mobile-item"
        href="https://www.linkedin.com/in/ethangrahn/"
        target="_blank"
        rel="noopener"
        @click="drawer = false"
      >
        <font-awesome-icon :icon="['fab','linkedin']" />
        LinkedIn
      </a>
      <a
        class="mobile-item"
        href="https://github.com/EthanGrahn"
        target="_blank"
        rel="noopener"
        @click="drawer = false"
      >
        <font-awesome-icon :icon="['fab','github']" />
        GitHub
      </a>
    </div>

    <main class="content">
      <SummaryView v-if="tab === 'summary'" />
      <ProjectsView v-else />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SummaryView from './components/SummaryView.vue'
import ProjectsView from './components/ProjectsView.vue'

const tab = ref('summary')
const drawer = ref(false)

function selectTab(name) {
  tab.value = name
  drawer.value = false
}

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
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  padding: 10px 24px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  color: var(--color-primary);
}

.brand-title {
  color: var(--color-text);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 6px 4px;
  font: inherit;
  font-weight: 600;
  color: var(--color-text-muted);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
}

.nav-item:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.nav-item.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.menu-button {
  background: none;
  border: none;
  font-size: 22px;
  line-height: 1;
  color: var(--color-text);
  cursor: pointer;
  padding: 6px 8px;
  transition: color 0.15s;
}

.menu-button:hover {
  color: var(--color-primary);
}

.mobile-panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--color-surface);
  border-left: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  padding: 16px;
  z-index: 30;
}

.mobile-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: none;
  border: none;
  border-radius: var(--radius);
  padding: 10px 12px;
  font: inherit;
  font-weight: 600;
  color: var(--color-text-muted);
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
}

.mobile-item:hover {
  color: var(--color-primary);
  background: var(--color-primary-tint);
}

.mobile-item.active {
  color: var(--color-primary);
  background: var(--color-primary-tint);
}

.content {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 24px 20px;
}
</style>
