
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function Pricing() {
  return (
    <>
    <MainLayout>
        <>
            <h1>Contact Page</h1>
            <h1 className='title'>
                Ir a <Link href="/">Home</Link>
            </h1>
            <h1 className='title'>
                Ir a <Link href="/about">About</Link>
            </h1>
            <h1 className='title'>
                Ir a <Link href="/contact">Contact</Link>
            </h1>
            <p className='description'>
                Get Started by editing{''}
                <code className='code'>  pages/pricing/index.tsx</code>
            </p>
        </>
    </MainLayout>
</>
  )
}
