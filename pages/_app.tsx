import '../css/style.css'
import Header from '../components/Header/Header.jsx'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className='content-wrapper'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
