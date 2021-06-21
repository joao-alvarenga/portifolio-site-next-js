import React from 'react';
import styles from '../styles/Footer.module.css';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@material-ui/icons';

const Footer = () => {
    return ( 
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <ul>
                    <li><GitHubIcon /></li>
                    <li><LinkedInIcon /></li>
                    <li><EmailIcon /></li>
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;