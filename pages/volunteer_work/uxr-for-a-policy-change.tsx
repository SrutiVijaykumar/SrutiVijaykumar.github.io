import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import ProjectLayout from '../../components/layouts/ProjectLayout'
import ProjectCover from '../../components/projects/ProjectCover'
import ProjectFigure from '../../components/projects/ProjectFigure'
import ProjectSection from '../../components/projects/ProjectSection'
import ProjectSubSection from '../../components/projects/ProjectSubSection'
import SectionList from '../../components/projects/SectionList'

import policyCover from '../../public/images/PolicyChange.png'
import postItsImg from '../../public/images/Postits.webp'
import aliceImg from '../../public/images/Alice.webp'
import giBillImg from '../../public/images/GIBill.webp'
import recipientsImg from '../../public/images/Recipients.webp'
import concertImg from '../../public/images/Concert.webp'
import successImg from '../../public/images/Success.webp'
import expectedOutcomeImg from '../../public/images/ExpectedOutcome.webp'

const UXRForAPolicyChange = (): JSX.Element => {
  return (
    <ProjectLayout title="Design Thinking To Influence Policies | Sruti Vijaykumar">

      <ProjectCover imgSrc={policyCover} title="Design Thinking To Influence Policies"/>

      <div className="text-xl text-center grid grid-cols-3 gap-2 lg:gap-8 lg:mx-40">
        <div>
          <h3 className="text-brand py-6">Role</h3>
          <h4 className="font-light py-4 px-10">Team Lead and UX Researcher</h4>
        </div>
        <div>
          <h3 className="text-brand py-6">Duration</h3>
          <h4 className="font-light pt-4">3 months</h4>
          <h4 className="font-light pb-4">Feb 2020 - May 2020</h4>
        </div>
        <div>
          <h3 className="text-brand py-6">Team</h3>
          <h4 className="font-light py-4 px-10">4 UX Researchers</h4>
        </div>
      </div>

      <div className="flex justify-center lg:mx-40 mb-8 mt-6">
        <hr className="border-brand w-3/4"/>
      </div>

      <article className="lg:mx-40 font-light mx-6">
        <ProjectSection title="Overview">
          <p>
            In this academic project, I worked with <a href="https://entrepreneurship.umbc.edu/files/2012/09/Speaker-Series-Flyer-Carol-Bogash.pdf">Prof. Carol Bogash</a> and the <a href="https://www.uwcm.org/">United Way of Central Maryland</a> to identify key issues that low-income families in Maryland face through interviews, focus groups, and document reviews. I designed and proposed policies related to education, healthcare, and universal basic income to politicians and executives of the United Way. These policies could bring financial stability to 2.2 million people living in Maryland.
          </p>
        </ProjectSection>

        <ProjectSection title="Process">
          <figure className="mt-6">
            <img src="/images/Process.webp" alt="Complete process of the project" className="w-full"/>
          </figure>
        </ProjectSection>

        <ProjectSection title="Research Question">
          <p>How might we reduce barriers so that all greater Baltimore households reach financial stability?</p>
        </ProjectSection>

        <ProjectSection title="Keywords">
          <SectionList>
            <li><Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.healthcare.gov/glossary/federal-poverty-level-fpl/">Federal Poverty Level (FPL)</Link></li>
            <li><Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.uwcm.org/alice">Asset Limited, Income Constrained, Employed (ALICE)</Link></li>
            <li><Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.benefitscliff.com/">Benefits Cliff</Link></li>
          </SectionList>
        </ProjectSection>

        <ProjectSection title="Methodoliges">
          <ProjectSubSection title="Document reviews">
            <SectionList>
              <li>Read official reports and went through public records (<Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.uwcm.org/wp-content/uploads/2018/09/18_UW_ALICE_Report_MD_Refresh_9.11.18_Lowres.pdf">ALICE reports</Link> from multiple states, <Link className="text-brand underline hover:no-underline focus:no-underline" href="https://211md.org/">2-1-1 helpline</Link> report, <Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.gcfdn.org/Portals/0/Uploads/Documents/wf_Cliff_Effect_Qualitative_Insights.pdf">Benefits Cliff report</Link>, <Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.youtube.com/watch?v=-ptHavHrDuE">videos of testimonies in Congress)</Link></li>
              <li>Defined the problem</li>
              <li>Analyzed trends</li>
              <li>Developed focus points for interviews</li>
            </SectionList>
          </ProjectSubSection>
          <ProjectSubSection title="Focus groups">
            <SectionList>
              <li>Recruited 12 ALICE workers</li>
              <li>Figured out logistics</li>
              <li>Prepared questions</li>
              <li>Conducted a pilot study</li>
            </SectionList>
          </ProjectSubSection>
          <ProjectSubSection title="Structured Interviews">
            <SectionList>
              <li>Invited 2 politicians who are members of the Maryland House of Delegates</li>
              <li>And 3 executives of the United Way of Central Maryland</li>
              <li>Established goals and objectives of the meeting</li>
              <li>Prepared an Interview Guide and follow-up procedures</li>
            </SectionList>
          </ProjectSubSection>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 bg-brand text-white p-10">
            <h2 className="text-2xl italic font-bold">Reflection</h2>
            <p className="italic">Document Reviews are hugely underrated in my opinion! Use it not only to learn background information but also to identify trends and common themes that can be explored further during interviews. Make sure to verify the authenticity of your sources of information!</p>
          </div>
        </section>

        <ProjectFigure imgSrc={postItsImg} caption="Preparing for the Focus group after Document Reviews."/>

        <section className='my-6'>
          <div className="bg-green-300 text-black p-10">
            <h2 className="text-2xl italic font-bold">Challenge #1</h2>
            <p className="italic">Making sure everyone in the focus group is engaged.</p>
            <br/>
            <h2 className="text-2xl italic font-bold">Solution #1</h2>
            <p className="italic">Some participants tend to dominate the conversation in focus groups. After someone has shared their opinion, I usually turn to others in the group and do a quick poll for their opinion on that matter. I ask the relatively quiet person in the room, to explain their views. Polls make everyone in the room feel included and helps participants open up and engage. </p>
          </div>
        </section>

        <ProjectSection title="Relevant Insights">
          <SectionList>
            <li>The Federal Poverty Level is not updated as often and as accurately as it should be and therefore, is not a reflection of real poverty in the United States.</li>
            <li>ALICE workers feel hesitant to accept raises and promotions because an increase in income could result in loss of benefits.</li>
            <li>The transition period of adjusting to the new financial situation is about 30 days.</li>
            <li>There is no efficient system to calculate the Cliff Effect.</li>
            <li>Asking companies to raise wages is not a good solution because if they raise wages, they hire fewer employees and the total number of available jobs in the market goes down.</li>
            <li>The delegates spoke about there being a possibility of a universal base income in the future.</li>
            <li>Training people to work in skilled and higher pay jobs like plumbing and nursing can bring more financial stability to ALICE workers.</li>
            <li>Even though some ALICE Workers have cars, they cannot afford to pay for parking and therefore, end up taking public transport. But buses don’t always come on time and they have to wait long hours and risk being late to work.</li>
            <li>The 2-1-1 helpline is the most widely used service of the United Way of Central Maryland. The most popular issues on the helpline are related to housing and utility assistance.</li>
            <li>The number of 2-1-1 calls has more than doubled in two weeks since the beginning of March indicating the devastating effects of COVID-19 on low-income households. Most calls (almost two-thirds) came from Baltimore City followed by Baltimore County.</li>
          </SectionList>
        </ProjectSection>

        <section className='my-6'>
          <div className="bg-green-300 text-black p-10">
            <h2 className="text-2xl italic font-bold">Challenge #2</h2>
            <p className="italic">Controlling bias.</p>
            <br/>
            <h2 className="text-2xl italic font-bold">Solution #2</h2>
            <p className="italic">It is easy to make assumptions about a population because of what you see on the media. Be aware of those biases and consciously ignore them. My assumptions about the needs, awareness, and skills of ALICE workers were quickly busted during interviews because I kept an open mind.</p>
          </div>
        </section>

        <ProjectSection title="Ideation & Prototyping">
          <p>I created an encouraging and non-judgemental space for my team to brainstorm ideas and we came up with over 60 ideas. We then discussed the feasibility of each of those ideas by playing devil&apos;s advocate to decide which ones should be explored further and which ones should be discarded. The following are a few of my ideas that made the cut and got prototyped and presented to the delegates. </p>
          <ProjectSubSection title="UBI in the form of a Loyalty/Debit card">
            <p>Data is extremely valuable and that is why retail stores give you deals in exchange for your shopping information. It allows them to precisely calculate how, when, and where you shop and improve their services as a result. The government can issue UBI in the form of such a card that people can swipe to pay for things. The activity on the card can provide the government with data that can help improve public policies quickly and dynamically.</p>
          </ProjectSubSection>
          <ProjectSubSection title="Car Fleet Program">
            <p>An ALICE mother we interviewed told us she owns a car but she can&apos;t afford to pay for parking so she uses public transport to get to work. What if she could make money using her idle car while she is busy working? There could be a system in place that will allow her to rent out her car to taxi drivers when it is not in use and make money off of it. This idea is inspired by <Link className="text-brand underline hover:no-underline focus:no-underline" href="https://www.youtube.com/watch?v=YiWbdZ8ItRs">Tesla&apos;s future ride-hailing app</Link> for its self-driving cars. The only difference is that instead of self-driving, cars will be driven by people. This would also help generate employment for interested drivers.</p>
          </ProjectSubSection>
          <ProjectSubSection title="Get Paid to Learn Program">
            <p>Making higher education not just accessible to ALICE individuals but making it an attractive option by offering them a stipend and covering tution costs. </p>
          </ProjectSubSection>
        </ProjectSection>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-1">
            <Image className='shadow-md border-white border-8' src={aliceImg} alt="Person helping another person on the computer" />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-2">
            <Image className='shadow-md border-white border-8' src={giBillImg} alt="Photo of a computer" />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-1">
            <Image className='shadow-md border-white border-8' src={recipientsImg} alt="Person looking at a computer while taking notes" />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-2">
            <Image className='shadow-md border-white border-8' src={concertImg} alt="Singer at a concert" />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-1">
            <Image className='shadow-md border-white border-8' src={successImg} alt="Charts on a computer" />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 grid-cols-1 my-6">
          <div className="lg:col-span-2 lg:col-start-2">
            <Image className='shadow-md border-white border-8' src={expectedOutcomeImg} alt="People discussing in a meeting" />
          </div>
        </section>

        <ProjectSection title="Future">
          <p>
          The Q&A after the presentation, made me realize that I need to work on improving the ideas related to funding. I also need to find the success rates of similar programs implemented around the world to add credibility to my proposal. I will continue refining these prototypes and working with <Link className="text-brand underline hover:no-underline focus:no-underline" href="https://msa.maryland.gov/msa/mdmanual/06hse/html/msa17181.html">Delegate Pamela Queen</Link>, and the United Way of Central Maryland to bring financial stability to hard-working individuals in Maryland. I also plan to contact peers studying public policy to better understand the process of policymaking.
          </p>
        </ProjectSection>
      </article>

    </ProjectLayout>
  )
}

export default UXRForAPolicyChange
