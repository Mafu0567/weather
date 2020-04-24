import '../css/style.css'
import Header from '../components/Header/Header.jsx'
import Link from 'next/link'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Link href='#main-content'><a className='hidden'>Passer au contenu principal</a></Link>
      <Header />
      <main id='main-content' className='content-wrapper'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
