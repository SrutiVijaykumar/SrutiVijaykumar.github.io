import React from 'react'

import MainLayout from '../components/layouts/MainLayout'
import FoodFigure from '../components/about/FoodFigure'
import keralaFishCurry from '../public/images/kerala-fish-curry.webp'
import vegThali from '../public/images/veg-thali.webp'
import jjigae from '../public/images/jjigae.webp'
import steamedFish from '../public/images/steamed-fish.webp'
import habenGirma from '../public/images/SV_with_Haben_Girma.webp'
import signedPage from '../public/images/WQ_signed_first_page.webp'
import { testimonials } from '../data/testimonials'
import { Testimonial } from '../types'
import TestimonialFigure from '../components/about/TestimonialFigure'
import InspirationCard from '../components/about/InspirationCard'

const About = (): JSX.Element => {
  return (
    <MainLayout title="About | Sruti Vijaykumar">
      <div className="container-l lg:px-24 sm:px-10">
        <section className="pt-8">
          <h2 className="font-sans leading-normal text-lg font-medium">
            Hi, I&apos;m Sruti (pronounced Sroo-Tea), and my pronouns are she/her.<br/>
          </h2>
          <br/>
          <p className="font-sans leading-normal">
            As a User Experience Researcher, I have made products more efficient, inclusive, and, in some cases, life-saving! I developed an interest in accessibility while studying at the University of Maryland, Baltimore County. Initially intimidated by it, I quickly learned how straightforward and rewarding it could be and wanted to help others in tech  (and everyone else in my life ;-)) understand it better. I honed my craft while working at UserWorks, Inc., in Silver Spring, Maryland, as a UX & Accessibility Specialist for three years. I am looking for new opportunities at the moment. My vision is to see accessibility be seamlessly integrated into every product&apos;s development process.
          </p>
          <a href="" className="my-4 hover:no-underline focus:no-underline underline text-brand">Talk on accessibility at DCUX 2019</a>
          <a href="" className="my-4 hover:no-underline focus:no-underline underline text-brand">Presentation on accessibility and universal design at the University of Maryland, Baltimore County</a>
          <a href="" className="my-4 hover:no-underline focus:no-underline underline text-brand">Paper titled, &quot;Rapid Transitions: Experiences with Accessibility and Special Education during the COVID-19 Crisis&quot;</a>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-12">
          <div className="bg-brand text-white col-span-2 p-4">
            <section>
              <h3 className="text-lg font-bold m-4">What people say about me</h3>
              {
                testimonials.map((testimonial: Testimonial) => {
                  return <TestimonialFigure key={testimonial.id} testimonial={testimonial}/>
                })
              }
            </section>
          </div>
          <div className="col-span-3">
            <InspirationCard imgSrc={habenGirma} title="A lightbulb moment" description='Meeting Haben Girma in 2019 changed my perspective on Accessibility. I shifted my focus from disabilities to the barriers people with disabilities face.'/>
            <br className="mt-12"/>
            <InspirationCard alignRight={true} imgSrc={signedPage} title="A prized possesion" description='Whitney Quesenbery, author of "A Web for Everyone: Designing Accessible User Experiences," attended my talk on " The 7 colors of the accessibility rainbow" at DCUX 19 and gave me a signed copy of her book. Her message is a source of encouragement for me.'/>
          </div>
        </div>
        <section className="my-12">
          In my free time, I cook. A lot. It&apos;s my way of unwinding, experimenting, exploring cultures, showing love, and feeling closer to my family in India. Here are some pictures:
        </section>
        <section className="grid lg:grid-cols-4 gap-1 place-items-center">
          <FoodFigure imgSrc={keralaFishCurry} caption="Kerala-style fish curry, Matta rice, and Rassam"></FoodFigure>
          <FoodFigure imgSrc={vegThali} caption="North Indian vegetarian thali"></FoodFigure>
          <FoodFigure imgSrc={jjigae} caption="Korean Sundubu-jjigae"></FoodFigure>
          <FoodFigure imgSrc={steamedFish} caption="Thai steamed fish"></FoodFigure>
        </section>
        <section className="my-12">
          I also enjoy home improvement projects, satirical news shows, and reading. I&apos;m currently reading &quot;Three Thousand Stitches&quot; by Sudha Murty.
        </section>
      </div>
    </MainLayout>
  )
}

export default About
