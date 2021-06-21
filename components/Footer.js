import React from 'react';
import styles from '../styles/Footer.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const Footer = () => {
    return ( 
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <ul>
                    <li><GitHubIcon style={{ fontSize: 23}} /></li>
                    <li><LinkedInIcon style={{ fontSize: 23 }} /></li>
                    <li><div className={styles.right__container}>
	<button className={styles.right__container__button}>
    <span className={styles.short__text}>
    <EmailOutlinedIcon style={{ fontSize: 23 }} />
          </span> 
          <span className={styles.long__text} >jhafufauubgaufwubuywbu</span>
      </button>
</div><div className={styles.hover__content}></div></li>
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;