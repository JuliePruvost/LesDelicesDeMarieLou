import Image from '../../layout/image/Image';
import styles from './FoodGallery.module.scss';
import _boeuf from '/public/foodGallery/_boeuf.jpg';
import _boudins from '/public/foodGallery/_boudins.jpg';
import crabesLarge from '/public/foodGallery/crabesLarge.jpg';
import _crevettesBig from '/public/foodGallery/_crevettesBig.jpg';
import rhumBig from '/public/foodGallery/rhumBig.jpg';
import boeuf from '/public/foodGallery/boeuf.jpg';
import _paella from '/public/foodGallery/_paella.jpg';
import _salade from '/public/foodGallery/_salade.jpg';
import marche3 from '/public/foodGallery/marche3.jpg';
import { StaticImageData } from 'next/image';

interface StaticRequire {
    default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

const SmallImage = ({src, alt}: {src: string | StaticImport, alt: string}) => {
    return (
        <div className={styles.foodGalleryLayoutRowItem}>
            <Image src={src} alt={alt}  />
        </div>
    );
}

const BigImage = ({src, alt}: {src: string | StaticImport, alt: string}) => {
    return (
        <div className={styles.foodGalleryLayoutRowItem}>
            <Image src={src} alt={alt}  />
        </div>
    );
}

export default function FoodGallery() {
    return (
        <div className={styles.foodGalleryWrapper}>
            <div className={styles.foodGalleryLayout}>
                <div className={styles.foodGalleryLayoutRow}>
                    <SmallImage src={_boeuf} alt='boeuf' />
                    <SmallImage src={_boudins} alt='boudins' />
                    <SmallImage src={crabesLarge} alt='crabe' />
                </div>
                <div className={styles.foodGalleryLayoutRow}>
                    <BigImage src={_crevettesBig} alt='crevettes' />
                    <BigImage src={rhumBig} alt='rhum' />
                    <BigImage src={boeuf} alt='boeuf' />
                </div>
                <div className={styles.foodGalleryLayoutRow}>
                    <SmallImage src={_paella} alt='paella' />
                    <SmallImage src={_salade} alt='salade' />
                    <SmallImage src={marche3} alt='marché' />
                </div>
            </div>
        </div>
    );
}