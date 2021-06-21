import React from 'react';
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
            Penser utilisateur et inventer les expériences digitales de demain, collaborer
             différemment pour faire naître des idées malines et innovantes. Ré-enchanter le
             quotidien d'un projet, concevoir pas à pas ensemble, comprendre l'usage en contexte...
            </p>
            <br/><br/><br/>
            <p className={styles.text__p}>Bienvenue chez Le Singe.</p>
            </div>
            </div>
            <div  className={styles.about__inner__container}>
            <div><h3>
            About 
            <br/>
            Me<ArrowForwardIcon style={{ position: "absolute", bottom: 0, right: ".8em" }} />
            </h3></div>
            </div>
            </div>
        </section>
     );
}
 
export default About;