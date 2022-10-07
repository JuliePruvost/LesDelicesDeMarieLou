import React, { ReactNode } from "react";
import styles from './Flex.module.scss';

export function HorizontalNoWrapFlex({children}: {children: ReactNode}) {
    return (
        <div className={styles.horizontalNoWrapFlex}>
            {children}
        </div>
    );
}

export function VerticalFlex({children}: {children: ReactNode}) {
    return (
        <div className={styles.verticalFlex}>
            {children}
        </div>
    );
}