import React from 'react';

import styles from './Typography.module.scss'

interface IProps{
    type: 'caption' | 'lg-caption' | 'body' | 'base' | 'subtitle' | 'lg-subtitle' | 'title' | 'second-title' | 'tertiary-title' | 'fourth-title' | 'fifth-title' | 'lg-title' | string,
    children: React.ReactNode
}
export function Typography ({type, children}:IProps){
    return (
        <>
            {   (type === 'caption' && (<span className={styles.caption}>{children}</span>)) ||
                (type === 'lg-caption' && (<span className={styles.largeCaption}>{children}</span>)) ||
                (type === 'body' && (<p className={styles.body}>{children}</p>)) ||
                (type === 'base' && (<p className={styles.base}>{children}</p>)) ||
                (type === 'subtitle' && (<h5 className={styles.subtitle}>{children}</h5>)) ||
                (type === 'lg-subtitle' && (<h5 className={styles.largeSubtitle}>{children}</h5>)) ||
                (type === 'title' && (<h5 className={styles.title}>{children}</h5>)) ||
                (type === 'second-title' && (<h4 className={styles.secondTitle}>{children}</h4>)) ||
                (type === 'tertiary-title' && (<h3 className={styles.tertiaryTitle}>{children}</h3>)) ||
                (type === 'fourth-title' && (<h2 className={styles.fourthTitle}>{children}</h2>)) ||
                (type === 'fifth-title' && (<h1 className={styles.fifthTitle}>{children}</h1>)) ||
                (type === 'lg-title' && (<h1 className={styles.largeTitle}>{children}</h1>))
            }
        </>
    );
};
