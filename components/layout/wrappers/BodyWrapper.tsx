import { ReactNode } from 'react';
import styles from './BodyWrapper.module.scss';

export default function BodyWrapper({children}: {children: ReactNode}) {
    return (
        <div className={styles["body-wrapper"]}>
            {children}
        </div>
    );
}