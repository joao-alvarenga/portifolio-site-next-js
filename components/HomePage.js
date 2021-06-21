import React from 'react';
import styles from '../styles/Home.module.css';

const HomePage = () => {
    return ( 
        <section className={styles.home}>
            <div className={styles.home__conatiner}>
            <img src="/homeBg.jpg" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
            <div className={styles.home__content}>
            <div className={styles.home__content__title}>
                <h2>
                    front
                    <br/>
                    <span className={styles.home__span__title}>end</span>
                    <br/>
                    developer
                </h2>
            </div>
            </div>
            </div>
        </section>
     );
}
 
export default HomePage;