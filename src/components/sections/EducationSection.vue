<template>
  <div class="section">
    <h2 class="section-title">
      Education
    </h2>
    <h3 class="edu-school">
      Dakota State University
    </h3>
    <dl class="edu-grid">
      <div
        v-for="group in credentialGroups"
        :key="group.label"
        class="edu-row"
      >
        <dt class="edu-label">
          {{ group.label }}
        </dt>
        <dd class="edu-credentials">
          <template
            v-for="(cred, index) in group.credentials"
            :key="cred.name"
          >
            <a
              :href="cred.url"
              target="_blank"
              rel="noopener"
            >{{ cred.name }}</a><span
              v-if="index < group.credentials.length - 1"
              class="edu-sep"
            > · </span>
          </template>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
const credentialGroups = [
  {
    label: 'Graduate',
    credentials: [
      { name: 'MS, Computer Science', url: 'https://dsu.edu/programs/mscs/index.html' },
    ],
  },
  {
    label: 'Undergraduate',
    credentials: [
      { name: 'BS, Computer Science', url: 'https://dsu.edu/programs/computer-science-bs.html' },
      { name: 'BS, Computer Game Design', url: 'https://dsu.edu/programs/computer-game-design-bs.html' },
    ],
  },
  {
    label: 'Minors',
    credentials: [
      { name: 'Applied Mathematics', url: 'https://dsu.edu/programs/mathematics-applied-minor.html' },
      { name: 'Computer Graphics', url: 'https://dsu.edu/programs/computer-graphics-minor.html' },
    ],
  },
];
</script>

<style scoped>
.edu-school {
  margin-bottom: 12px;
}

.edu-grid {
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 10px;
  column-gap: 24px;
}

.edu-row {
  display: contents;
}

.edu-label {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: nowrap;
  padding-top: 2px;
}

.edu-credentials {
  margin: 0;
}

.edu-sep {
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .edu-grid {
    grid-template-columns: 1fr;
    row-gap: 4px;
  }

  .edu-row {
    display: block;
    margin-bottom: 10px;
  }

  .edu-row:last-child {
    margin-bottom: 0;
  }

  .edu-label {
    display: block;
    margin-bottom: 2px;
  }
}
</style>
