import { NextPage } from 'next'
import styles from '/styles/Home.module.css'

const LandingPage: NextPage = (props) => {
    const data = props.data

    return (
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
              <button id= 'login' type='submit'>Login</button>
            </div>
          </form>
        </div>

        <div>
          <a href="#">New? Create Account</a>
        </div>

        <div>

        </div>

        </main>
    )
}

export default LandingPage