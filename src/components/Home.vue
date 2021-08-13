<template>
  <v-container>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h3">About</v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="auto">
            <v-img
              src="@/assets/head_web_square.jpg"
              max-width="200"
              style="margin-right: 12px"
            >
            </v-img>
          </v-col>
          <v-col
            class="d-flex flex-column justify-space-between"
          >
            <p>
              I am a junior software developer currently working with the USGS
              Water Mission Area. My work is focused around creating and
              modifying web based services to supplement the Water Mission
              Area's scientific efforts. I have experience developing
              infrastructure as code for Amazon Web Services, continuous
              integration pipelines within GitLab, and "containerizing"
              applications to run via Docker.
            </p>
            <div>
              
              <a href="mailto:EthanGrahn@outlook.com"><font-awesome-icon icon="envelope" style="margin-right: 8px"/>EthanGrahn@outlook.com</a>              
              <div><font-awesome-icon icon="map-marker-alt"  style="margin-right: 8px"/>Iowa</div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h3">Education</v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
        <div
          v-for="university in education"
          :key="university.name"
        >
          <h2 style="margin-bottom: 0.8em">{{ university.name }}</h2>
          <v-row>
          <v-col
            class="d-flex flex-column justify-start"
            v-for="item in university.degrees"
            :key="item.degree + item.degreeType"
          >
            <h4>{{ item.name }}</h4>
            <a :href="item.degreeLink">{{ item.degreeType }} in {{ item.degree }}</a>
            <a v-if="item.minor != null" :href="item.minorLink">Minor in {{ item.minor }}</a>
            <div>GPA: {{ item.gpa }}</div>
          </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h3">Accomplishments</v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
          <h3>CyberCorps Scholar (Scholarship for Service)
            <a href="https://www.sfs.opm.gov/" title="Official Scholarship for Service website">
              <font-awesome-icon icon="info-circle" />
            </a>
          </h3>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    education: [
      {
        name: 'Dakota State University',
        degrees: [
          {
            degree: 'Computer Game Design',
            degreeType: 'BS',
            degreeLink: 'https://dsu.edu/programs/computer-game-design-bs.html',
            minor: 'Applied Mathematics',
            minorLink: 'https://dsu.edu/programs/mathematics-applied-minor.html',
            fromDate: new Date(2014, 8),
            toDate: new Date(2019, 5),
            gpa: 3.58
          },
          {
            degree: 'Computer Science',
            degreeType: 'BS',
            degreeLink: 'https://dsu.edu/programs/computer-science-bs.html',
            minor: 'Computer Graphics',
            minorLink: 'https://dsu.edu/programs/computer-graphics-minor.html',
            fromDate: new Date(2014, 8),
            toDate: new Date(2019, 5),
            gpa: 3.58
          },
          {
            degree: 'Computer Science',
            degreeType: 'MS',
            degreeLink: 'https://dsu.edu/programs/mscs/index.html',
            minor: null,
            fromDate: new Date(2018, 8),
            toDate: new Date(2020, 5),
            gpa: 3.90
          }
        ]
      }
    ]
  }),
};
</script>
