import styles from './Footer.module.scss';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import GoogleBusinessIcon from '../../icons/GoogleBusinessIcon';
import LocationIcon from 'components/icons/LocationIcon';
import TimeIcon from 'components/icons/TimeIcon';

const smallIconWidth = '16';
const smallIconHeight = '16';
const iconWidth = '32';
const iconHeight = '32';

const instagramLink = (
    <a 
        href="https://www.instagram.com/lesdelicesdemari_lou/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram (link opens in a new tab)"
    >
        <div className={styles.footerSocialIcon}><InstagramIcon height={iconHeight} width={iconWidth} /></div>
        <span className="visually-hidden">Instagram</span>
    </a>
);

const facebookLink = (
    <a 
        href="https://www.facebook.com/groups/773001470568660"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook (link opens in a new tab)"
    >
        <div className={styles.footerSocialIcon}><FacebookIcon height={iconHeight} width={iconWidth} /></div>
        <span className="visually-hidden">Instagram</span>
    </a>
);

const googleLink = (
    <a 
        href="https://www.google.com/maps/place/Les+d%C3%A9lices+de+Marie-lou/@48.9585756,2.1971344,15z/data=!4m5!3m4!1s0x0:0x9ef0f8e277e92f27!8m2!3d48.9585759!4d2.1971318"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook (link opens in a new tab)"
    >
        <div className={styles.footerSocialIcon}><GoogleBusinessIcon height={iconHeight} width={iconWidth} /></div>
        <span className="visually-hidden">Google Business</span>
    </a>
);

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerDescriptionContent}>
                    <div className={styles.footerInformation + ' ' + styles.optional}>
                        <ul>
                            <li>
                                <span className={styles.footerSmallIcon}><LocationIcon height={smallIconHeight} width={smallIconWidth} /></span>
                                Les Délices de Marie Lou
                            </li>
                            <li>
                                74 rue Jean Bart
                            </li>
                            <li>
                                Cormeilles en Parisis 95240
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerInformation} >
                        <ul>
                            <li>
                                Traiteur
                            </li>
                            <li>
                                Mardi au Samedi
                            </li>
                            <li>
                                <span className={styles.footerSmallIcon}><TimeIcon height={smallIconHeight} width={smallIconWidth} /></span>
                                11h - 14h
                            </li>
                            <li>
                                <span className={styles.footerSmallIcon}><TimeIcon height={smallIconHeight} width={smallIconWidth} /></span>
                                16h - 20h
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerInformation} >
                        <ul>
                            <li>
                                Marché Puteaux Chantecoq
                            </li>
                            <li>
                                Dimanche
                            </li>
                            <li>
                                <span className={styles.footerSmallIcon}><TimeIcon height={smallIconHeight} width={smallIconWidth} /></span>
                                8h - 13h
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerSocialContent}>
                    {facebookLink}
                    {instagramLink}
                    {googleLink}
                </div>
            </div>
        </div>
    );
}