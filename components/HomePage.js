import styles from '../styles/Home.module.css';
import Image from 'next/image';

const HomePage = () => {
    return ( 
        <section className={styles.home}  id="home">
            <div className={styles.home__conatiner}>
            <Image src="/homeBg.jpg" alt="Home page background" layout='fill' objectFit='cover'  objectPosition='center' style={{filter: "grayScale(20%)"}} />
            <div className={styles.home__content}>
            <div className={styles.home__content__title}>
            <h1 className={styles.home__content__h1}>Hi I&apos;m João Alvarenga</h1>
                <h2>
                    front<span className={styles.home__span__title}> end </span>
                    <span className={styles.last__element__h2}>developer</span>
                </h2>
            </div>
            </div>
            </div>
        </section>
     );
}
 
export default HomePage;