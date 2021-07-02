import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import styles from '../styles/Home.module.css';



const NavBar = () => {
   

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
      }
    
    return ( 
        <header className={styles.header}>
      <Link
                 to="home"
                 spy={false}
                 smooth={true}
                 offset={0}
                 duration={500}>
            <div className={styles.logo__container}>
                <div className={styles.logo}>
                    <h2>J<span></span>A</h2>
                </div>
            </div>
            </Link>
            <nav className={ isOpen === false ? styles.nav : styles.nav +' '+ styles.menuOpen } >
                <ul className={styles.ul}>
                 <li className={styles.nav__item}><Link
                  onClick={handleClick}
                 to="about"
                 activeClass={styles.active}
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration={500}>About</Link></li>
                    <li className={styles.nav__item}><Link
                     onClick={handleClick}
                 activeClass={styles.active}
                 to="projects"
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration={500}>Projects</Link></li>

                  <li className={styles.nav__item}><Link
                     onClick={handleClick}
                 activeClass={styles.active}
                 to="contact"
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration={500}>Contact</Link></li>
                </ul>
            </nav>
            <div className={styles.menu__icon}  >
            <div className={ isOpen === false ? styles.menu__btn : styles.menu__btn +' '+ styles.open }  onClick={handleClick}>
    <div className={styles.menu__btn__burger}></div>
  </div>
            </div>
        </header>
     );
}
 
export default NavBar;