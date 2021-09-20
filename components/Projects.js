import styles from "../styles/Projects.module.css";
import Image from "next/image";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects__container}>
        <h2 className={styles.portifolio__title}>some of my projects</h2>
        <div className={styles.projects__inner__container}>
          <div className={styles.float__left}>
            <div className={styles.img__wrap}>
              <div className={styles.img__container}>
                <Image
                  src="/restaurant-app.png"
                  alt="restaurant app image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <span className={styles.hover__text__container}>
                  <Image
                    src="/reactIcon.svg"
                    alt="react.js logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/sassIcon.svg"
                    alt="css logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/webpackIcon.svg"
                    alt="JavaScript logo"
                    width={30}
                    height={30}
                  />
                </span>
              </div>
              <span className={styles.projects__btn__left}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-restaurant-app-63939.web.app/"
                >
                  <h3>view live</h3>
                </a>
              </span>
              <span className={styles.projects__btn__right}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/joao-alvarenga/restaurante-app"
                >
                  <h3>view code</h3>
                </a>
              </span>
            </div>
          </div>

          <div className={styles.float__right}>
            <div className={styles.img__wrap}>
              <div className={styles.img__container}>
                <Image
                  src="/chillhoop.png"
                  alt="chillhoop music player image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <span className={styles.hover__text__container}>
                  <Image
                    src="/htmlIcon.svg"
                    alt="html logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/sassIcon.svg"
                    alt="Sass logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/jsIcon.svg"
                    alt="JavaScript logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/gulpIcon.svg"
                    alt="JavaScript logo"
                    width={33}
                    height={33}
                  />
                </span>
              </div>
              <span className={styles.projects__btn__left}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chillhoop-music-player.web.app/"
                >
                  <h3>view live</h3>
                </a>
              </span>
              <span className={styles.projects__btn__right}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/joao-alvarenga/music-player-app"
                >
                  <h3>view code</h3>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
