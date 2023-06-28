import React from 'react';
import styles from './Container.module.scss'

interface IProps {
    children: React.ReactNode
    style?: any
}

export function Container({children, style}: IProps) {
    return (
        <div className={`${styles.container} ${style && style}`}>
            {children}
        </div>
    );
};
