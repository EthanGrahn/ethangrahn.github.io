<template>
  <div class="section">
    <h2 class="section-title">
      Work Experience
    </h2>
    <div class="timeline">
      <div
        v-for="entry in experience"
        :key="entry.company"
        class="timeline-entry"
      >
        <span class="timeline-dot" />
        <h3 class="timeline-company">
          {{ entry.company }}
        </h3>
        <p class="timeline-meta">
          <span class="timeline-role">{{ entry.role }}</span>
          <span class="timeline-date">{{ entry.dates }}</span>
        </p>
        <ul class="timeline-bullets">
          <li
            v-for="(bullet, index) in entry.bullets"
            :key="index"
          >
            <template v-if="typeof bullet === 'string'">
              {{ bullet }}
            </template>
            <template v-else>
              {{ bullet.text }}<a
                :href="bullet.url"
                target="_blank"
                rel="noopener"
              >{{ bullet.linkText }}</a>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    company: 'Spliced Inc.',
    role: 'Build Engineer',
    dates: 'Jan 2025 - Mar 2026',
    bullets: [
      'Increased developer workflow speed by 12% through setup of Unreal Engine tooling and infrastructure',
      'Provided on-call support to unblock international QA and content teams',
      'Cached container artifacts with GitLab CI/CD, saving 60% build time for downstream pipelines',
      'Deployed game servers to AWS EKS and Google GKE using Helm and maintained AWS and GCP infrastructure using Terraform and Ansible',
    ],
  },
  {
    company: 'Deck Nine Games',
    role: 'Build Engineer',
    dates: 'Dec 2022 - Dec 2024',
    bullets: [
      'Refactored and maintained multi-project Jenkins CI/CD pipelines',
      'Automated build and delivery of Xbox Series X|S, PlayStation 5, and PC platforms',
      'Integrated proprietary tools into build pipelines and maintained on-premises infrastructure',
      'Reduced game build turnaround time from 8 hours to 3 hours',
    ],
  },
  {
    company: 'USGS Water Mission Area',
    role: 'Enterprise Software Developer',
    dates: 'Aug 2020 - Nov 2022',
    bullets: [
      'Migrated legacy on-premise applications to AWS',
      'Developed Java and Python APIs and implemented CI/CD pipelines using GitLab and GitHub',
      'Built ETL infrastructure to ingest large-scale geospatial data into a Postgres database',
    ],
  },
  {
    company: 'Oak Ridge National Laboratory',
    role: 'Programming Intern',
    dates: 'May 2017 - Aug 2017',
    bullets: [
      'Implemented a medial axis algorithm in C++ and researched computational geometry techniques',
      'Presented findings and implementation details to project stakeholders',
    ],
  },
  {
    company: 'Self-Employed',
    role: 'Freelance Game Developer',
    dates: 'Jun 2015 - Aug 2020',
    bullets: [
      'Developed Unity projects for clients via Fiverr',
      'Gathered requirements, designed technical solutions, and delivered software components',
      {
        text: 'Maintined a perfect 5 star rating with ',
        url: 'https://www.fiverr.com/ekg_max1mum',
        linkText: '56 five star reviews',
      },
    ],
  },
];
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 13px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: var(--color-primary-tint);
}

.timeline-entry {
  position: relative;
  padding-bottom: 24px;
}

.timeline-entry:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -24px;
  top: 4px;
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  background: var(--color-surface);
}

.timeline-company {
  margin-bottom: 4px;
  transition: color 0.15s;
}

.timeline-entry:hover .timeline-company {
  color: var(--color-primary);
}

.timeline-meta {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 2px;
  margin: 0 0 10px 0;
}

.timeline-role {
  font-weight: 500;
}

.timeline-date {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-style: italic;
}

.timeline-bullets {
  margin: 0;
  padding-left: 1.15rem;
}

.timeline-bullets li {
  margin-bottom: 0.25rem;
}

.timeline-bullets li:last-child {
  margin-bottom: 0;
}
</style>
