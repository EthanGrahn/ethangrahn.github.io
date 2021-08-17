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
        v-if="!$vuetify.breakpoint.mobile"
        v-model="tab"
        show-arrows
      >
        <v-tab key="summary">Summary</v-tab>
        <v-tab key="project">Projects</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon 
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main v-if="!$vuetify.breakpoint.mobile">
      <v-tabs-items v-model="tab">
        <v-tab-item key="summary">
          <Home/>
        </v-tab-item>
        <v-tab-item key="project">
          <Projects/>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
    <v-main v-else>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        floating
        temporary
      >      
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="tab"
        >
          <v-list-item value="summary">
            <v-list-item-title>Summary</v-list-item-title>
          </v-list-item>

          <v-list-item value="projects">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>      
      </v-navigation-drawer>
          <Home
            :key="tab"
            v-if="tab == 'summary'"
          />
          <Projects
            :key="tab"
            v-if="tab == 'projects'"
          />
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
    tab: 'summary',
    drawer: false
  })
};
</script>
