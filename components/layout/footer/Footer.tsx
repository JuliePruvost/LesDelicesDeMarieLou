import styles from './Footer.module.scss';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';

const iconWidth = '32';
const iconHeight = '32';
const iconColor = 'black';

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

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerInformation}>
                    <ul>
                        <li>
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
                <div className={styles.footerSocialContent}>
                    {facebookLink}
                    {instagramLink}
                </div>
            </div>
        </div>
    );
}