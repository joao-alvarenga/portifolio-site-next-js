import Link from 'next/link';
import styles from '../styles/Success.module.css';

const Success = () => {
    return ( 
        <div className={styles.succsess__page}>
            <main className={styles.succsess__container}>
                <h1 className={styles.succsess__title}>
                    Message received. Thank you!
                </h1>
              <Link passhref="https://joaoalvarenga-me.vercel.app/"><button className={styles.succsess__btn}>
                    <h2>back to home</h2>
                </button></Link>
            </main>
        </div>
     );
}
 
export default Success;