import Link from 'next/link'
import { Sacramento } from '@next/font/google'
import React from 'react'

const sacramento = Sacramento({
  weight: '400',
  variable: '--font-logo'
})

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brand text-white text-center lg:text-left mt-6 pb-6">
      <div className="text-center p-4">
        <span className="text-xs">© May 2022 by</span> <span className={`font-bold text-xl font-logo ${sacramento.variable}`}>Sruti Vijaykumar</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-auto lg:mx-40">
        <div>
          <div className="my-4">
            <Link className="underline focus:no-underline hover:no-underline text-xl font-bold" href="/about.html">About</Link>
          </div>
          <div className="my-4">
            <Link className="underline focus:no-underline hover:no-underline text-xl font-bold" href="/contact.html">Contact</Link>
          </div>
          <div className="my-4">
            <Link className="underline focus:no-underline hover:no-underline text-xl font-bold" href="/assets/docs/SrutiVijayKumarResume.pdf">Resume</Link>
          </div>
        </div>
        <div className="place-items-auto col-span-3">
          <div className="my-4">
            <Link className="underline focus:no-underline hover:no-underline text-xl font-bold" href="/">Projects</Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="my-4">
                <Link className="underline focus:no-underline hover:no-underline text-base font-bold" href="/#professional-projects">Professional Projects</Link>
              </div>
              <div className="my-2">
                <Link className="underline focus:no-underline hover:no-underline text-sm" href="/uxr-medical-devices">UX Research For Medical Devices</Link>
              </div>
              <div className="my-2">
                <Link className="underline focus:no-underline hover:no-underline text-sm" href="/uxr-shipping-website">UX Research For A Mailing & Shipping Website</Link>
              </div>
              <div className="my-2">
                <Link className="underline focus:no-underline hover:no-underline text-sm" href="/accessibility-audits-remediation">Accessibility Audits & Remediation</Link>
              </div>
            </div>
            <div>
              <div className="my-4">
                <Link className="underline focus:no-underline hover:no-underline text-base font-bold" href="/#volunteer-work">Volunteer Work</Link>
              </div>
              <div className="my-2">
                <Link className="underline focus:no-underline hover:no-underline text-sm" href="/communication-diy-board">TalkBox: A DIY Communication Board</Link>
              </div>
              <div className="my-2">
                <Link className="underline focus:no-underline hover:no-underline text-sm" href="/website-for-a-non-profit">Accessible Website For STEAM Success Foundation</Link>
              </div>
              <div className="my-2">
                <Link className="underline focus:no-underline hover:no-underline text-sm" href="/">Design Thinking To Influence Policies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
