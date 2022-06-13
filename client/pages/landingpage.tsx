import { NextPage } from 'next'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

import { Data } from './types'

const LandingPage: NextPage<Data> = (props): JSX.Element => {

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          NEXT.ts Landing Page
        </h1>

        <h3>{props.message}</h3>
          
        <div id='loginlanding'>
          <form method='POST'>
            <div>
              <label className='userlabel'> Username </label>
              {/* <input type='text' className='userlogin' htmlFor='username'></input> */}
            </div>
            <div>
              <label className='userlabel'> Password </label>
              {/* <input type='text' className='userlogin' htmlFor='userpasword'></input> */}
            </div>
            <div>
              <button id= 'login' type='submit'>Login</button>
            </div>
          </form>
        </div>

        <div>
          <a href="#">New? Create Account</a>
        </div>

        <Link href="/catalog">
          <a>Skip Login</a>
        </Link>
        <Link href="/createuser">
          <a>Skip Login</a>
        </Link>

      </main>
    </>
  )
}

export default LandingPage