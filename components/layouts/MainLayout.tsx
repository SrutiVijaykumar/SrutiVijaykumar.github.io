import React, { ReactNode } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Head from 'next/head'

interface Props {
  children?: ReactNode
  title?: string
}
const Layout = ({ children, title = "Sruti's Portfolio" }: Props): JSX.Element => (
  <>
  <Head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
    <link rel="manifest" href="/favicons/site.webmanifest"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>
    <title>{title}</title>
  </Head>
  <Header />
  <div className="antialiased container mx-auto h-full pb-12">
    <main className="mx-6 lg:mx-20">{children}</main>
  </div>
  <Footer />
  </>
)

export default Layout
