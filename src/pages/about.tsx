import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'



export default function About() {
  return (

      <>
        <h1>About Page</h1>
        <h1 className='title'>
          Ir a <Link href="/">Home</Link>
        </h1>
        <h1 className='title'>
          Ir a <Link href="/contact">Contact</Link>
        </h1>
        <h1 className='title'>
          Ir a <Link href="/pricing">Pricing</Link>
        </h1>
        <p className='description'>
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