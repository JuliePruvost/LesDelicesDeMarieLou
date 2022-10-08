import Image from "next/image";
import boutique_large from '/public/boutique_large.jpeg'
import styles from './WideScreenImage.module.scss';

export default function WideScreenImage() {
    return (
        <div style={{display: 'block'}}>
            <Image
                src={boutique_large}
                alt="accueil les delices de marie lou"
                height="30vh"
                width="100vw"
                objectFit="cover"
                objectPosition="50% 30%"
                layout="responsive"
                className={styles.wideScreenImage}            />
        </div>
    );
}