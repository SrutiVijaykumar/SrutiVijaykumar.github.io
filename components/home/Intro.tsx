import React from 'react'
import profilePic from '../../public/images/me.webp'
import Image from 'next/image'
import { Barlow } from '@next/font/google'

const barlow = Barlow({
  weight: '400',
  variable: '--font-intro'
})

const Intro = (): JSX.Element => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-1 lg:mx-20 mt-12 mb-4 place-items-center">
    <div className="col-span-1">
      <div className="w-56">
        <Image src={profilePic} alt="Sruti sitting on chair in office." className="shadow-lg rounded-full h-56 w-56 object-cover border-none" />
      </div>
    </div>
    <p className={`text-xl lg:col-span-3 font-thin leading-relaxed font-intro ${barlow.variable}`}>
      Welcome to my portfolio! I am a <strong className="font-bold">UX Specialist</strong> with a focus on <strong className="font-bold">qualitative research and web accessibility.</strong><br/>
      I empower tech teams to build efficient and inclusive products through human-centered research.
    </p>
  </div>

  )
}

export default Intro
