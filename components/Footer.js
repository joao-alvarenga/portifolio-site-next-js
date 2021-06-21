import React from 'react';
import styles from '../styles/Footer.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const Footer = () => {
    return ( 
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <ul className={styles.footer__ul}>
                    <li><GitHubIcon style={{ fontSize: 23}} /></li>
                    <li><LinkedInIcon style={{ fontSize: 23 }} /></li>
                    <li><EmailOutlinedIcon style={{ fontSize: 23 }} /></li>
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;