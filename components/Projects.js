import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
    return ( 
        <section className={styles.projects}>
            <div className={styles.projects__container}>
            <div className={styles.projects__inner__container}>
            
                        <div className={styles.projects__img}>
                            <div className={styles.projects__content}>
                            <div  className={styles.portifolio__img}>
                            <img src="/apple-clone.png" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
                            </div>
                                <span className={styles.portifolio__content__left}><h3>view live</h3></span>
                                <span className={styles.portifolio__content__right}><h3>view code</h3></span>
                            </div>
                        </div>
                   
                        <div className={styles.projects__img__2}>
                            <div className={styles.projects__content__md}>
                            <div  className={styles.portifolio__img}>
                            <img src="/chillhoop.png" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
                            </div>
                                <span className={styles.portifolio__content__left}><h3>view live</h3></span>
                                <span className={styles.portifolio__content__right}><h3>view code</h3></span>
                            </div>
                        </div>
            </div>
            </div>
        </section>
     );
}
 
export default Projects;