import styles from '../styles/About.module.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const About = () => {
    return ( 
        
        <section className={styles.about} id="about">
            <div className={styles.about__container}>
        
          
            <div className={styles.about__wrap__left}>
            <div className={styles.about__title}>
                <h3>
                    About   
                    <br className={styles.line__break}/>
                    <span className={styles.p__content}>me</span> <span className={styles.icon__container}><ArrowForwardIcon  style={{ marginLeft: ".3em", marginBottom: "-.1em" }} /></span>
                </h3>
            </div>
        </div>
        <div className={styles.about__wrap__right}>
            <div className={styles.about__content}>
                <div className={styles.about__wrap}>
                    <h2>
                        When I first started to code I quickly fell in love with the front end part of it, 
                        because it joins the best parts of logic, design and creativity.
                    </h2>
                    <br/>
                    <br/>
                    <span className={styles.boder__wrap}></span>
                </div>
                <div className={styles.about__p__wrap}>
                    <p>
                        my journey as a programmer has just begun, I am excited to see what is coming next, 
                        My goal in this journey is fairly simple; to be a student for as long as it takes to become a teacher. 
                        To absorb as much as I can from those my senior and to become the best developer I can be.
                        <br/>
                        <br/>
                        Let's build something amazing together.
                    </p>
                </div>
            </div>
        </div>



            </div>
        </section>
     );
}
 
export default About;