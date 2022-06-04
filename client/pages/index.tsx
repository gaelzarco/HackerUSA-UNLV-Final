import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NEXT.js Typescript MK.1
        </h1>
      </main>

      <footer className={styles.footer}>
            <a href="">Created by Gael Zarco</a>
      </footer>
    </div>
  )
}

export default Home
