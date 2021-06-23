import styles from '../styles/Footer.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const Footer = () => {
    return ( 
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <ul className={styles.footer__ul}>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/joao-alvarenga"><GitHubIcon style={{ fontSize: 23}} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jo%C3%A3o-alvarenga/"><LinkedInIcon style={{ fontSize: 23 }} /></a></li>
                    <li><a href= "mailto:jvalvarenga@mailfence.com"><EmailOutlinedIcon style={{ fontSize: 23 }} /></a></li>
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;