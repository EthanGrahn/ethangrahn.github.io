<template>
  <div class="section">
    <h2 class="section-title">
      Accomplishments
    </h2>
    <ul class="accomplishments-list">
      <li
        v-for="item in accomplishments"
        :key="item.title"
      >
        <a
          :href="item.url"
          target="_blank"
          rel="noopener"
          :title="item.linkTitle"
          class="accomplishment-link"
        >
          <font-awesome-icon
            :icon="['fas', 'info-circle']"
            class="accomplishment-icon"
          />
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const accomplishments = [
  {
    title: 'CyberCorps Scholar (Scholarship for Service)',
    url: 'https://www.sfs.opm.gov/',
    linkTitle: 'Official Scholarship for Service website',
  },
  {
    title: 'USGS Special Thanks and Recognition (STAR) Award',
    url: 'https://www.usgs.gov/human-capital/awards',
    linkTitle: 'USGS awards webpage',
  },
];
</script>

<style scoped>
.accomplishments-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accomplishment-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.15s;
}

.accomplishment-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.accomplishment-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}
</style>
