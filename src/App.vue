<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1 style="width: 6em; margin: auto 0.4em;">
          Ethan Grahn
        </h1>
      </div>
      <v-tabs
        v-model="tab"
        centered
      >
        <v-tab key="resume">Resume</v-tab>
        <v-tab key="project">Projects</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-tabs-items v-model="tab">
        <v-tab-item key="resume">
          <Home/>
        </v-tab-item>
        <v-tab-item key="project">
          <Projects/>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Projects from './components/Projects';

export default {
  name: 'App',

  components: {
    Home,
    Projects
  },

  data: () => ({
    tab: String
  }),
};
</script>
