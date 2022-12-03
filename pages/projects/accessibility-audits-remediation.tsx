import React from 'react'
import Image from 'next/image'

import ProjectLayout from '../../components/layouts/ProjectLayout'
import ProjectCover from '../../components/projects/ProjectCover'
import ProjectSection from '../../components/projects/ProjectSection'
import SectionList from '../../components/projects/SectionList'
import allyCollage from '../../public/images/ally_collage_full.webp'
import allyIssue from '../../public/images/accessibility_issue.webp'
import ProjectSubSection from '../../components/projects/ProjectSubSection'

const AccessibilityAuditsRemediation = (): JSX.Element => {
  return (
    <ProjectLayout title="Accessibility audits and Remediation | Sruti Vijaykumar">

    <ProjectCover title="Accessibility audits and Remediation" imgSrc={allyCollage}/>

    <article className="lg:mx-40 font-light">
      <section className="mt-10">
        <p>
          I worked on about <span className="underline">two dozen accessibility projects</span> at UserWorks for government and private sector clients. These projects include website accessibility evaluations and document remediations.
        </p>
        <figure className="mt-6">
          <Image src={allyIssue} alt="Screenshot of an accessibility issue." className="w-full"/>
          <figcaption className="text-xs">Screenshot of an accessibility issue.</figcaption>
        </figure>
      </section>

      <ProjectSection title="Acronyms">
        <p>PWD - People With Disabilities</p>
        <p>WCAG 2.1 - Web Content Accessibility Guidelines 2.1</p>
      </ProjectSection>

      <ProjectSection title="Impact">
        <SectionList>
          <li>Made 20+ websites, and 500+ pages of documents accessible to PWD. </li>
          <li>Mentored peers and encouraged a holistic understanding of accessibility. </li>
          <li>Trained product teams in best practices for a more sustained approach to accessibility.</li>
        </SectionList>
      </ProjectSection>

      <ProjectSection title="Overview of Approach">
      <ProjectSubSection title="Project Planning">
        In this phase, the focus is on becoming familiar with the contents of the web pages and documents and answering the following questions:
        <SectionList>
          <li>What is the scope of the project?</li>
          <li>What is the project timeline?</li>
          <li>Who is in the team and how are we distributing efforts?</li>
          <li>What do we need to get started? This could include login credentials, IP whitelisting, use cases, and dummy data for the use cases</li>
          <li>Do we need a subject matter expert to help us with the use cases?</li>
        </SectionList>
      </ProjectSubSection>

      <ProjectSubSection title="Accessibility Evaluation">
        <p>Step 1: Test the website using automated accessibility testing tools like Lighthouse/WAVE to flag problem areas.</p>
        <p>Step 2: Evaluate the website manually using keyboard-only navigation tests, color contrast checks, and assistive technologies like:</p>
        <SectionList>
          <li>Screenreaders (JAWS and VoiceOver) </li>
          <li>Speech recognition software (Dragon Naturally Speaking)</li>
          <li>Screen magnification software (ZoomText)</li>
        </SectionList>
        <p>Step 3: Test the web pages/documents with PWD and gather feedback.</p>
        <p>Step 4: For every issue identified, describe the experiences of PWD, cite the appropriate WCAG 2.1 standards, and include screenshots.</p>
        <p>Step 5: Provide multiple recommendations for each issue logged, so that developers can compare options and choose from multiple solutions.</p>
        <p>Step 6: Assign a severity rating to each issue so that developers can prioritize the remediation work.</p>
        <SectionList>
          <li>High Severity: Likely to prevent PWD from completing a critical task.</li>
          <li>Medium Severity: Likely to prevent PWD from completing a non-critical task OR likely to cause confusion or frustration and have a significantly negative impact on, but not prevent, PWD from completing a critical task.</li>
          <li>Low Severity: Potential to cause minor confusion or frustration and negatively affect (e.g., slow down), but not prevent, PWD from completing a task.</li>
        </SectionList>
      </ProjectSubSection>
      <ProjectSubSection title="Report">
        <p>Details of the project and a summary of all the positive findings and issues are combined in a PDF document as one of the deliverables.</p>
      </ProjectSubSection>
      <ProjectSubSection title="Findings Presentation and Collaboration">
        <SectionList>
          <li>Give stakeholders about a week or as much time as they need to go through the spreadsheet and the report before we present our findings. </li>
          <li>
            Ensure that the developers feel ready to start the remediation.
            <SectionList>
              <li>Present our findings</li>
              <li>Answer questions</li>
              <li>Discuss severity ratings and prioritize remediation of issues identified</li>
              <li>Discuss alternative solutions and their impact on PWD</li>
            </SectionList>
          </li>
        </SectionList>
      </ProjectSubSection>
      <ProjectSubSection title="Training Product Teams">
        <SectionList>
          <li>List all the positive findings and encourage stakeholders to continue these practices</li>
          <li>List issues and their impact on PWD </li>
          <li>Share best practices in web accessibility with demonstrations</li>
          <li>Emphasize “no-excuses” practices that can be easily implemented</li>
          <li>Suggest methods to integrate more complex practices into the product development lifecycle </li>
          <li>Answer questions and invite stakeholders to continue these conversations</li>
        </SectionList>
      </ProjectSubSection>
    </ProjectSection>
    </article>
    </ProjectLayout>
  )
}

export default AccessibilityAuditsRemediation
