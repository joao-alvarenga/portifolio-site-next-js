import styles from '../styles/About.module.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const About = () => {
    return ( 
        
        <section className={styles.about} id="about">
            <div className={styles.about__container}>
            <div className={styles.about__content}>
            <div className={styles.content__h2}><h2>
            When first I started to code 
            I quickly fell in love with the frot end part of it, 
            because it joins the best parts of logic, design 
            and creativity.
            </h2>
            <div className={styles.border__content}></div>
            </div>
            <div className={styles.content__p}>
            <p>
            my journey as a programmer has just begun,
            I am excited to see what is coming next, 
            My goal in this journey is fairly simple; to be a student for as long as it takes to become a teacher. 
            To absorb as much as I can from those my senior and to become the best developer I can be. 
            </p>
            <br/><br/><br/>
            <p className={styles.text__p}>Let&apos;s build something amazing together.</p>
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