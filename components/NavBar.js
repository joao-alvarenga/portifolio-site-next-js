import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../styles/Home.module.css';

const NavBar = () => {
    return ( 
        <header className={styles.header}>
      
            <div className={styles.logo__container}>
                <div className={styles.logo}>
                    <h2>J<span></span>A</h2>
                </div>
                <span className={styles.hover__text}><h3>Hi I am João.</h3></span>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                 <li><Link
                 activeClass="active"
                 to="about"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}>About</Link></li>
                    <li><Link
                 activeClass="active"
                 to="projects"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}>Projects</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default NavBar;