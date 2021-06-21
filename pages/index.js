import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
      <HomePage />
      <About />
      <Projects />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
