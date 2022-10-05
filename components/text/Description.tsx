import styles from './Description.module.scss';

export default function Description({content}: {content: string}) {
    return (
        <p className={styles.description}>
            {content}
        </p>
    );
}