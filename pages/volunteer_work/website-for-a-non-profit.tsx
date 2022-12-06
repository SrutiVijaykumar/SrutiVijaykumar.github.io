import React from 'react'
import Image from 'next/image'
import ProjectLayout from '../../components/layouts/ProjectLayout'
import ProjectCover from '../../components/projects/ProjectCover'
import ProjectFigure from '../../components/projects/ProjectFigure'
import ProjectSection from '../../components/projects/ProjectSection'
import ProjectSubSection from '../../components/projects/ProjectSubSection'
import SectionList from '../../components/projects/SectionList'

import steamCover from '../../public/images/steam_wide.webp'
import meetingClients from '../../public/images/Meeting_with_client.webp'
import highFidelityPrototype from '../../public/images/High_fidelity_prototype.webp'
import paperPrototype from '../../public/images/Paper_prototype.webp'
import finalPage from '../../public/images/Final_page.webp'
import teamMeeting from '../../public/images/Team_Meeting.webp'
import usabilityTest from '../../public/images/Usability_Testing.webp'
import DownArrowSvg from '../../components/projects/DownArrowSvg'
import timelineImg from '../../public/images/timeline_project_non_profit.webp'
import meetingNotes from '../../public/images/Meeting_Notes.webp'

const WebsiteForANonProfit = (): JSX.Element => {
  return (

    <ProjectLayout title="Accessible Website For STEAM Success Foundation | Sruti Vijaykumar">
      <ProjectCover imgSrc={steamCover} title="Accessible Website For STEAM Success Foundation"/>

      <div className="grid grid-cols-4 gap-2 lg:gap-8 lg:mx-40">
        <div>
          <h3 className="text-xl text-brand py-6 text-center">Role</h3>
          <h4 className="text-xl font-light py-4 text-center px-10">Team Lead, Accessibility Manager & UX Designer</h4>
        </div>
        <div>
          <h3 className="text-xl text-brand py-6 text-center">Duration</h3>
          <h4 className="text-xl font-light pt-4 text-center">2 months</h4>
          <h4 className="text-xl font-light pb-4 text-center">Feb 2019 - Apr 2019</h4>
        </div>
        <div>
          <h3 className="text-xl text-brand py-6 text-center">Team</h3>
          <h4 className="text-xl font-light py-4 text-center px-10">3 UX Designers & 2 Software Developers</h4>
        </div>
        <div>
          <h3 className="text-xl text-brand py-6 text-center">Teammates</h3>
          <h4 className="text-xl font-light py-4 text-center px-10">Shaunak, Swapnil, Rishabh & Cindy</h4>
        </div>
      </div>

      <div className="flex justify-center lg:mx-40 mb-8 mt-6">
        <hr className="border-brand w-3/4"/>
      </div>

      <article className="lg:mx-40 font-light mx-6">
        <ProjectSection title="Overview">
        <p>This project was completed as part of a competition held by <a href="https://knowbility.org/" target="_blank" className="text-brand underline hover:no-underline focus:no-underline" rel="noreferrer">Knowbility</a> called AIR-U (Accessibility Internet Rally for Universities). We built a website for our client, Jesse&apos;s non-profit organization called STEAM Success Foundation, that complied with Web Content Accessibility Guidelines (WCAG) 2.0 and ended up winning the competition! The website is currently being used to accept donations and provide monetary support to children who want to pursue an education in Science, Technology, Arts, Engineering, or Mathematics (STEAM).</p>
        </ProjectSection>

        <ProjectSection title="Process and Contribution">
          <figure className="mt-6">
            <Image src={timelineImg} alt="Timeline of my contribution." className="w-full"/>
          </figure>
        </ProjectSection>

        <ProjectSection title="Training to become an Accessibility Ninja">
          <p>I took lessons with Knowbility&apos;s Sr. Accessibility Strategist, Becky Gibson on how to make any website compliant with WCAG 2.0. It was thrilling to be mentored by a person who contributed to the creation of WCAG 2.0 and the Accessible Rich Internet Applications (ARIA) specification.</p>
        </ProjectSection>

        <ProjectSection title="Stakeholder interviews">
          <p>We interviewed our client to understand the purpose of the website and gathered the following information:</p>
          <ProjectSubSection title="Functions">
            <SectionList>
              <li>Provide grants to students from marginalized communities</li>
              <li>Receive donations</li>
              <li>Invite other organizations to collaborate on projects</li>
            </SectionList>
          </ProjectSubSection>
          <ProjectSubSection title="Users">
            <SectionList>
              <li>Students* from low-income households</li>
              <li>Donors</li>
              <li>Organizations that wish to collaborate</li>
            </SectionList>
            <p className="italic">*Students with different abilities and from different age groups who want to pursue an education in STEAM . </p>
          </ProjectSubSection>
          <section className="grid grid-cols-1">
            <div className="bg-green-300 text-black p-10">
              <h2 className="text-2xl italic font-bold">Challenge #1</h2>
              <p className="italic">Our client had a tough time communicating what he wanted. His organization was new at the time and he was still formulating a plan of action. But we needed to move quickly to complete the project on time.</p>
              <br/>
              <h2 className="text-2xl italic font-bold">Solution #1</h2>
              <p className="italic">Competitive Analysis + Rapid Prototyping. I showed our client multiple websites of similar organizations and he promptly told me what he liked and disliked about them design-wise. My team and I followed up his inputs with rapid prototyping to understand his organization&apos;s objectives as clearly as possible.</p>
            </div>
          </section>
          <figure className="mt-6">
            <div className="grid grid-cols-1 lg:px-40">
              <div>
                <Image src={meetingNotes} alt="Meeting notes"/>
              </div>
            </div>
          </figure>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 bg-brand text-white p-10">
          <h2 className="text-2xl italic font-bold">Reflection #1</h2>
          <p className="italic">Record all your interviews and meetings (with the consent of everyone involved) because team members sometimes perceive and remember information differently. For this project, we went back to our recordings a couple of times to make sure we were on the right track.</p>
          </div>
        </section>

        <section className="grid grid-cols-1">
          <h2 className="text-2xl text-brand font-bold">Project Planning</h2>
          <div className="bg-green-300 text-black p-10">
            <h2 className="text-2xl italic font-bold">Challenge #2</h2>
            <p className="italic">We were a team of busy full-time Graduate students from different departments at UMBC and different schedules. We wanted to collaborate and learn from each other without compromising on our school work.</p>
            <br/>
            <h2 className="text-2xl italic font-bold">Solution #2</h2>
            <p className="italic">We had an honest conversation about our schedules and how much time each one of us could realistically dedicate and when. Some of us adjusted our schedules to make time for weekly group meetings.</p>
          </div>
          <p className="my-6">After talking to my teammates and our client, I chalked out a Project Plan, dividing the tasks week-by-week along with other logistical details. This plan made my team super-efficient. Not only did we use it to keep ourselves on track but also to stay well-coordinated and motivated. </p>
          <figure className="mt-6">
            <div className="grid grid-cols-1 lg:px-40">
              <div>
                <Image src="/images/Project_plan_screenshot.webp" alt="Screenshot of project plan"/>
              </div>
            </div>
          </figure>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-2 bg-brand text-white p-10">
          <h2 className="text-2xl italic font-bold">Reflection #2</h2>
          <p className="italic">Add details like time, location, method of communication, and members involved for every task in your project plan. Plan clarity is a major motivation factor for team members.</p>
          </div>
        </section>

        <ProjectSection title="Rapid Prototyping">
          <p>I kept a paper and pen always handy in all our meetings. Any idea that got discussed made its way onto my notepad. Paper sketches are quick, simple, and ensure that ideas are being interpreted as accurately as possible. I would give my roommates tasks to complete using my prototypes, and I asked them to Think Aloud as they navigated. My notes from these roommate usability test sessions, coupled with client feedback, helped to transform my paper sketches into digital prototypes on Sketch quickly.</p>

          <div className="grid grid-cols-1 place-items-center my-6">
            <div>
              <ProjectFigure imgSrc={paperPrototype} caption="Paper prototype"/>
            </div>
            <div>
              <DownArrowSvg/>
            </div>
            <div className="place-self-center">
              <p className="text-brand font-logo text-center font-bold text-2xl">Think Aloud sessions
                <br/>
                +
                <br/>
                Client feedback
              </p>
            </div>
            <div>
              <DownArrowSvg/>
            </div>
            <div>
              <ProjectFigure imgSrc={highFidelityPrototype} caption="High fidelity Prototype"/>
            </div>
            <div>
              <DownArrowSvg/>
            </div>
            <div className="place-self-center">
              <p className="text-brand font-logo text-center font-bold text-2xl">Think Aloud sessions
                <br/>
                +
                <br/>
                Client feedback
              </p>
            </div>
            <div>
              <DownArrowSvg/>
            </div>
            <div>
              <ProjectFigure imgSrc={finalPage} caption="Final Page"/>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Weekly stakeholder meetings">
          <p>Our team met our client online through Skype every Friday. A typical meeting involved presenting our prototypes, noting down feedback, and discussing our plan for the next week. </p>
        </ProjectSection>

        <section>
          <div className="bg-green-300 text-black p-10">
            <h2 className="text-2xl italic font-bold">Challenge #3</h2>
            <p className="italic">There were major communication issues in the beginning. Our client had trouble understanding and responding to our weekly presentations. I quickly realized that it was because he was unfamiliar with the technical terms we were casually throwing around during our presentations. </p>
            <br/>
            <h2 className="text-2xl italic font-bold">Solution #3</h2>
            <p className="italic">I started using simple terms and analogies during presentations and brought my teammates’ attention to the same.
            </p>
          </div>
          <ProjectFigure imgSrc={meetingClients} caption="Screenshot of one of our weekly Skype meetings with our client after getting feedback on our high-fidelity prototypes."/>
        </section>

        <ProjectSection title="Content Writing">
         <p>I also took up the role of a Content Writer in the project. I interviewed the client multiple times to understand how the organization functions and ran some drafts by him to finalize the written content that you now see on the finished website. The unintentional benefit of content writing was that I learned new information (for example, the partnership with <a href="https://www.kidscancad.com/" target="_blank" className="text-brand underline hover:no-underline focus:no-underline" rel="noreferrer">Kids Can CAD</a>) about the organization that eventually made its way to the website.</p>
        </ProjectSection>

        <ProjectSection title="Design System Creation and Development">
          <p>For the brand guidelines, my teammates and I spent a good amount of time picking an accessible combination of colors for the website. This was particularly challenging because we were asked to use photos as backdrops by the client and choosing a color with a good contrast ratio with the multiple colors on the photo was close to impossible.  </p>
          <div className="bg-green-300 text-black p-10 my-4">
            <h2 className="text-2xl italic font-bold">Challenge #4</h2>
            <p className="italic">Using catchy photos as a backdrop made our client happy and looked aesthetically pleasing, but it did not pass the accessibility test. We used  <a href="https://webaim.org/resources/contrastchecker/" target="_blank" className="text-brand underline hover:no-underline focus:no-underline my-4" rel="noreferrer">Contrast Checker</a> to try various combinations and failed. </p>
            <br/>
            <h2 className="text-2xl italic font-bold">Solution #4</h2>
            <p className="italic">Add a black overlay and adjust its opacity to make the text more prominent and accessible to people with vision impairments.</p>
        </div>
        <p>Our team&apos;s Software Developers were using a front-end framework called UI Kit. We designers built a design system that the developers could quickly incorporate with the framework. We tried to find the sweet spot between aesthetics, usability, and feasibility for every button, image, font, color, and text size by collaborating with the developers.</p>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-8">
          <div className="lg:col-span-2 col-start-1 bg-brand text-white p-10">
            <h2 className="text-2xl italic font-bold">Reflection #3</h2>
            <p className="italic">Communicate with developers right from the beginning. Account for the possibilities and constraints of the tools they use in the design process.</p>
          </div>
        </section>

        <ProjectFigure imgSrc={teamMeeting} caption="I clicked this picture at one of our weekly meetings at the UMBC library. We were collaborating with the two Software Developers to make feasible prototypes."/>

        <ProjectSection title="Usability Test">
          <p>The website was nearing completion, and I knew that the true test of its accessibility would come only if we tested it with people who have disabilities. I contacted Knowbility to see if they could help us get in touch with people who would be interested in participating, but we hadn’t heard back, and time was running out. That’s when my blind friend at UMBC, Ali, who was also my mentor at the time, stepped in to give us a quick screen reader accessibility evaluation.</p>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-8">
          <div className="lg:col-span-2 lg:col-start-2 bg-brand text-white p-10">
          <h2 className="text-2xl italic font-bold">Lesson Learned </h2>
          <p className="italic">Plan the usability test and recruit participants from the beginning, especially when working under a tight deadline!</p>
          </div>
        </section>

        <section>
          <p className="my-4">After asking our client what factors were important to him, we compared and analyzed multiple donation systems in the market. We chose Donorbox and implemented it, but the usability test revealed that it was not accessible. </p>
          <p>Ali used the NVDA screen-reader to evaluate our website page-by-page, and section-by-section. He loved that the website had clearly defined regions, skip-links, semantically correct markup, and alt-text for every image. But the donation form was not screen-reader accessible. The labels in the form did not match the text, which made it difficult for Ali to understand what input was expected of him. Donations were an essential part of the website; therefore, it was important to address this issue immediately.  </p>
        </section>

        <ProjectFigure imgSrc={usabilityTest} caption="My friend, Ali, who is blind, testing the screen reader accessibility of the website."/>

        <section>
          <div className="bg-green-300 text-black p-10 my-4">
            <h2 className="text-2xl italic font-bold">Challenge #5</h2>
            <p className="italic">Finding a donation system that is easy to use for the client and has accessible forms.  </p>
            <br/>
            <h2 className="text-2xl italic font-bold">Solution #5</h2>
            <p className="italic">Keeping our client&apos;s preferences in mind, the Software Developers in our team built a custom accessible donation form using UI Kit and PayPal. This form was accessible and easy to use for Jesse.</p>
          </div>
          <p>The website was complete. After a final screen-reader and keyboard accessibility test, we delivered it to Knowbility on time. And as you already know, we won the competition and lived accessible-ly ever after! </p>
        </section>

        <ProjectSection title="Some Final Website Pages">
          <p>Website link: <a href="https://steamsuccessfoundation.org/" className="text-brand underline focus:no-underline hover:no-underline">https://steamsuccessfoundation.org/</a></p>

          <div className="grid lg:grid-cols-2 my-8 gap-4">
            <div>
              <Image src="/images/Home_Page.webp" alt="Home page of STEAM success foundation website"/>
            </div>
            <div>
              <Image src="/images/Donate_Page.webp" alt="Donation information page of STEAM success foundation website"/>
            </div>
          </div>
        </ProjectSection>
      </article>
    </ProjectLayout>
  )
}

export default WebsiteForANonProfit
