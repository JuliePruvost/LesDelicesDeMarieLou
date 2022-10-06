import styles from './Text.module.scss';

export function Citation({content}: {content: string}) {
    return (
        <p className={styles.citation}>
            {content}
        </p>
    );
}

export function Description({content}: {content: string}) {
    return (
        <p className={styles.description}>
            {content}
        </p>
    );
}

export function BoldSpan({content}: {content: string}) {
    return (
        <span className={styles.boldSpan}>
            {content}
        </span>
    );
}