import React, { ReactNode } from "react";
import styles from './HorizontalNoWrapFlex.module.scss';

export default function HorizontalNoWrapFlex({children}: {children: ReactNode}) {
    return (
        <div className={styles.horizontalNoWrapFlex}>
            {children}
        </div>
    );
}