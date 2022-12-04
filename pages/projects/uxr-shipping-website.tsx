import React from 'react'
import ProjectLayout from '../../components/layouts/ProjectLayout'
import ProjectCover from '../../components/projects/ProjectCover'
import ProjectSection from '../../components/projects/ProjectSection'
import SectionList from '../../components/projects/SectionList'

import packagesFull from '../../public/images/packages-full.webp'

const UXRShippingWebsite = (): JSX.Element => {
  return (
    <ProjectLayout title="UXR Shipping Website | Sruti Vijaykumar">
      <ProjectCover imgSrc={packagesFull} title="UXR Shipping Website"/>

      <article className="lg:mx-40 font-light mx-6">

      <section className="mt-10">
        <p>
          In August 2021, I collaborated with a Senior UX Specialist at UserWorks to improve the usability of a mailing and shipping website.
        </p>
        <p className="my-10">
        <mark>
          NDA prevents me from sharing some details. Please get in touch with me to know more about this study and other medical device studies I have worked on.
        </mark>
        </p>
      </section>

      <ProjectSection title="Product">
        <p>A mailing and shipping website</p>
      </ProjectSection>

      <ProjectSection title="Target Users">
        <p>People who mail and ship at least once a month or more frequently for personal or business reasons</p>
      </ProjectSection>

      <ProjectSection title="Research Question">
        <p>How do users approach specific mailing and shipping situations and how might we improve their experience?</p>
      </ProjectSection>

      <ProjectSection title="Research Method">
        <p>Scenario-based interview </p>
      </ProjectSection>

      <ProjectSection title="Research Type">
        <p>Generative UXR</p>
      </ProjectSection>

      <ProjectSection title="My Role">
        <p>UX Researcher </p>
      </ProjectSection>

      <ProjectSection title="Project Timeline">
        <p>5 Weeks</p>
      </ProjectSection>

      <ProjectSection title="Participants">
        <SectionList>
          <li>5 mobile users who mail and ship for personal reasons </li>
          <li>5 mobile users who mail and ship for business reasons</li>
          <li>5 desktop users who mail and ship for personal reasons</li>
          <li>5 desktop users who mail and ship for business reasons</li>
        </SectionList>
      </ProjectSection>

      <ProjectSection title="Conclusion">
        <p>Overall, the device is a safe to use, effective device that medical professionals can be expected to use without error in most cases. However, there are some opportunities for improvement in the device&apos;s usability.</p>
      </ProjectSection>

      <ProjectSection title="Three Key Insights">
        <SectionList ordered={true}>
          <li>The table for comparing mail services had low discoverability and even the participants who found it, were overwhelmed by the information.</li>
          <li>Sometimes participants looked for guidance regarding sending food, but did not think to look under “Perishable Items” in “Restricted & Prohibited Items” and instead thought there was no guidance.</li>
          <li>The feature of Holding Mail has a 30-day limit but to know that participants need to sign in or sign up which discouraged them from exploring that option.</li>
        </SectionList>
      </ProjectSection>

      <ProjectSection title="Three Key Recommendations">
        <SectionList ordered={true}>
          <li>Users may appreciate more interactivity, such as checkboxes to select the services or aspects users want to compare, rather than seeing the entire table.</li>
          <li>Add “Food” to the text for Perishable Items - for example, “Food & Other Perishable Items,” or “Perishable Items (and Food)” (depending on where you want it to appear in the alphabetical list).</li>
          <li>Consider the feasibility of changing Hold Mail so that users can find some information about the service without having to sign in.</li>
        </SectionList>
      </ProjectSection>

      <section>
        <p className="my-10 font-bold">
          <mark>
            For additional findings and learnings, please contact <a href="mailto: srutivijaykumar@gmail.com">srutivijaykumar@gmail.com</a>.
          </mark>
        </p>
      </section>

      </article>

    </ProjectLayout>
  )
}

export default UXRShippingWebsite
