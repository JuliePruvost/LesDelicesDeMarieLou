import { ReactNode } from 'react';
import styles from './ContentWrapper.module.scss';

export default function ContentWrapper({children}: {children: ReactNode}) {
    return (
        <div className={styles["content-wrapper"]}>
            {children}
        </div>
    );
}