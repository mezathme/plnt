'use client'

import React from 'react';

import styles from './Footer.module.scss'

import {Button} from "@/components/form";
import {Container, Typography} from "@/components/layout";
import Link from "next/link";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <Link className={styles.link} href={'/'}>
                        <svg width="131" height="31" viewBox="0 0 131 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.94491 8.45428C4.87726 8.19642 5.07188 7.94429 5.33859 7.94429C5.52217 7.94429 5.68302 8.06713 5.73128 8.24416L8.329 17.7753C8.42545 18.1292 8.92895 18.1255 9.02021 17.7702L12.3558 4.78608C12.4114 4.56959 12.7199 4.57197 12.7721 4.78929L15.8983 17.7874C15.985 18.1478 16.4956 18.1543 16.5913 17.7962L19.1458 8.24593C19.1934 8.06803 19.3547 7.94429 19.5389 7.94429C19.8051 7.94429 19.9996 8.19564 19.9327 8.45321L16.4755 21.7572C16.4103 22.0083 16.0528 22.0063 15.9904 21.7544L12.7387 8.63439C12.6942 8.45479 12.4394 8.45294 12.3923 8.63188L8.92785 21.7905C8.86235 22.0393 8.50903 22.0391 8.44376 21.7903L4.94491 8.45428Z"
                                fill="#001a40"/>
                            <path
                                d="M2.78521 14.0159C2.78521 13.8186 2.94528 13.6586 3.14272 13.6586H21.9717C22.1691 13.6586 22.3292 13.8186 22.3292 14.0159C22.3292 14.2133 22.1691 14.3733 21.9717 14.3733H3.14272C2.94528 14.3733 2.78521 14.2133 2.78521 14.0159Z"
                                fill="#001a40"/>
                            <path
                                d="M0.640137 15.9218C0.640137 15.7244 0.8002 15.5644 0.997649 15.5644H24.1167C24.3142 15.5644 24.4743 15.7244 24.4743 15.9218C24.4743 16.1191 24.3142 16.2791 24.1167 16.2791H0.997648C0.8002 16.2791 0.640137 16.1191 0.640137 15.9218Z"
                                fill="#001a40"/>
                            <path
                                d="M31.1103 8.5109H32.0672L35.7353 19.7893L40.5398 7.79355L45.0453 19.7893L49.2119 8.5109H50.1688L45.0453 22.3001L40.5398 10.2246L35.5958 22.3001L31.1103 8.5109Z"
                                fill="#001a40"/>
                            <path
                                d="M59.1758 17.8365H52.2183C52.2183 18.8461 52.5306 19.6698 53.1552 20.3074C53.7932 20.9451 54.5574 21.2639 55.4478 21.2639C56.0858 21.2639 56.6506 21.0978 57.1424 20.7657C57.6341 20.4203 58.0129 19.9687 58.2787 19.4107L58.9565 19.8092C58.6508 20.3938 58.2056 20.9118 57.6208 21.3635C57.036 21.8019 56.2918 22.0211 55.388 22.0211C54.152 22.0211 53.1752 21.6226 52.4575 20.8255C51.7398 20.0152 51.381 18.9989 51.381 17.7767C51.381 16.435 51.7664 15.3856 52.5372 14.6283C53.3214 13.8711 54.2517 13.4925 55.3282 13.4925C56.4313 13.4925 57.3484 13.8977 58.0793 14.7081C58.8103 15.5184 59.1758 16.5612 59.1758 17.8365ZM52.2781 17.0793H58.3385C58.2322 16.2557 57.8999 15.5782 57.3417 15.0468C56.7968 14.5154 56.1256 14.2497 55.3282 14.2497C54.5175 14.2497 53.833 14.5221 53.2748 15.0667C52.7166 15.5981 52.3844 16.269 52.2781 17.0793Z"
                                fill="#001a40"/>
                            <path
                                d="M71.7432 21.8019L69.969 17.438H64.3072L62.5329 21.8019H61.576L67.178 8.11237L72.7001 21.8019H71.7432ZM64.6262 16.6409H69.65L67.158 10.3441L64.6262 16.6409Z"
                                fill="#001a40"/>
                            <path
                                d="M75.6095 21.8019V13.6719H76.4069V14.728C76.7658 13.9044 77.3639 13.4925 78.2011 13.4925C78.5201 13.4925 78.8059 13.559 79.0584 13.6918L78.6597 14.4092C78.5135 14.3029 78.3141 14.2497 78.0616 14.2497C77.6762 14.2497 77.3572 14.3627 77.1047 14.5885C76.8655 14.801 76.6993 15.1066 76.6063 15.5051C76.5266 15.8904 76.4734 16.2158 76.4468 16.4815C76.4202 16.7472 76.4069 17.066 76.4069 17.438V21.8019H75.6095Z"
                                fill="#001a40"/>
                            <path
                                d="M89.2608 17.8365H82.3032C82.3032 18.8461 82.6156 19.6698 83.2402 20.3074C83.8782 20.9451 84.6423 21.2639 85.5328 21.2639C86.1708 21.2639 86.7356 21.0978 87.2273 20.7657C87.7191 20.4203 88.0979 19.9687 88.3637 19.4107L89.0415 19.8092C88.7358 20.3938 88.2906 20.9118 87.7058 21.3635C87.121 21.8019 86.3768 22.0211 85.473 22.0211C84.237 22.0211 83.2601 21.6226 82.5425 20.8255C81.8248 20.0152 81.4659 18.9989 81.4659 17.7767C81.4659 16.435 81.8514 15.3856 82.6222 14.6283C83.4063 13.8711 84.3367 13.4925 85.4132 13.4925C86.5163 13.4925 87.4333 13.8977 88.1643 14.7081C88.8953 15.5184 89.2608 16.5612 89.2608 17.8365ZM82.363 17.0793H88.4235C88.3172 16.2557 87.9849 15.5782 87.4267 15.0468C86.8818 14.5154 86.2106 14.2497 85.4132 14.2497C84.6025 14.2497 83.918 14.5221 83.3598 15.0667C82.8016 15.5981 82.4694 16.269 82.363 17.0793Z"
                                fill="#001a40"/>
                            <path
                                d="M91.038 8.5109H91.9949L95.6631 19.7893L100.468 7.79355L104.973 19.7893L109.14 8.5109H110.097L104.973 22.3001L100.468 10.2246L95.5236 22.3001L91.038 8.5109Z"
                                fill="#001a40"/>
                            <path
                                d="M118.446 15.0867V13.6719H119.243V21.8019H118.446V20.3473C117.715 21.4631 116.658 22.0211 115.276 22.0211C114.173 22.0211 113.236 21.6292 112.465 20.8454C111.694 20.0616 111.309 19.0255 111.309 17.7369C111.309 16.4749 111.674 15.452 112.405 14.6682C113.136 13.8844 114.093 13.4925 115.276 13.4925C116.632 13.4925 117.688 14.0239 118.446 15.0867ZM115.316 14.2497C114.452 14.2497 113.708 14.5619 113.083 15.1863C112.458 15.7974 112.146 16.6276 112.146 17.6771C112.146 18.6469 112.432 19.4904 113.003 20.2078C113.575 20.9118 114.352 21.2639 115.336 21.2639C116.306 21.2639 117.07 20.9185 117.628 20.2277C118.2 19.5236 118.486 18.6734 118.486 17.6771C118.486 16.5745 118.16 15.731 117.509 15.1464C116.857 14.5486 116.127 14.2497 115.316 14.2497Z"
                                fill="#001a40"/>
                            <path
                                d="M123.98 26.385L125.894 21.9414L122.027 13.6719H122.944L126.353 20.9052L129.323 13.6719H130.24L124.897 26.385H123.98Z"
                                fill="#001a40"/>
                        </svg>
                    </Link>

                    <div className={styles.navigate}>
                        <Link href={''}>
                            <Button type={'text'} event={()=>console.log()} style={styles.button}>
                                Карта сайта
                            </Button>
                        </Link>
                        <Link href={''}>
                            <Button type={'text'} event={()=>console.log()} style={styles.button}>
                                Способы оплаты
                            </Button>
                        </Link>
                        <Link href={''}>
                            <Button type={'text'} event={()=>console.log()} style={styles.button}>
                                Контакты
                            </Button>
                        </Link>
                        <Link href={''}>
                            <Button type={'text'} event={()=>console.log()} style={styles.button}>
                                Социальные сети
                            </Button>
                        </Link>
                    </div>

                </div>
                <div className={styles.bottom}>
                    <div className={styles.created}>
                        <Typography type={'body'}>Проект запущен партнером сервиса WeAreWay</Typography>
                    </div>
                    <div className={styles.social}>

                        <Button event={()=>console.log()} type={'icon'} link={'https://www.youtube.com/@we_are_way'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="#002E68"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M19.792 5.80204C20.6521 6.0331 21.3325 6.71347 21.5635 7.57354C21.9872 9.13965 22 12.3874 22 12.3874C22 12.3874 22 15.648 21.5764 17.2013C21.3453 18.0613 20.665 18.7417 19.8049 18.9728C18.2516 19.3964 12 19.3964 12 19.3964C12 19.3964 5.74839 19.3964 4.19512 18.9728C3.33504 18.7417 2.65469 18.0613 2.42362 17.2013C2 15.6352 2 12.3874 2 12.3874C2 12.3874 2 9.13965 2.41078 7.58638C2.64185 6.7263 3.32221 6.04594 4.18229 5.81488C5.73556 5.39125 11.9872 5.37842 11.9872 5.37842C11.9872 5.37842 18.2388 5.37842 19.792 5.80204ZM15.1836 12.3874L9.99743 15.3913V9.38355L15.1836 12.3874Z"/>
                            </svg>
                        </Button>


                        <Button event={()=>console.log()} type={'icon'} link={'https://instagram.com/we_are_way'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="#002E68"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 3.38745C9.5556 3.38745 9.2496 3.39765 8.2896 3.44145C7.3314 3.48525 6.6768 3.63765 6.1044 3.86025C5.5044 4.08585 4.9602 4.43985 4.5102 4.89825C4.05253 5.34773 3.69831 5.89155 3.4722 6.49185C3.2508 7.06425 3.0978 7.71945 3.054 8.67765C3.0108 9.63705 3 9.94245 3 12.3875C3 14.8325 3.0102 15.1379 3.054 16.0979C3.0978 17.0561 3.2502 17.7107 3.4728 18.2831C3.6984 18.8831 4.0524 19.4273 4.5108 19.8773C4.96029 20.3349 5.50411 20.6891 6.1044 20.9153C6.6768 21.1373 7.3314 21.2897 8.2896 21.3335C9.2496 21.3773 9.5556 21.3875 12 21.3875C14.4444 21.3875 14.7504 21.3773 15.7104 21.3335C16.6686 21.2897 17.3232 21.1373 17.8956 20.9147C18.4956 20.6891 19.0398 20.3351 19.4898 19.8767C19.9475 19.4272 20.3017 18.8834 20.5278 18.2831C20.7498 17.7107 20.9022 17.0561 20.946 16.0979C20.9898 15.1379 21 14.8319 21 12.3875C21 9.94305 20.9898 9.63705 20.946 8.67705C20.9022 7.71885 20.7498 7.06425 20.5272 6.49185C20.3012 5.89129 19.947 5.34724 19.4892 4.89765C19.0397 4.43998 18.4959 4.08577 17.8956 3.85965C17.3232 3.63825 16.668 3.48525 15.7098 3.44145C14.7504 3.39825 14.445 3.38745 12 3.38745ZM12 5.00925C14.403 5.00925 14.688 5.01825 15.6372 5.06145C16.5144 5.10165 16.9908 5.24745 17.3082 5.37165C17.7282 5.53425 18.0282 5.72985 18.3432 6.04425C18.6582 6.35925 18.8532 6.65925 19.0158 7.07925C19.1394 7.39665 19.2858 7.87305 19.326 8.75025C19.3692 9.69945 19.3782 9.98445 19.3782 12.3875C19.3782 14.7905 19.3692 15.0755 19.326 16.0247C19.2858 16.9019 19.14 17.3783 19.0158 17.6957C18.8718 18.0866 18.6419 18.4402 18.3432 18.7307C18.0528 19.0294 17.6992 19.2593 17.3082 19.4033C16.9908 19.5269 16.5144 19.6733 15.6372 19.7135C14.688 19.7567 14.4036 19.7657 12 19.7657C9.5964 19.7657 9.312 19.7567 8.3628 19.7135C7.4856 19.6733 7.0092 19.5275 6.6918 19.4033C6.30087 19.2592 5.9472 19.0294 5.6568 18.7307C5.35811 18.4402 5.12828 18.0866 4.9842 17.6957C4.8606 17.3783 4.7142 16.9019 4.674 16.0247C4.6308 15.0755 4.6218 14.7905 4.6218 12.3875C4.6218 9.98445 4.6308 9.69945 4.674 8.75025C4.7142 7.87305 4.86 7.39665 4.9842 7.07925C5.1468 6.65925 5.3424 6.35925 5.6568 6.04425C5.94716 5.74548 6.30085 5.51564 6.6918 5.37165C7.0092 5.24805 7.4856 5.10165 8.3628 5.06145C9.312 5.01825 9.597 5.00925 12 5.00925Z"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 15.3905C11.6057 15.3905 11.2152 15.3128 10.8508 15.1619C10.4865 15.011 10.1554 14.7898 9.87658 14.5109C9.59773 14.2321 9.37653 13.901 9.22561 13.5367C9.0747 13.1723 8.99702 12.7818 8.99702 12.3875C8.99702 11.9931 9.0747 11.6026 9.22561 11.2383C9.37653 10.8739 9.59773 10.5429 9.87658 10.264C10.1554 9.98519 10.4865 9.76399 10.8508 9.61307C11.2152 9.46216 11.6057 9.38448 12 9.38448C12.7965 9.38448 13.5603 9.70087 14.1235 10.264C14.6866 10.8272 15.003 11.591 15.003 12.3875C15.003 13.1839 14.6866 13.9478 14.1235 14.5109C13.5603 15.0741 12.7965 15.3905 12 15.3905ZM12 7.76148C10.7731 7.76148 9.59649 8.24886 8.72895 9.11641C7.8614 9.98395 7.37402 11.1606 7.37402 12.3875C7.37402 13.6144 7.8614 14.791 8.72895 15.6586C9.59649 16.5261 10.7731 17.0135 12 17.0135C13.2269 17.0135 14.4036 16.5261 15.2711 15.6586C16.1386 14.791 16.626 13.6144 16.626 12.3875C16.626 11.1606 16.1386 9.98395 15.2711 9.11641C14.4036 8.24886 13.2269 7.76148 12 7.76148ZM17.9718 7.67748C17.9718 7.9675 17.8566 8.24563 17.6515 8.45071C17.4465 8.65578 17.1683 8.77098 16.8783 8.77098C16.5883 8.77098 16.3102 8.65578 16.1051 8.45071C15.9 8.24563 15.7848 7.9675 15.7848 7.67748C15.7848 7.38747 15.9 7.10933 16.1051 6.90426C16.3102 6.69919 16.5883 6.58398 16.8783 6.58398C17.1683 6.58398 17.4465 6.69919 17.6515 6.90426C17.8566 7.10933 17.9718 7.38747 17.9718 7.67748Z"/>
                            </svg>
                        </Button>


                        <Button event={()=>console.log()} type={'icon'} link={'https://t.me/we_are_way'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="#002E68"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M22 12.3875C22 17.9103 17.5228 22.3875 12 22.3875C6.47715 22.3875 2 17.9103 2 12.3875C2 6.8646 6.47715 2.38745 12 2.38745C17.5228 2.38745 22 6.8646 22 12.3875ZM12.3583 9.7699C11.3857 10.1745 9.44176 11.0118 6.52656 12.2819C6.05318 12.4701 5.8052 12.6543 5.78262 12.8344C5.74447 13.1387 6.12558 13.2586 6.64454 13.4217C6.71513 13.4439 6.78828 13.4669 6.86326 13.4913C7.37385 13.6573 8.06067 13.8514 8.41772 13.8592C8.7416 13.8662 9.10309 13.7326 9.50218 13.4586C12.2259 11.62 13.632 10.6906 13.7202 10.6706C13.7825 10.6565 13.8688 10.6387 13.9273 10.6907C13.9858 10.7426 13.98 10.8411 13.9738 10.8675C13.9361 11.0284 12.4401 12.4192 11.6659 13.1389C11.4246 13.3633 11.2534 13.5225 11.2184 13.5588C11.14 13.6403 11.0601 13.7173 10.9833 13.7913C10.509 14.2486 10.1532 14.5915 11.003 15.1515C11.4113 15.4206 11.7381 15.6431 12.0641 15.8651C12.4201 16.1075 12.7752 16.3494 13.2347 16.6505C13.3517 16.7273 13.4635 16.807 13.5724 16.8846C13.9867 17.1799 14.3589 17.4453 14.8188 17.403C15.086 17.3784 15.362 17.1271 15.5022 16.3778C15.8335 14.6068 16.4847 10.7695 16.6352 9.18827C16.6483 9.04974 16.6318 8.87244 16.6184 8.79461C16.6051 8.71678 16.5773 8.60588 16.4761 8.52379C16.3563 8.42657 16.1713 8.40607 16.0886 8.40753C15.7125 8.41416 15.1354 8.61481 12.3583 9.7699Z"/>
                            </svg>
                        </Button>


                        <Button event={()=>console.log()} type={'icon'} link={'https://www.facebook.com/weareway2022'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="#002E68"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 12.4481C22 6.89145 17.5233 2.38745 12 2.38745C6.47667 2.38745 2 6.89145 2 12.4481C2 17.4708 5.656 21.6328 10.4373 22.3875V15.3568H7.89867V12.4475H10.4373V10.2315C10.4373 7.71012 11.93 6.31678 14.2147 6.31678C15.308 6.31678 16.4533 6.51345 16.4533 6.51345V8.98945H15.1913C13.9493 8.98945 13.5627 9.76545 13.5627 10.5615V12.4481H16.336L15.8927 15.3561H13.5627V22.3875C18.344 21.6328 22 17.4708 22 12.4481Z"/>
                            </svg>
                        </Button>


                        <Button event={()=>console.log()} type={'icon'} link={'https://twitter.com/weareway'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="#002E68"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.9525 8.43317C19.9647 8.60948 19.9647 8.7858 19.9647 8.96374C19.9647 14.3856 15.8371 20.6387 8.28966 20.6387V20.6355C6.06013 20.6387 3.8769 20.0001 2 18.796C2.32419 18.835 2.65001 18.8545 2.97664 18.8553C4.82429 18.8569 6.61913 18.2369 8.07272 17.0954C6.31688 17.062 4.77717 15.9172 4.23928 14.2459C4.85436 14.3645 5.48812 14.3401 6.09181 14.1752C4.17753 13.7884 2.80033 12.1065 2.80033 10.1533C2.80033 10.1354 2.80033 10.1183 2.80033 10.1013C3.37071 10.4189 4.00934 10.5953 4.6626 10.6148C2.85964 9.4098 2.30388 7.01127 3.39265 5.13599C5.47593 7.69947 8.54966 9.25787 11.8493 9.42281C11.5186 7.99766 11.9703 6.50426 13.0364 5.50243C14.689 3.94891 17.2882 4.02853 18.8418 5.68037C19.7607 5.49918 20.6415 5.16199 21.4475 4.68423C21.1412 5.63406 20.5001 6.44088 19.6437 6.95358C20.457 6.8577 21.2517 6.63995 22 6.30763C21.4491 7.13314 20.7552 7.85222 19.9525 8.43317Z"/>
                            </svg>
                        </Button>

                    </div>
                </div>
            </Container>
        </footer>
    );
};