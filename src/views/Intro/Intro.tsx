'use client'

import React from 'react';

import styles from './Intro.module.scss'
import {Container, Typography} from "@/components/layout";
import Link from "next/link";
import {Button} from "@/components/form";

export function Intro() {
    return (
        <section className={styles.intro}>
            <div className={styles.introContainer}>
                <div className={styles.introLeft}>
                    <Container>
                        <div className={styles.introBody}>
                            <div className={styles.tags}>
                                <div className={styles.tagsItem}>
                                    <Typography type={'base'}>Без предоплаты</Typography>
                                </div>
                                <div className={styles.tagsItem}>
                                    <Typography type={'base'}>Любые товары</Typography>
                                </div>
                            </div>
                            <div className={styles.introHeader}>
                                <Typography type={'fifth-title'}>Доставка одежды</Typography>
                            </div>
                            <div className={styles.introSubHeader}>
                                <Typography type={'fourth-title'}>Европейских брендов</Typography>
                            </div>
                            <div className={styles.introText}>
                                <Typography type={'base'}>Самые выгодные условия покупки.
                                    Привезем любые товары прямо к вам. </Typography>
                            </div>
                            <div className={styles.introButtons}>
                                <Link href={'#products'}>
                                    <Button event={()=>console.log()} type={'primary'} style={styles.button}><Typography type={'base'}>Выбрать товар</Typography></Button>
                                </Link>
                                <Link href={'#how-order'}>
                                    <Button event={()=>console.log()} type={'secondary'} style={styles.button}><Typography type={'base'}>Узнать как работает</Typography></Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className={styles.introRight}>
                    <img src={'/intro_bg.png'} alt={'Intro'}/>
                </div>
            </div>
        </section>
    );
};

