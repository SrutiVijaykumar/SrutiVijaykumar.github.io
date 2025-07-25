import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
