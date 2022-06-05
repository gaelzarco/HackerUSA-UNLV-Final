import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NEXT.ts Landing Page
        </h1>

        <h3>{ data.message }</h3>
        
        <div id='loginlanding'>
          <form method='POST'>
            <div>
              <label className='userlabel'> Username </label>
              <input type='text' className='userlogin' htmlFor='username'></input>
            </div>
            <div>
              <label className='userlabel'> Password </label>
              <input type='text' className='userlogin' htmlFor='userpasword'></input>
            </div>
            <div>
              <input type='submit'></input>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
          <a href="">Created by Gael Zarco</a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res: promise = await fetch('http://localhost:5000/')
  const data: object = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
