import React from 'react';
import styles from '../styles/Projects.module.css';
import Image from 'next/image';

const Projects = () => {
    return ( 
        <section className={styles.projects}>
            <div className={styles.projects__container}>
                <h2 className={styles.portifolio__title}>some of my projects</h2>
            <div className={styles.projects__inner__container}>
                        <div className={styles.projects__img}>
                            <div className={styles.projects__content}>
                            <div  className={styles.portifolio__img}>
                            <span className={styles.glass__wrap}>
                                <span className={styles.glass__inner__wrap}>
                                    <h3>nanfbnafujbjufbaujbfujbwfujbwub</h3>
                                    <span className={styles.icon__container}>
                                    <Image src="/htmlIcon.svg" width={30} height={30} />
                                    <Image src="/cssIcon.svg" width={30} height={30} />
                                    <Image src="/jsIcon.svg" width={30} height={30} />
                                    </span>
                                </span>
                            </span>
                            <img src="/apple-clone.png" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
                            </div>
                                <span className={styles.portifolio__content__left}><h3>view live</h3></span>
                                <span className={styles.portifolio__content__right}><h3>view code</h3></span>
                            </div>
                        </div>
                   
                        <div className={styles.projects__img__2}>
                            <div className={styles.projects__content__md}>
                            <div  className={styles.portifolio__img}>
                            <span className={styles.glass__wrap__2}>
                                <span className={styles.glass__inner__wrap__2}>
                                    <h3>nanfbnafujbjufbaujbfujbwfujbwub</h3>
                                    <span className={styles.icon__container__2}>
                                    <Image src="/htmlIcon.svg" width={30} height={30} />
                                    <Image src="/cssIcon.svg" width={30} height={30} />
                                    <Image src="/sassIcon.svg" width={30} height={30} />
                                    </span>
                                </span>
                            </span>
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