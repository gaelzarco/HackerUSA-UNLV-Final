import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import LandingPage from './components/landingpage'

const Home: NextPage = ({ data }) => {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage data={data}/>

      <footer className={styles.footer}>
          <a href="">Created by Gael Zarco</a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res: promise = await fetch('http://localhost:5000/')
  const data: object = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
