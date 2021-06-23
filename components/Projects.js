import styles from '../styles/Projects.module.css';
import Image from 'next/image';

const Projects = () => {
    return ( 
        <section className={styles.projects} id="projects">
            <div className={styles.projects__container}>
                <h2 className={styles.portifolio__title}>some of my projects</h2>
            <div className={styles.projects__inner__container}>
            <div className={styles.portifolio__wrap}>
                        <div className={styles.projects__img}>
                            <div className={styles.projects__content}>
                            <div  className={styles.portifolio__img}>
                            <span className={styles.glass__wrap}>
                                <span className={styles.glass__inner__wrap}>
                                <Image src="/htmlIcon.svg" alt="html logo" width={30} height={30} />
                                    <Image src="/cssIcon.svg" alt="css logo" width={30} height={30} />
                                    <Image src="/jsIcon.svg" alt="JavaScript logo" width={30} height={30} />
                                </span>
                            </span>
                            <img src="/apple-clone.png" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
                            </div>
                                <span className={styles.portifolio__content__left}><a target="_blank" rel="noopener noreferrer" href="https://joao-alvarenga.github.io/apple-clone/"><h3>view live</h3></a></span>
                                <span className={styles.portifolio__content__right}><a target="_blank" rel="noopener noreferrer" href="https://github.com/joao-alvarenga/apple-clone"><h3>view code</h3></a></span>
                            </div>
                        </div>
                        </div>
                   
                        <div className={styles.portifolio__wrap__md}>
                        <div className={styles.projects__img__2}>
                            <div className={styles.projects__content__md}>
                            <div  className={styles.portifolio__img}>
                            <span className={styles.glass__wrap__2}>
                                <span className={styles.glass__inner__wrap__2}>
                                <Image src="/htmlIcon.svg" alt="html logo" width={30} height={30} />
                                    <Image src="/sassIcon.svg" alt="Sass logo" width={30} height={30} />
                                    <Image src="/jsIcon.svg" alt="JavaScript logo" width={30} height={30} />
                                </span>
                            </span>
                            <img src="/chillhoop.png" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
                            </div>
                                <span className={styles.portifolio__content__left}><a target="_blank" rel="noopener noreferrer" href="https://chillhoop-music-player.web.app/"><h3>view live</h3></a></span>
                                <span className={styles.portifolio__content__right}><a target="_blank" rel="noopener noreferrer" href="https://github.com/joao-alvarenga/music-player-app"><h3>view code</h3></a></span>
                            </div>
                        </div>
                        </div>
            </div>
            </div>
        </section>
     );
}
 
export default Projects;