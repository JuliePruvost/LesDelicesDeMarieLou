import React, { ReactNode } from 'react';
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

export function DescriptionWithChildren({children}: {children: ReactNode}) {
    return (
        <div className={styles.description}>
            {children}
        </div>
    );
}

export function BoldSpan({content}: {content: string}) {
    return (
        <span className={styles.boldSpan}>
            {content}
        </span>
    );
}

export function SectionTitle({content}: {content: string}) {
    return (
        <div className={styles.sectionTitle}>
            {content}
        </div>
    );
}

export function SubSectionTitle({content}: {content: string}) {
    return (
        <div className={styles.subSectionTitle}>
            {content}
        </div>
    );
}

export function FoodList({title, children}: {title: string, children: ReactNode}) {
    return (
        <>
            <div className={styles.foodListTitle}>
                {title}
            </div>
            <ul className={styles.foodList}>
                {children}
            </ul>
        
        </>
    );
}