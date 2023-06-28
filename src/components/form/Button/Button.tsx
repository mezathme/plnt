'use client'

import React from 'react';

import styles from './Button.module.scss'
import Link from "next/link";

interface IProps {
    event: any,
    type: 'primary' | 'secondary' | 'text' | 'icon' | 'sign'
    children: string | React.ReactNode
    link?: string
    style?: any
}

export function Button({event, type, children, link, style}: IProps) {

    const returnType = (type: string) => {
        if (type === 'primary') return styles.primary
        if (type === 'secondary') return styles.secondary
        if (type === 'text') return styles.text
        if (type === 'icon') return styles.icon
        if (type === 'sign') return styles.sign
    }

    return (
        <>
            {link ?
                <Link href={link} onClick={() => event()}
                   className={`${styles.button} ${returnType(type)} ${style && style}`}>
                    {children}
                </Link> :
                <button onClick={() => event()} className={`${styles.button} ${returnType(type)} ${style && style}`}>
                    {children}
                </button>
            }
        </>
    );
};

