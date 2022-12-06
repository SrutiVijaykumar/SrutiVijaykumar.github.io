import Link from 'next/link'
import { Sacramento } from '@next/font/google'
import React from 'react'

const sacramento = Sacramento({
  weight: '400',
  variable: '--font-logo'
})

const Header = (): JSX.Element => {
  return (
    <header className="lg:px-20 px-20 bg-white flex flex-wrap items-center lg:py-0 py-2 mx-auto w-full sticky top-0 z-50 shadow-md">
    <div className="flex-1 flex justify-between items-center">
      <Link href="/" className={`font-semibold text-brand text-4xl font-logo ${sacramento.variable}`}>
        Sruti Vijaykumar
      </Link>
    </div>

    <label htmlFor="menu-toggle" data-menu-toggle className="pointer-cursor lg:hidden block">
    <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div data-menu className="hidden flex-1 lg:flex lg:items-center lg:w-auto w-full content-center justify-start" id="menu">
      <nav>
        <ul className="lg:flex items-left justify-between text-base text-gray-500 pt-4 lg:pt-0">
          <li><Link className="lg:p-6 py-3 px-0 block border-b-2 border-transparent hover:border-brand hover:text-gray-700 focus:border-brand focus:text-gray-700 font-bold text-2xl"
              href="/">Projects</Link></li>
          <li><Link className="lg:p-6 py-3 px-0 block border-b-2 border-transparent hover:border-brand hover:text-gray-700 focus:border-brand focus:text-gray-700 font-bold text-2xl"
              href="/about">About</Link></li>
          <li><Link className="lg:p-6 py-3 px-0 block border-b-2 border-transparent hover:border-brand hover:text-gray-700 focus:border-brand focus:text-gray-700 font-bold text-2xl"
              href="/contact">Contact</Link></li>
          <li><Link className="lg:p-6 py-3 px-0 block border-b-2 border-transparent hover:border-brand hover:text-gray-700 focus:border-brand focus:text-gray-700 font-bold text-2xl"
              href="/docs/SrutiVijayKumarResume.pdf" target="_blank">Resume</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
