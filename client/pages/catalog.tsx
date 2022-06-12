import { NextPage } from 'next'
import styles from '/styles/Home.module.css'

const Catalog: NextPage = (props): JSX.Element => {
    return(
      <div>
        <main className={styles.main}>
            <h1>Catalog page</h1>
        </main>
        
        <footer className={styles.footer}>
            <a href="">Created by Gael Zarco</a>
        </footer>
      </div>
    )
}

export default Catalog