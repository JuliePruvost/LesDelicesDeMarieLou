import Image from '../../layout/image/Image';
import styles from './FoodGallery.module.scss';
import _boeuf from '/public/foodGallery/_boeuf.jpg';
import _boudins from '/public/foodGallery/_boudins.jpg';
import _paella from '/public/foodGallery/_paella.jpg';
import _crevettes from '/public/foodGallery/_crevettes.jpg';
import _rhum from '/public/foodGallery/_rhum.jpg';
import _salade from '/public/foodGallery/_salade.jpg';
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
                    <SmallImage src={_paella} alt='paella' />
                </div>
                <div className={styles.foodGalleryLayoutRow}>
                    <BigImage src={_crevettes} alt='crevettes' />
                    <BigImage src={_rhum} alt='rhum' />
                    <BigImage src={_salade} alt='salade' />
                </div>
            </div>
        </div>
    );
}