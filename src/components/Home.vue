<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="card-spacing">
          <v-card-title class="card-title-h2">
            About
          </v-card-title>
          <v-divider />
          <v-card-text>
            <p>
              I am a software engineer focused on developer experience/tooling, DevOps, infrastructure, and backend development.
              Most recently, I worked at Spliced Inc. and Deck Nine Games as a Build Engineer, where I expanded and maintained build automation systems.
              I have experience maintaining cloud infrastructure on AWS and GCP; developing CI/CD pipelines with GitLab, GitHub, Jenkins, and Horde; building APIs with Java, Python, and C#; and other related skills.
            </p>
            <div class="contact-list">
              <div class="contact-row">
                <a href="mailto:ekgrahn.resume@outlook.com">
                  <font-awesome-icon
                    :icon="['fas','envelope']"
                    class="contact-icon"
                  />
                  <span class="contact-text">ekgrahn.resume@outlook.com</span>
                </a>
              </div>

              <div class="contact-row">
                <span>
                  <font-awesome-icon
                    :icon="['fas','map-marker-alt']"
                    class="contact-icon"
                  />
                  <span class="contact-text">Minnesota (Remote)</span>
                </span>
              </div>

              <div class="contact-row">
                <a
                  href="https://github.com/EthanGrahn/ethangrahn.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon
                    :icon="['fab','github']"
                    class="contact-icon"
                  />
                  <span class="contact-text">This website is hosted on GitHub!</span>
                </a>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="card-spacing">
          <v-card-title class="card-title-h2">
            Education
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            <h3 class="education-university">Dakota State University</h3>
            <div class="chips-container education-chips">
              <v-chip href="https://dsu.edu/programs/mscs/index.html" target="_blank" rel="noopener noreferrer" small class="chip">MS, Computer Science</v-chip>
              <v-chip href="https://dsu.edu/programs/computer-science-bs.html" target="_blank" rel="noopener noreferrer" small class="chip">BS, Computer Science</v-chip>
              <v-chip href="https://dsu.edu/programs/computer-game-design-bs.html" target="_blank" rel="noopener noreferrer" small class="chip">BS, Computer Game Design</v-chip>
              <v-chip href="https://dsu.edu/programs/mathematics-applied-minor.html" target="_blank" rel="noopener noreferrer" small class="chip">Minor, Applied Mathematics</v-chip>
              <v-chip href="https://dsu.edu/programs/computer-graphics-minor.html" target="_blank" rel="noopener noreferrer" small class="chip">Minor, Computer Graphics</v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="card-spacing">
      <v-card-title class="card-title-h2">
        Work Experience
      </v-card-title>
      <v-divider class="divider-tight" />
      <v-row class="work-row">
        <v-col class="d-flex flex-column justify-start work-col" cols="auto">
          <v-card-text>
            <h2>Spliced Inc.</h2>
            <h3><i>Build Engineer<span class="work-date">Jan 2025 - Mar 2026</span></i></h3>
            <ul>
              <li>Built and deployed Unreal Engine tooling for studio-wide use</li>
              <li>Managed Horde (Epic Games) and GitLab CI pipelines</li>
              <li>Integrated third-party software into workflows</li>
              <li>Maintained multi-cloud Terraform infrastructure</li>
              <li>Deployed game servers using Kubernetes and Helm</li>
            </ul>
          </v-card-text>
        </v-col>

        <v-col class="d-flex flex-column justify-start work-col" cols="auto">
          <v-card-text>
            <h2>Deck Nine Games</h2>
            <h3><i>Build Engineer<span class="work-date">Dec 2022 - Dec 2024</span></i></h3>
            <ul>
              <li>Refactored, built, and maintained Jenkins pipelines</li>
              <li>Generated Unreal Engine game builds for XSX, PS5, and PC platforms</li>
              <li>Created pipelines integrated with proprietary tools</li>
              <li>Maintained on-prem studio server infrastructure</li>
            </ul>
          </v-card-text>
        </v-col>

        <v-col class="d-flex flex-column justify-start work-col" cols="auto">
          <v-card-text>
            <h2>USGS Water Mission Area</h2>
            <h3><i>Enterprise Software Developer<span class="work-date">Aug 2020 - Nov 2022</span></i></h3>
            <ul>
              <li>Containerized legacy applications for on-prem and cloud usage</li>
              <li>Created CI/CD pipelines in GitLab and GitHub</li>
              <li>Developed and deployed API infrastructure in AWS</li>
            </ul>
          </v-card-text>
        </v-col>

        <v-col class="d-flex flex-column justify-start work-col" cols="auto">
          <v-card-text>
            <h2>Oak Ridge National Laboratory</h2>
            <h3><i>Programming Intern<span class="work-date">May 2017 - Aug 2017</span></i></h3>
            <ul>
              <li>Researched and implemented a medial axis algorithm using C++</li>
              <li>Created research paper and presentation based on findings</li>
            </ul>
          </v-card-text>
        </v-col>

        <v-col class="d-flex flex-column justify-start work-col" cols="auto">
          <v-card-text>
            <h2>Self-Employed</h2>
            <h3><i>Freelance Programming &amp; Game Design<span class="work-date">Jun 2015 - Aug 2020</span></i></h3>
            <ul>
              <li>Coordinated customer requests and orders via the Fiverr platform</li>
              <li>Provided technical design and programming for Unity projects</li>
            </ul>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <v-row>
      <v-col>
        <v-card class="card-spacing">
          <v-card-title class="card-title-h2">
            Languages
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            <div class="chips-container">
              <v-chip
                v-for="(lang) in languages"
                :key="lang"
                small
                class="chip"
              >
                {{ lang }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="card-spacing">
          <v-card-title class="card-title-h2">
            Tools / Frameworks
          </v-card-title>
          <v-divider class="divider-tight" />
          <v-card-text>
            <div class="chips-container">
              <v-chip
                v-for="(tech) in technologies"
                :key="tech"
                small
                class="chip"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="card-spacing accomplishments-card">
      <v-card-title class="card-title-h2">
        Accomplishments
      </v-card-title>
      <v-divider class="divider-tight" />
      <v-card-text>
        <h3>
          CyberCorps Scholar (Scholarship for Service)
          <a
            href="https://www.sfs.opm.gov/"
            title="Official Scholarship for Service website"
          >
            <font-awesome-icon
              :icon="['fas','info-circle']"
              class="icon-gap"
            />
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
            <font-awesome-icon
              :icon="['fas','info-circle']"
              class="icon-gap"
            />
          </a>
        </h3>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",

  data: () => ({
    languages: ['Python', 'C#', 'Java', 'TypeScript', 'JavaScript', 'Bash/Shell'],
    technologies: ['Kubernetes', 'Helm', 'Terraform', 'GitLab CI', 'Ansible', 'AWS', 'GCP', 'Docker', 'Jenkins', 'Perforce', 'Horde', 'Spring Framework', 'AWS CDK', 'PostgreSQL'],
  }),
};
</script>

<style scoped>
.card-spacing { padding: 12px; margin-bottom: 25px; }
.divider-tight { margin: 4px; }
.icon-gap { margin-right: 8px; }
.h2-margin { margin-bottom: 0.8em; }
.card-title-h2 {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  margin: 0 0 0.5rem 0 !important;
}
.education-university { margin: 0 0 0.5rem 0; font-size: 1.05rem; font-weight: 500; }
.education-row { row-gap: 6px; column-gap: 12px; }
.education-col h4 { margin: 0 0 0.2rem 0; font-size: 1rem; font-style: italic; }
.education-col a { display: block; margin-bottom: 0.25rem; }
.work-row { row-gap: 6px; column-gap: 12px; }
.work-col h2 { margin: 0 0 0.2rem 0; font-size: 1.05rem; }
.work-col h3 { margin: 0 0 0.35rem 0; font-size: 0.95rem; font-weight: 600; }
.work-col h3 .work-date {
  color: #6b7280;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  font-style: italic !important;
  display: inline !important;
  line-height: 1.3 !important;
  margin-left: 0.5rem;
}
.work-col ul { margin: 0; padding-left: 1.15rem; }
.work-col li { margin-bottom: 0.25rem; }
.chips-container { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.chip {
  margin: 0;
  background-color: #1976D2 !important;
  color: #ffffff;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-height: 28px;
  height: 28px;
  line-height: normal;
  padding: 0 10px;
}

/* ensure chip internals and anchors center vertically */
.chip, .chip .v-chip__content, .chip a, .chip a span {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100%;
}

/* ensure Font Awesome SVGs inside chips align */
.chip svg, .chip .svg-inline--fa {
  display: inline-flex;
  align-self: center;
  vertical-align: middle;
}

/* smaller, single-line chips for the education column */
.education-col .chip {
  min-height: 24px;
  height: 24px;
  padding: 0 8px;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* chips container when flattened into one row */
.education-chips .chip {
  min-height: 24px;
  height: 24px;
  padding: 0 8px;
  font-size: 0.875rem;
  white-space: nowrap;
}
.contact-list { display: flex; flex-direction: column; gap: 6px; margin-top: 0.5rem; }
.contact-row { display: flex; align-items: center; }
.contact-row a { display: flex; align-items: center; gap: 8px; }
.contact-row > span { display: flex; align-items: center; gap: 8px; }
.contact-icon { display: inline-flex; width: 18px; justify-content: center; }
.contact-text { display: inline-block; }
.accomplishments-card h3 { margin: 0 0 0.25rem 0; display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 600; }
.accomplishments-card .v-card-text { padding-top: 6px; padding-bottom: 6px; }
</style>
