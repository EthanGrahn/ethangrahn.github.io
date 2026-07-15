<template>
  <div class="section">
    <h2 class="section-title">
      About
    </h2>
    <p class="bio">
      I am a software engineer focused on developer experience/tooling, DevOps, infrastructure, and backend development.
      Most recently, I worked at Spliced Inc. and Deck Nine Games as a Build Engineer, where I expanded and maintained build automation systems.
      I have experience maintaining cloud infrastructure on AWS and GCP; developing CI/CD pipelines with GitLab, GitHub, Jenkins, and Horde; building APIs with Java, Python, and C#; and other related skills.
    </p>
    <div class="contact-list">
      <a
        href="mailto:ekgrahn.resume@outlook.com"
        class="contact-item"
      >
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          class="contact-icon"
        />
        <span>ekgrahn.resume@outlook.com</span>
      </a>

      <span class="contact-item">
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          class="contact-icon"
        />
        <span>Minnesota, US</span>
      </span>

      <a
        href="https://github.com/EthanGrahn/ethangrahn.github.io"
        target="_blank"
        rel="noopener"
        class="contact-item"
      >
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="contact-icon"
        />
        <span>This website is hosted on GitHub!</span>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bio {
  margin: 0 0 16px;
}

.contact-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-muted);
  text-decoration: none;
}

a.contact-item:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.contact-icon {
  color: var(--color-primary);
}

@media (max-width: 900px) {
  .contact-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
