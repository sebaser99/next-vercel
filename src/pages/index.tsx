import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


  
export default function Home() {
  return (
    
     <MainLayout>
      <>
        <h1>Home Page</h1>
          <h1 className='title'>
            Ir a <Link href="/about">About</Link> 
          </h1>
          <h1 className='title'>
            Ir a <Link href="/contact">Contact</Link> 
          </h1>
          <h1 className='title'>
            Ir a <Link href="/pricing">Pricing</Link>
          </h1>
          <p className='description'>
            Get Started by editing{''}
            <code className='code'>  pages/index.tsx</code>
          </p>
      </>
     </MainLayout>
  )
}
