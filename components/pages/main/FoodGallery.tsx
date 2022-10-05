import Image from '../../layout/image/Image';
import styles from './FoodGallery.module.scss';

const SmallImage = ({src, alt}: {src: string, alt: string}) => {
    return (
        <div className={styles.foodGalleryLayoutRowItem}>
            <Image src={src} alt={alt}  />
        </div>
    );
}

const BigImage = ({src, alt}: {src: string, alt: string}) => {
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
                    <SmallImage src='/foodGallery/_boeuf.jpg' alt='boeuf' />
                    <SmallImage src='/foodGallery/_boudins.jpg' alt='boudins' />
                    <SmallImage src='/foodGallery/_paella.jpg' alt='paella' />
                </div>
                <div className={styles.foodGalleryLayoutRow}>
                    <BigImage src='/foodGallery/_crevettes.jpg' alt='crevettes' />
                    <BigImage src='/foodGallery/_rhum.jpg' alt='rhum' />
                    <BigImage src='/foodGallery/_salade.jpg' alt='salade' />
                </div>
            </div>
        </div>
    );
}