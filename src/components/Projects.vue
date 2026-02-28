<template>
  <v-container>
    <v-row class="projects-row">
      <v-col
        cols="12"
        :md="isMobile ? 12 : 6"
        class="project-col"
      >
        <v-card class="card-spacing project-card">
          <v-card-title class="card-title-h2">
            Network Linked Data Index
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            The Network Linked Data Index (NLDI) is one of the primary projects I
            contributed to at the USGS. The NLDI is a web service written in Java
            that connects end-users with indexed water data information stored in a
            Postgres database. My work included modernizing to fit Spring Framework
            standards, deploying associated infrastructure in AWS, creating CI/CD
            pipelines, adding new endpoints, ingesting large datasets, and optimizing database queries.
          </v-card-text>
          <v-divider class="divider-tight" />
          <v-card-text>
            <div class="project-links-chips">
              <v-chip
                href="https://waterdata.usgs.gov/blog/nldi-intro/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fas','info-circle']"
                  class="icon-after"
                />
                NLDI Introduction
              </v-chip>
              <v-chip
                href="https://github.com/internetofwater/nldi-services"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','github']"
                  class="icon-after"
                />
                NLDI Services
              </v-chip>
              <v-chip
                href="https://github.com/internetofwater/nldi-crawler"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','github']"
                  class="icon-after"
                />
                NLDI Crawler
              </v-chip>
              <v-chip
                href="https://github.com/internetofwater/nldi-db"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','github']"
                  class="icon-after"
                />
                NLDI Database
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        :md="isMobile ? 12 : 6"
        class="project-col"
      >
        <v-card class="card-spacing project-card">
          <v-card-title class="card-title-h2">
            Jenkins Pipeline Restructure
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            One of the earliest projects that I pushed for after joining Deck Nine Games was to rework their build
            pipeline. The existing pipeline had a turnaround of roughly 8 hours until a game build was available. I
            parallelized each platform's build to run simultaneously and normalized build machine dependencies.
            This prevented builds from being stuck in a waiting state, ultimately reducing the build time to 3 hours
            for all platforms.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        :md="isMobile ? 12 : 6"
        class="project-col"
      >
        <v-card class="card-spacing project-card">
          <v-card-title class="card-title-h2">
            JCHNC Survival Game
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            The Jay C. Hormel Nature Center Survival Game is an Android and iOS app that I developed as an
            adaption of the center's learning materials. The game is a nature trivia game that leads you along
            winding, branching paths at the nature center. More details available upon request.
          </v-card-text>
          <v-divider class="divider-tight" />
          <v-card-text>
            <div class="project-links-chips">
              <v-chip
                href="https://play.google.com/store/apps/details?id=org.hormelnaturecenter.survivalgame"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','google-play']"
                  class="icon-after"
                />
                Play Store
              </v-chip>
              <v-chip
                href="https://apps.apple.com/us/app/jchnc-survival-game/id6502843380"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','app-store']"
                  class="icon-after"
                />
                App Store
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        :md="isMobile ? 12 : 6"
        class="project-col"
      >
        <v-card class="card-spacing project-card">
          <v-card-title class="card-title-h2">
            W4 Build (Godot)
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            After the announcement that W4 Build would become open source, I set a goal for myself to get it set up and self-hosted in my homelab.
            I was able to successfully run Jenkins, a kubernetes cluster of builder nodes, and the supporting W4 Build services on my hardware.
            Through that process I was able to contribute back bugs fixes, documentation improvements, and features to simplify the initial setup for new users.
            With a complete setup, I was able to utilize the system to build custom export templates for the JCHNC Survival Game project that I was working on.
          </v-card-text>
          <v-divider class="divider-tight" />
          <v-card-text>
            <div class="project-links-chips">
              <v-chip
                href="https://gitlab.com/EthanGrahn/w4build"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','gitlab']"
                  class="icon-after"
                />
                W4 Build - Fork
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        :md="isMobile ? 12 : 6"
        class="project-col"
      >
        <v-card class="card-spacing project-card">
          <v-card-title class="card-title-h2">
            Poddycast
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            Poddycast is an open source cross-platform podcast application. The application is built
            using Electron and JavaScript. My contributions include adding support for Patreon RSS feeds,
            importing and exporting opml files, and restructuring the application into modules.
          </v-card-text>
          <v-divider class="divider-tight" />
          <v-card-text>
            <div class="project-links-chips">
              <v-chip
                href="https://github.com/MrChuckomo/poddycast"
                target="_blank"
                rel="noopener noreferrer"
                class="project-chip"
                size="small"
                variant="tonal"
              >
                <font-awesome-icon
                  :icon="['fab','github']"
                  class="icon-after"
                />
                Poddycast
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        :md="isMobile ? 12 : 6"
        class="project-col"
      >
        <v-card class="card-spacing project-card">
          <v-card-title class="card-title-h2">
            Bark &amp; Claw
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            Bark &amp; Claw is a retro Doom style video game with comically exaggerated dog on cat, squirrel, and mail man violence.
            The project is being made using the Unity game engine. I was originally hired as a programmer and game designer while I
            was self-employed but have since transitioned to a permanent
            member of the development team. Currently, I handle all of the programming including AI, UI, and gameplay. The game's art and
            level design are a secondary focus for me as they are needed by the project lead.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsView",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
};
</script>

<style scoped>
.card-spacing { padding: 12px; margin-bottom: 0; }
.divider-tight { margin: 4px; }
.card-title-h2 {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  margin: 0 0 0.5rem 0 !important;
}
.icon-after { padding-left: 0.5em; }
.project-links { display: flex; align-items: center; gap: 8px; }
.projects-row { row-gap: 12px; column-gap: 12px; align-items: stretch; }
.project-col { display: flex; }
.project-card { display: flex; flex-direction: column; width: 100%; flex: 1 1 auto; }
.project-card .v-card-text { flex: 1 1 auto; }
.project-links-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.project-chip { margin: 0; }
.project-chip .icon-after { margin-right: 6px; }
</style>
