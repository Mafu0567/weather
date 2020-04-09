/* eslint-disable max-len */
import Head from 'next/head'
import styles from './index.module.css'

const Home = () => {
  const customSVG = Math.random() > 0.5 ? <rect width='10' height='50' style={{ strokeWidth:3, stroke:'rgb(0,0,0)' }} /> : <ellipse cx='47.4676453' cy='5.5' rx='6' ry='5.5' />


  return (
    <div className='container'>
      <Head>
        <title>Startups disco</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>hello world</h1>
      <div className={styles.icon}>
        <svg preserveAspectRatio='xMidYMid' viewBox='0 0 65 60'>
          <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <g transform='translate(-645.000000, -1520.000000)' stroke='#44444D' strokeWidth='3'>
              <g transform='translate(645.532355, 1522.000000)'>
                {customSVG}
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Home
