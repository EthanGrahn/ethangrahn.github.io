<template>
  <div class="project-list">
    <details
      v-for="project in projects"
      :key="project.name"
      class="project-entry"
    >
      <summary class="project-summary">
        <span class="project-icon">
          <img
            v-if="project.thumbnail && !brokenThumbnails.has(project.name)"
            :src="project.thumbnail"
            :alt="project.name"
            class="project-thumbnail"
            @error="brokenThumbnails.add(project.name)"
          >
          <font-awesome-icon
            v-else
            :icon="['fas', 'lightbulb']"
          />
        </span>
        <span class="project-heading">
          <span class="project-name">{{ project.name }}</span>
          <span class="project-short">{{ project.shortDescription }}</span>
        </span>
        <span
          class="project-chevron"
          aria-hidden="true"
        />
      </summary>
      <div class="project-content">
        <p class="project-full">
          {{ project.fullDescription }}
        </p>
        <div
          v-if="project.links.length"
          class="project-links"
        >
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="tag"
          >
            <font-awesome-icon :icon="link.icon" />
            {{ link.label }}
          </a>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const brokenThumbnails = reactive(new Set());

const projects = [
  {
    name: 'Network Linked Data Index',
    shortDescription: 'A USGS Java web service linking users to indexed water data via Postgres.',
    fullDescription: 'The Network Linked Data Index (NLDI) is one of the primary projects I contributed to at the USGS. The NLDI is a web service written in Java that connects end-users with indexed water data information stored in a Postgres database. My work included modernizing to fit Spring Framework standards, deploying associated infrastructure in AWS, creating CI/CD pipelines, adding new endpoints, ingesting large datasets, and optimizing database queries.',
    thumbnail: 'https://www.usgs.gov/themes/custom/usgs_tantalum/favicon.ico',
    links: [
      { label: 'NLDI Introduction', url: 'https://waterdata.usgs.gov/blog/nldi-intro/', icon: ['fas', 'info-circle'] },
      { label: 'NLDI Services', url: 'https://github.com/internetofwater/nldi-services', icon: ['fab', 'github'] },
      { label: 'NLDI Crawler', url: 'https://github.com/internetofwater/nldi-crawler', icon: ['fab', 'github'] },
      { label: 'NLDI Database', url: 'https://github.com/internetofwater/nldi-db', icon: ['fab', 'github'] },
    ],
  },
  {
    name: 'Godot Localization Editor',
    shortDescription: 'A desktop tool for editing and annotating Godot CSV translation files.',
    fullDescription: 'The Godot Localization Editor is a free, open-source tool for managing CSV translation files in Godot Engine projects. It supports editing multiple translation files at once through a tabbed interface, quick searching and filtering, contextual notes for team collaboration, automatic translation via the Google Translate API, and autosave with crash recovery. It is available both as a standalone desktop application and as a Godot plugin.',
    thumbnail: 'https://raw.githubusercontent.com/EthanGrahn/godot-localization-editor/15c81e7334f03ac3000ac0392ad7b48e3a77c7b4/images/gle-logo.png',
    links: [
      { label: 'Godot Localization Editor', url: 'https://github.com/EthanGrahn/godot-localization-editor', icon: ['fab', 'github'] },
    ],
  },
  {
    name: 'Jenkins Pipeline Restructure',
    shortDescription: 'Reworked Deck Nine Games’ build pipeline, cutting build time from 8 hours to 3.',
    fullDescription: 'One of the earliest projects that I pushed for after joining Deck Nine Games was to rework their build pipeline. The existing pipeline had a turnaround of roughly 8 hours until a game build was available. I parallelized each platform’s build to run simultaneously and normalized build machine dependencies. This prevented builds from being stuck in a waiting state, ultimately reducing the build time to 3 hours for all platforms.',
    thumbnail: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg',
    links: [],
  },
  {
    name: 'JCHNC Survival Game',
    shortDescription: 'An Android/iOS nature trivia game adapting the Hormel Nature Center’s learning materials.',
    fullDescription: 'The Jay C. Hormel Nature Center Survival Game is an Android and iOS app that I developed as an adaption of the center’s learning materials. The game is a nature trivia game that leads you along winding, branching paths at the nature center. More details available upon request.',
    thumbnail: 'https://play-lh.googleusercontent.com/1t5YFaJ2Iq6qcALlnqM6mCCmwtGDk5HUBNI8NT3n8ngG_TQ-81Ybj4lqvGRQGlh0Ol7M67n-tJeUfP2_4JPi=w240-h480',
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=org.hormelnaturecenter.survivalgame', icon: ['fab', 'google-play'] },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/jchnc-survival-game/id6502843380', icon: ['fab', 'app-store'] },
    ],
  },
  {
    name: 'W4 Build (Godot)',
    shortDescription: 'Self-hosted the open-sourced W4 Build system on my homelab k3s cluster.',
    fullDescription: 'After the announcement that W4 Build would become open source, I set a goal for myself to get it set up and self-hosted in my homelab. I was able to convert the existing Docker Compose setup to k8s resources and have that synced via ArgoCD onto my hardware. Through that process I was able to contribute back bugs fixes, documentation improvements, and features to simplify the initial setup for new users. With a complete setup, I was able to utilize the system to build custom export templates for the JCHNC Survival Game project that I was working on.',
    thumbnail: 'https://gitlab.com/uploads/-/system/group/avatar/13999501/W4_ICON_SHADES.png?width=128',
    links: [
      { label: 'W4 Build - Fork', url: 'https://gitlab.com/EthanGrahn/w4build', icon: ['fab', 'gitlab'] },
    ],
  },
  {
    name: 'Poddycast',
    shortDescription: 'Open-source Electron podcast app; added Patreon RSS support and OPML import/export.',
    fullDescription: 'Poddycast is an open source cross-platform podcast application. The application is built using Electron and JavaScript. My contributions include adding support for Patreon RSS feeds, importing and exporting opml files, and restructuring the application into modules.',
    thumbnail: 'https://raw.githubusercontent.com/MrChuckomo/poddycast/7681168dd6a3639b3bd6944c2a8b5c1a98663b09/app/img/poddycast-app_icon.png',
    links: [
      { label: 'Poddycast', url: 'https://github.com/MrChuckomo/poddycast', icon: ['fab', 'github'] },
    ],
  },
];
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-entry {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}

.project-summary {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  cursor: pointer;
  list-style: none;
}

.project-summary::-webkit-details-marker {
  display: none;
}

.project-entry:hover .project-name {
  color: var(--color-primary);
  transition: color 0.15s;
}

.project-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--color-primary-tint);
  color: var(--color-primary);
  overflow: hidden;
}

.project-thumbnail {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.project-heading {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.project-name {
  font-size: 1.05rem;
  font-weight: 600;
}

.project-short {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.project-chevron {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-left: auto;
  border-right: 2px solid var(--color-text-muted);
  border-bottom: 2px solid var(--color-text-muted);
  transform: rotate(45deg);
}

.project-entry[open] .project-chevron {
  transform: rotate(-135deg);
}

.project-content {
  padding: 0 16px 16px 70px;
  border-top: 1px solid var(--color-border);
  padding-top: 14px;
}

.project-full {
  margin: 0 0 12px;
}

.project-content .project-full:last-child {
  margin-bottom: 0;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-links .tag svg {
  margin-right: 6px;
}

@media (max-width: 900px) {
  .project-content {
    padding-left: 16px;
  }
}
</style>
