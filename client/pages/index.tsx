import type { NextPage, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { Data } from './types'
import LandingPage from './landingpage'

const Home: NextPage = ( { data }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage {...data}/>

      <footer className={styles.footer}>
          <a href="">Created by Gael Zarco</a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res: Response = await fetch('http://localhost:5000/')
    const data: Data = await res.json()

    return {
      props: {
        data
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default Home