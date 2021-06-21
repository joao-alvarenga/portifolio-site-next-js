import styles from '../styles/Home.module.css';

const HomePage = () => {
    return ( 
        <section className={styles.home}>
            <div className={styles.home__conatiner}>
            <img src="/homeBg.jpg" width={'100%'} height={'100%'} objectFit='cover' objectPosition='center' />
            </div>
        </section>
     );
}
 
export default HomePage;