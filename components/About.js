import styles from '../styles/About.module.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const About = () => {
    return ( 
        
        <section className={styles.about} id="about">
            <div className={styles.about__container}>
            <div className={styles.about__content}>
            <div className={styles.content__h2}><h2>
            Faites vivre vos idées en
plaçant l'utilisateur et
l'agilité au cœur de vos
projets
            </h2>
            <div className={styles.border__content}></div>
            </div>
            <div className={styles.content__p}>
            <p>
            random text to see the design 
            </p>
            <br/><br/><br/>
            <p className={styles.text__p}>Bienvenue chez Le Singe.</p>
            </div>
            </div>
            <div  className={styles.about__inner__container}>
            <div><h3>
            About 
            <br className={styles.text__line} />
            <span className={styles.text__span}>Me</span><span className={styles.text__line}><ArrowForwardIcon  style={{ marginLeft: ".5em", marginBottom: "-.1em" }} />
            </span>
            </h3></div>
            </div>
            </div>
        </section>
     );
}
 
export default About;