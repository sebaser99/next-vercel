import { ReactElement } from 'react'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement 
}

//o puede ser
// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: JSX.Element) => JSX.Element 
// }

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page)

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}
 