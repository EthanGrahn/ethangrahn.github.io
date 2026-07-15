<template>
  <div class="section">
    <h2 class="section-title">
      Skills
    </h2>
    <div class="skills-groups">
      <div
        v-for="group in skillGroups"
        :key="group.label"
        class="skills-group"
      >
        <span class="skills-group-label">{{ group.label }}</span>
        <div class="skills-tags">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="tag"
          >{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'C#', 'Java', 'TypeScript', 'JavaScript', 'Bash/Shell'],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: ['AWS', 'GCP', 'Terraform', 'AWS CDK', 'Kubernetes', 'Helm', 'Ansible', 'Docker'],
  },
  {
    label: 'CI/CD & Build',
    skills: ['GitLab CI', 'GitHub Actions', 'Jenkins', 'Horde', 'Perforce'],
  },
  {
    label: 'Backend & Data',
    skills: ['Spring Framework', 'PostgreSQL'],
  },
];
</script>

<style scoped>
.skills-groups {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skills-group {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.skills-group-label {
  flex: 0 0 160px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  transition: background-color 0.15s;
}

.tag:hover {
  background: #DCEAF9;
}

@media (max-width: 900px) {
  .skills-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .skills-group-label {
    flex: none;
  }
}
</style>
