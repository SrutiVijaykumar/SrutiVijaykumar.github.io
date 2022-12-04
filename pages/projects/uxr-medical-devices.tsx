import React from 'react'
import ProjectLayout from '../../components/layouts/ProjectLayout'
import ProjectCover from '../../components/projects/ProjectCover'
import ProjectSection from '../../components/projects/ProjectSection'
import SectionList from '../../components/projects/SectionList'
import hospitalRoomCoverImg from '../../public/images/hospital_room.webp'

const UXRMedicalDevices = (): JSX.Element => {
  return (
    <ProjectLayout title="UXR Medical Devices | Sruti Vijaykumar">
      <ProjectCover imgSrc={hospitalRoomCoverImg} title="UX Research For Medical Devices"/>

      <article className="lg:mx-40 font-light mx-6">
        <section className="mt-10">
          <p>
            In 2020 and 2021, I collaborated with fellow UX Specialists at UserWorks on summative usability studies to ensure that Austrian and German medical devices are safe to launch in hospitals across the U.S. Below is an example of one such medical device usability study.
          </p>
          <p className="my-10">
            <mark>
              NDA prevents me from sharing some details. Please get in touch with me to know more about this study and other medical device studies I have worked on.
            </mark>
          </p>
        </section>

        <ProjectSection title="Product">
          <p>Blood and Fluid Warmer manufactured in Austria</p>
        </ProjectSection>

        <ProjectSection title="Target Users">
          <p>Physicians and Nurses who regularly work with infusion and/or transfusion equipment in U.S. hospitals. </p>
        </ProjectSection>

        <ProjectSection title="Research Question">
          <p>Does the Blood and Fluid Warmer design facilitate safe and effective use and not create the potential for patient harm?</p>
        </ProjectSection>

        <ProjectSection title="Research Method">
          <p>Contextual inquiry</p>
        </ProjectSection>

        <ProjectSection title="My Role">
          <p>UX Researcher</p>
        </ProjectSection>

        <ProjectSection title="Project Timeline">
          <p>5 Weeks</p>
        </ProjectSection>

        <ProjectSection title="Participants">
          <SectionList>
            <li>8 Physicians</li>
            <li>9 Nurses</li>
          </SectionList>
        </ProjectSection>

        <ProjectSection title="Conclusion">
          <p>Overall, the device is a safe to use, effective device that medical professionals can be expected to use without error in most cases. However, there are some opportunities for improvement in the device's usability.</p>
        </ProjectSection>

        <ProjectSection title="Three Key Insights">
          <SectionList ordered={true}>
            <li>The only way to stop the over-temperature alarm is by unplugging the device. The lack of clear indication on how to stop the alarm combined with the constant loud beeping sound made the troubleshooting experience overwhelming for some participants.</li>
            <li>The cassette can be removed by sliding it out from the top. However, the latch on the side made some users think it can only be removed by unlatching the device.</li>
            <li>The Instructions For Use (IFU) lists names of acceptable cleaning agents and disinfectants for the device none of which are familiar to Physicians and Nurses in the United States.</li>
          </SectionList>
        </ProjectSection>

        <ProjectSection title="Three Key Recommendations">
          <SectionList ordered={true}>
            <li>Provide a way for users to stop the alarm on the device itself, either on the screen or on the body of the device near the power button. If the device needs to be unplugged for safety, flash the instruction to do that on the screen.</li>
            <li>Consider adding an instruction on the latch that says, “ONLY open for cleaning” or modifying the physical design of the device by changing the position/prominence of the latch.</li>
            <li>Replace the European medical device disinfecting procedure with American procedures and disinfectants that will be safe to use on the device, for example, bleach wipes and alcohol-based disinfectants.</li>
          </SectionList>
        </ProjectSection>

        <section>
        <p className="my-10 font-medium">
          <mark>
            For additional findings and learnings, please contact <a href="mailto: srutivijaykumar@gmail.com">srutivijaykumar@gmail.com</a>.
          </mark>
        </p>
        </section>
      </article>
    </ProjectLayout>
  )
}

export default UXRMedicalDevices
