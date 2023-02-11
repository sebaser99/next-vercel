import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const margin = {
  margin: '2rem 0',
  textAlign: 'center' as const
}

export default function About() {
  return (

      <>
        <h1 style={margin}>About Page</h1>
        <h1 style={margin} className='title'>
          Ir a <Link href="/">Home</Link>
        </h1>
        <h1 style={margin} className='title'>
          Ir a <Link href="/contact">Contact</Link>
        </h1>
        <h1 style={margin} className='title'>
          Ir a <Link href="/pricing">Pricing</Link>
        </h1>
        <p style={margin} className='description'>
          Get Started by editing{''}
          <code className='code'>  pages/about.tsx</code>
        </p>
      </>
  )
}

About.getLayout = function getLayout (page: JSX.Element ){
  return(
    <MainLayout>
      <DarkLayout>
        {page} 
      </DarkLayout>
    </MainLayout>
  )
}