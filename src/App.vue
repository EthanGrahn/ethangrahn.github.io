<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <font-awesome-icon icon="file-code" size="2x" />

        <h1 style="width: 6em; margin: auto 0.4em;">
          Ethan Grahn
        </h1>
      </div>
      <v-tabs
        v-model="tab"
      >
        <v-tab key="summary">Summary</v-tab>
        <v-tab key="project">Projects</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-tabs-items v-model="tab">
        <v-tab-item key="summary">
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
