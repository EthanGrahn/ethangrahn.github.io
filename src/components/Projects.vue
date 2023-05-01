<template>
  <v-container>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h4"> Network Linked Data Index </v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
        The Network Linked Data Index (NLDI) is one of the primary projects I
        contributed to at the USGS. The NLDI is a web service written in Java
        that connects end-users with indexed water data information stored in a
        Postgres database. My work included modernizing to fit Spring Framework
        standards, deploying associated infrastructure in AWS, creating CI/CD
        pipelines, adding new endpoints, and optimizing database queries.
      </v-card-text>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-title class="text-h6">
        Project Links
        <font-awesome-icon
          icon="fa-brands fa-github"
          style="padding-left: 0.5em"
        />
      </v-card-title>
      <v-card-text>
        <ul>
          <li>
            <a
              href="https://github.com/internetofwater/nldi-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              NLDI Services
            </a>
          </li>
          <li>
            <a
              href="https://github.com/internetofwater/nldi-crawler"
              target="_blank"
              rel="noopener noreferrer"
            >
              NLDI Crawler
            </a>
          </li>
          <li>
            <a
              href="https://github.com/internetofwater/nldi-db"
              target="_blank"
              rel="noopener noreferrer"
            >
              NLDI Database
            </a>
          </li>
        </ul>
      </v-card-text>
    </v-card>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h4"> Poddycast </v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
        Poddycast is an open source cross-platform podcast application. The application is built
        using Electron and JavaScript. My contributions include adding support for Patreon RSS feeds,
        importing and exporting opml files, and restructuring the application into modules.
      </v-card-text>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-title class="text-h6">
        Project Link
        <font-awesome-icon
          icon="fa-brands fa-github"
          style="padding-left: 0.5em"
        />
      </v-card-title>
      <v-card-text>
        <ul>
          <li>
            <a
              href="https://github.com/MrChuckomo/poddycast"
              target="_blank"
              rel="noopener noreferrer"
            >
              Poddycast
            </a>
          </li>
        </ul>
      </v-card-text>
    </v-card>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h4"> Bark &amp; Claw </v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
        Bark &amp; Claw is a retro Doom style video game with comically exaggerated dog on cat, squirrel, and mail man violence.
        I was originally hired as a programmer and game designer while I was self-employed but have since transitioned to a permanent
        member of the development team. Currently, I handle all of the programming including AI, interface, and general gameplay
        interactions. The game's art, level, and game design are also a secondary focus for me as they are needed by the project lead.
        Development is still in progress and nearing an initial release.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Projects",

  data: () => ({}),
};
</script>
