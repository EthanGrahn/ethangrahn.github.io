<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card style="padding: 12px; margin-bottom: 25px">
          <v-card-title class="text-h4">About</v-card-title>
          <v-divider style="margin: 4px"> </v-divider>
          <v-card-text>
            <p>
              I am a Computer Scientist currently working with the
              <a
                href="https://www.usgs.gov/mission-areas/water-resources"
                target="_blank"
                rel="noopener noreferrer"
                >USGS Water Mission Area</a
              >
              as a Lead Enterprise Software Developer. My work is focused
              around creating cloud based services to supplement the Water
              Mission Area's scientific efforts. I have experience developing
              infrastructure as code for Amazon Web Services, continuous
              integration pipelines within GitLab and GitHub, and building our
              applications as Docker images.
            </p>
            <div>
              <a href="mailto:ekgrahn.resume@outlook.com"
                ><font-awesome-icon
                  icon="envelope"
                  style="margin-right: 8px"
                />ekgrahn.resume@outlook.com</a
              >
              <div>
                <font-awesome-icon
                  icon="map-marker-alt"
                  style="margin-right: 8px"
                />Maryland
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="padding: 12px; margin-bottom: 25px">
          <v-card-title class="text-h4">Education</v-card-title>
          <v-divider style="margin: 4px"> </v-divider>
          <v-card-text>
            <h2 style="margin-bottom: 0.8em">Dakota State University</h2>
            <v-row>
              <v-col
                class="d-flex flex-column justify-start"
                cols="12"
                sm="6"
                md="4"
              >
                <h4>Master's</h4>
                <a
                  href="https://dsu.edu/programs/mscs/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Computer Science</a
                >
              </v-col>
              <v-col
                class="d-flex flex-column justify-start"
                cols="12"
                sm="6"
                md="4"
              >
                <h4>Bachelor's</h4>
                <a
                  href="https://dsu.edu/programs/computer-science-bs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Computer Science</a
                >
                <a
                  href="https://dsu.edu/programs/computer-game-design-bs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Computer Game Design</a
                >
              </v-col>
              <v-col
                class="d-flex flex-column justify-start"
                cols="12"
                sm="6"
                md="4"
              >
                <h4>Minor</h4>
                <a
                  href="https://dsu.edu/programs/mathematics-applied-minor.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Applied Mathematics</a
                >
                <a
                  href="https://dsu.edu/programs/computer-graphics-minor.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Computer Graphics</a
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h4">Work Experience</v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-row>
        <v-col class="d-flex flex-column justify-start" cols="auto">
          <v-card-text>
            <h2>USGS Water Mission Area</h2>
            <h3>Lead Enterprise Software Developer</h3>
            <ul>
              <li>Modernized legacy applications to run in Docker containers</li>
              <li>Created CI/CD pipelines in GitLab and GitHub</li>
              <li>Deployed infrastructure with Amazon Web Services</li>
            </ul>
          </v-card-text>
        </v-col>
        <v-col class="d-flex flex-column justify-start" cols="auto">
          <v-card-text>
            <h2>Oak Ridge National Laboratory</h2>
            <h3>Programming Intern</h3>
            <ul>
              <li>Developed algorithm using C++ and in-depth use of pointers</li>
              <li>Researched techniques for calculating the medial axis of a polygon</li>
              <li>Created research paper and presentation based on findings</li>
            </ul>
          </v-card-text>
        </v-col>
        <v-col class="d-flex flex-column justify-start" cols="auto">
          <v-card-text>
            <h2>Self-Employed</h2>
            <h3>Freelance Programming &amp; Game Design</h3>
            <ul>
              <li>Ensured customer satisfaction by responding to inquiries and providing job estimates</li>
              <li>Developed C# scripts and Unity projects in accordance with customer specifications</li>
              <li>Researched skills to extend current capabilities</li>
            </ul>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col>
        <v-card style="padding: 12px; margin-bottom: 25px">
          <v-card-title class="text-h4">Languages</v-card-title>
          <v-divider style="margin: 4px"></v-divider>
          <v-card-text> Java - TypeScript - JavaScript - Python - C# - Bash/Shell</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="padding: 12px; margin-bottom: 25px">
          <v-card-title class="text-h4">Technologies</v-card-title>
          <v-divider style="margin: 4px"></v-divider>
          <v-card-text> Docker - AWS CDK - Spring Framework - PostgreSQL</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card style="padding: 12px; margin-bottom: 25px">
      <v-card-title class="text-h4">Accomplishments</v-card-title>
      <v-divider style="margin: 4px"> </v-divider>
      <v-card-text>
        <h3>
          CyberCorps Scholar (Scholarship for Service)
          <a
            href="https://www.sfs.opm.gov/"
            title="Official Scholarship for Service website"
          >
            <font-awesome-icon icon="info-circle" />
          </a>
        </h3>
      </v-card-text>
      <v-card-text>
        <h3>
          USGS Special Thanks and Recognition (STAR) Award
          <a
            href="https://www.usgs.gov/human-capital/awards"
            title="USGS awards webpage"
          >
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

  data: () => ({}),
};
</script>
