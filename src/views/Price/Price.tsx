import React from 'react';
import Link from "next/link";

interface IRates {
    title: string,
    typeTitle: string,
    description: string,
    list: string[],
    listType: string
}

import styles from './Price.module.scss'
import {Container, Typography} from "@/components/layout";


const ratesItem: IRates[] = [
    {
        title: 'Условия доставки',
        typeTitle: 'tertiary-title',
        description: 'Удобно и безопасно при любом тарифе',
        listType: 'lg-subtitle',
        list: ['Выкуп товара', 'Доставка в Россию до двери', 'Никаких бумаг и таможни', 'Гарантия доставки или полный возврат', 'Срок доставки 2-3 недели', 'Без ограничения по весу, объему и количеству']
    },
    {
        title: 'Без предоплаты',
        typeTitle: 'fifth-title',
        description: 'Платите, когда увидите товар',
        listType: 'base',
        list: ['Товары стоимостью до 30 тыс рублей', 'За исключением: парфюмерии, нижнего белья, коллекционных товаров и прочих товаров индивидуальных категорий']
    },
    {
        title: 'По предоплате',
        typeTitle: 'fifth-title',
        description: 'Небольшой процент от суммы при заказе',
        listType: 'base',
        list: ['Предоплата 25%', 'Заказывайте без ограничений по стоимости', 'Товары любых категорий']
    },
]

export function Price() {
    return (
        <section className={`${styles.rates}`} id={'how-much'}>
            <Container>
                <div className={styles.ratesMobileTitle}>
                    <Typography type={'title'}>Тарифы</Typography>
                </div>
                <div className={styles.container}>
                    <div className={styles.ratesTop}>
                        {
                            ratesItem.map((elem, index) => {
                                return (
                                    <div key={index} className={`${styles.ratesItem}`}>
                                        <div className={styles.ratesTitle}>
                                            <Typography type={elem.typeTitle}>{elem.title}</Typography>
                                            <Typography type={'base'}>{elem.description}</Typography>
                                        </div>
                                        <ul className={styles.ratesList}>
                                            {
                                                elem.list.map((list, index) => {
                                                    return (
                                                        <li key={index}><Typography
                                                            type={elem.listType}>{list}</Typography></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};
