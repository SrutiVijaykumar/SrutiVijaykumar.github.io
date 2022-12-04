import React from 'react'

import ProjectLayout from '../../components/layouts/ProjectLayout'
import ProjectCover from '../../components/projects/ProjectCover'
import ProjectSection from '../../components/projects/ProjectSection'
import ProjectSubSection from '../../components/projects/ProjectSubSection'
import ProjectFigure from '../../components/projects/ProjectFigure'
import SectionList from '../../components/projects/SectionList'

import talkboxImg from '../../public/images/talkbox_2.webp'
import labelledTalkbox from '../../public/images/Labelled_TalkBox.webp'
import teamPhoto from '../../public/images/Foad_Jason_me.webp'
import laserCutting from '../../public/images/lasercutting.webp'
import printingPhoto from '../../public/images/3D_Printing.webp'
import solderingPhoto from '../../public/images/Soldering2_JPG.webp'
import myNotes from '../../public/images/My_Notes.webp'
import sketches from '../../public/images/Sketches.webp'
import diyPhoto from '../../public/images/Photos.webp'
import talkboxAssembly from '../../public/images/Student_Assembling_TalkBox.webp'
import designGuidelineSnippet from '../../public/images/DesignGuideline.jpg'

const CommunicationDIYBoard = (): JSX.Element => {
  return (
    <ProjectLayout title="TalkBox: A DIY Communication Board | Sruti Vijaykumar">

      <ProjectCover title="TalkBox: A DIY Communication Board" imgSrc={talkboxImg}/>

      <div className="text-xl text-center grid grid-cols-3 gap-2 lg:gap-8 lg:mx-40">
        <div>
          <h3 className="text-brand py-6">Role</h3>
          <h4 className="font-light py-4 px-10">UX Researcher and Designer </h4>
        </div>
        <div>
          <h3 className="text-brand py-6">Duration</h3>
          <h4 className="font-light pt-4">4 months</h4>
          <h4 className="font-light pb-4">Sep 2019 - Dec 2019</h4>
        </div>
        <div>
          <h3 className="text-brand py-6">Team</h3>
          <h4 className="font-light py-4 px-10">Dr. Foad Hamidi & Jason Charney</h4>
        </div>
      </div>

      <div className="flex justify-center lg:mx-40 mb-8 mt-6">
        <hr className="border-brand w-3/4"/>
      </div>

      <article className="lg:mx-40 font-light mx-6">
        <ProjectSection title="Overview">
          <p>This project is about the design and development of TalkBox and its instruction set. TalkBox is a low-cost Do-It-Yourself (DIY) open-source communication board for non-verbal users. The goal was to make it easy to assemble and intuitive to use.</p>
          <ProjectFigure imgSrc={labelledTalkbox} caption="labelled talkbox"/>
        </ProjectSection>

        <ProjectSection title="Contribution">
          <p>
            I was responsible for building the DIY instructions and conducting a Think Aloud Observation Study while <a href="http://www.jasoncharney.com/" target="_blank" className="text-brand underline hover:no-underline focus:no-underline" rel="noreferrer">Jason Charney</a>, a fellow designer focused on the design iterations.
            We worked as a team in the <a href="https://www.participatoryfutures.com/" target="_blank" className="text-brand underline hover:no-underline focus:no-underline" rel="noreferrer">Designing Participatory Futures (DARE) Lab</a> under the guidance of <a href="https://www.participatoryfutures.com/" target="_blank" className="text-brand underline hover:no-underline focus:no-underline" rel="noreferrer">Dr. Foad Hamidi</a>.
          </p>
          <ProjectFigure imgSrc={teamPhoto} caption="Left to right: Dr. Foad Hamidi, Jason Charney (holding TalkBox), and I in the DARE Lab."/>
        </ProjectSection>

        <ProjectSection title='Target Users'>
        <ol className="list-outside list-decimal mx-6">
          <li>Non-verbal children/adults and their caregivers</li>
          <li>Novice users who have little or no knowledge about circuitry</li>
        </ol>
        </ProjectSection>

        <ProjectSection title="Research Methologies">
          <ol className="list-outside list-decimal mx-6">
            <li>Literature Review</li>
            <li>Hierarchical Task Analysis </li>
            <li>Think Aloud Observations</li>
          </ol>
        </ProjectSection>

        <ProjectSection title="Learning New Skills">
          <p>Fabricating new versions of TalkBox involved tasks like 3D Printing, Lasercutting, and Soldering, which were new to me and a lot of fun. These activities helped me empathize with the maker community.</p>
          <ProjectFigure imgSrc={laserCutting} caption="Lasercutting the individual parts of TalkBox to build a quick and low-cost prototype."/>
          <ProjectFigure imgSrc={printingPhoto} caption="3D printing an enclosure for electronic components."/>
          <ProjectFigure imgSrc={solderingPhoto} caption="Soldering wires connected to the Touch Sensor hat."/>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1">
          <div className="lg:col-span-2 col-start-1 bg-brand text-white p-10">
            <h2 className="text-2xl italic font-bold">Reflection</h2>
            <p className="italic">Engage in user tasks when possible. It not only builds empathy but also equips you to ask better questions. </p>
          </div>
        </section>

        <ProjectSection title="Literature Review">
          <p>For the literature review, I read ten ACM research papers, explored articles, and watched youtube videos on DIY maker projects. I gained interesting insights on how makers use instructions and what changes in the design of instructions would improve their learning experience. I also wrote a research paper of my own that identifies research gaps, synthesizes findings, and proposes solutions for the creation of effective DIY instructions.</p>
          <div className="text-center my-4">
            <a href="/assets/docs/The_Design_of_DIY_instructions_for_maker_projects.pdf" target="_blank" className="text-brand underline hover:no-underline focus:no-underline my-4">Read my research paper on the design of DIY instructions for maker projects.</a>
          </div>
          <ProjectSubSection title="Relevant insights from the Literature Review">
            <SectionList>
              <li>There should be room for customization in DIY projects.</li>
              <li>Readers of instructions want to learn techniques rather than following step-by-step instructions.</li>
              <li>Instructions should encourage design thinking and exploration.</li>
              <li>Makers appreciate the addition of humor in DIY instructions.</li>
              <li>They also appreciate multiple formats like text, images, and video instructions.</li>
              <li>The maker community is inclusive of all ages, levels of knowledge, backgrounds, and abilities.</li>
              <li>The focus is on self-reliance, sharing knowledge, and connecting to like-minded people.</li>
            </SectionList>
          </ProjectSubSection>
          <ProjectSubSection title="Research Questions">
            <SectionList>
              <li>How do we strike a balance between making instructions easy to read and adding sufficient information about the design process?</li>
              <li>Making DIY kits “error-proof” give makers a sense of accomplishment but does it facilitate learning?</li>
            </SectionList>
          </ProjectSubSection>
        </ProjectSection>

        <ProjectSection title="Making DIY instructions">
          <ProjectSubSection title="Ideation">
              <p>The design process started with a brainstorming exercise. Backed with insights from the literature review, I let my creative juices flow and jotted down all ideas that came to mind, even the outlandish ones. After discussing the pros and cons of each idea with my team, we decided to pursue two versions of DIY instructions:</p>
              <SectionList ordered={true}>
                <li>An experimental storyboard version with a panda as the protagonist.</li>
                <li>A traditional photo version similar to instructions on Instructables.</li>
              </SectionList>
              <ProjectFigure imgSrc={myNotes} caption="Notes from Ideation."/>
          </ProjectSubSection>
          <ProjectSubSection title="Hierarchical Task Analysis (HTA)">
            <p>I started by observing Jason assembling the TalkBox, taking notes, and preparing a draft document of the Hierarchical Task Analysis (HTA). With my novice making skills, I began assembling TalkBox myself. Every time I was unsure of what the next step was, I made notes. I applied the <a href="https://books.google.com/books?id=eSSpDwAAQBAJ&pg=PT515&lpg=PT515&dq=PXC+rule&source=bl&ots=ovVf8Wl-mV&sig=ACfU3U2keYXE7YRYEW3AXeAGcmM8cKY3Ig&hl=en&sa=X&ved=2ahUKEwiK9qfE68rpAhUklHIEHYxRBR4Q6AEwAHoECAoQAQ#v=onepage&q=PXC%20rule&f=false" className="text-brand underline hover:no-underline focus:no-underline">P x C Rule</a> to break down the assembly steps further and refine the HTA.</p>
          </ProjectSubSection>
          <section className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 lg:col-start-2 bg-brand text-white p-10">
            <h2 className="text-2xl italic font-bold">Reflection</h2>
            <p className="italic">Performing user tasks yourself will give you a design direction but remember to test those designs with actual users.</p>
            </div>
          </section>
          <ProjectSubSection title="Using HTA as a guideline, I made two versions of DIY Instructions">
            <div className="text-center my-4"><a href="/docs/Storyboard_Version.pdf" target="_blank" className="text-brand underline hover:no-underline focus:no-underline my-4 text-center">Check out the storyboard version of DIY instructions.</a></div>
            <ProjectFigure imgSrc={sketches} caption="A few sketches from the storyboard version"/>
            <div className="text-center my-4"><a href="/assets/docs/Photo_version.pdf" target="_blank" className="text-brand underline hover:no-underline focus:no-underline my-4 text-center">Check out the photo version of DIY Instructions.</a></div>
            <ProjectFigure imgSrc={diyPhoto} caption="A glimpse of the Photo version"/>
          </ProjectSubSection>
          <section className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-start-1 bg-brand text-white p-10">
            <h2 className="text-2xl italic font-bold">Reflection</h2>
            <p className="italic">Ask yourself: What assumptions have I made? What is the source of those assumptions? What were the unexpected outcomes of the usability test? How can we incorporate the new insights going forward? This exercise helps maintain objectivity, control biases, and improve your research strategy.</p>
            </div>
          </section>
        </ProjectSection>

        <ProjectSection title="Usability Test">
          <ProjectSubSection title="Think Aloud Observation">
            <p>
              We invited 3 students from the Mechanical Engineering Department at UMBC to the DARE Lab. The students used both versions of the DIY instructions to assemble TalkBox and were asked to think aloud as they navigated through the instructions.
            <br/>
              Goals:
            </p>
            <SectionList>
              <li>Identify points of hesitation during the assembly process and probe for reasons </li>
              <li>Judge the response to hand-sketched storyboarded instructions</li>
              <li>Evaluate the user experience for both versions and make a note of the strengths and weaknesses of each</li>
            </SectionList>
            <ProjectFigure imgSrc={talkboxAssembly} caption="A student assembling the talkbox"/>
          </ProjectSubSection>
          <ProjectSubSection title='Notable Findings'>
            <SectionList>
              <li>Participants missed minute details like the orientation of a notch on a hardboard piece while reading instructions.</li>
              <li>The texture of the hardboard pieces was perceived as a clue to the orientation of the pieces.</li>
              <li>The Panda brought a sense of ease to the TalkBox assembly process and made the experience engaging.</li>
              <li>Participants liked the highlighted portions in each of the frames in the storyboard version because it helped them focus on the task at hand.</li>
              <li>The sketches did not resemble the actual pieces as well as the photos so participants switched to the photo version sometimes for clarity.</li>
              <li>Numbers can be used to guide the assembly of pieces just like IKEA&apos;s assembly instructions.</li>
            </SectionList>
          </ProjectSubSection>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1">
          <div className="lg:col-span-2 lg:col-start-2 bg-brand text-white p-10">
            <h2 className="text-2xl italic font-bold">Reflection</h2>
            <p className="italic">Don&apos;t get attached to your designs no matter how hard you worked on them. Appreciate ambiguity and iterations.</p>
          </div>
        </section>

        <ProjectSection title="Plan of Action for the future">
          <SectionList>
            <li>Find a way to add affordance to the pieces so that users don&apos;t have to rely solely on instructions to not make mistakes. Explore using different textures.</li>
            <li>The orientation of the base for the tiles is confusing. The notch is supposed to be on top but users placed the notch on the bottom. The instruction warns users about this error and yet participants got the orientation wrong. A possible solution for this would be to make the dividing teeth uneven so that the tile base fits only in one particular orientation.</li>
            <li>Highlight relevant portions of the photo just like the storyboard version.</li>
            <li>Build an IKEA style set of instructions using the numbering technique and conduct a comparative study.</li>
            <li>Experiment with digital sketches using the hand-drawn sketches as a guide.</li>
            <li>Use the following design guideline for all versions and test for design exploration value.</li>
          </SectionList>
          <ProjectFigure imgSrc={designGuidelineSnippet} caption=""/>
        </ProjectSection>
      </article>
    </ProjectLayout>
  )
}

export default CommunicationDIYBoard
