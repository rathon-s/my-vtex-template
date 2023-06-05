import * as React from 'react'
// import { useDevice } from 'vtex.device-detector'
import styles from './Footer.css';
import facebook from './icons/facebook-app-symbol.png';
import instagram from './icons/instagram.png';
export default function Footer({ shopLinks, aboutLinks, helpLinks }: any) {

    return (
        <footer>
            <div className={`${styles.footer__box}`}>
                <div className={`${styles.footer__container}`}>
                    <div className={`${styles.footer__column}`}>
                        <h2>Shop</h2>
                        {shopLinks?.map((link: { url: string; text: string }) => {
                            return (
                                <a className={`${styles.footer__links}`} href={link.url} key={link.text}>
                                    {link.text}
                                </a>
                            )
                        }
                        )}

                    </div>
                    <div className={`${styles.footer__column}`}>
                        <h2>About</h2>
                        {aboutLinks?.map((link: { url: string; text: string }) => {
                            return (
                                <a className={`${styles.footer__links}`} href={link.url} key={link.text}>
                                    {link.text}
                                </a>
                            )
                        }
                        )}
                    </div>
                    <div className={`${styles.footer__column}`}>
                        <h2>Help</h2>
                        {helpLinks?.map((link: { url: string; text: string }) => {
                            return (
                                <a className={`${styles.footer__links}`} href={link.url} key={link.text}>
                                    {link.text}
                                </a>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className={`${styles.bottom__footer}`}>
                    <div className={`${styles.footer__column}`}>
                        <h2>Sign up to receive the Project Atelope newsletter</h2>
                        <div className={`${styles.input__email}`} >
                            <input placeholder='Enter your email address' type='text' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </div>
                    <div className={`${styles.footer__columnR}`}>
                        <h2>Connect with us</h2>
                        <div className={`${styles.footer__icons__box}`}>
                            <a href='#'>
                                <img className={`${styles.footer__icon}`} src={instagram} />
                            </a>
                            <a href='#'>
                                <img className={`${styles.footer__icon}`} src={facebook} />
                            </a>
                        </div>
                        <div className={`${styles.privacy}`}>
                            <a className={`${styles.legal__links}`}>
                                Terms of Use
                            </a>
                            <a className={`${styles.legal__links}`}>
                                Privacy Policy
                            </a>
                            <a className={`${styles.legal__links}`}>
                                All rights reserved
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.schema = {
    title: 'Footer',
    type: 'object',
    properties: {
        shopLinks: {
            title: 'Shop',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    text: {
                        title: 'Link Text',
                        type: 'string'
                    },
                    url: {
                        title: 'Link URL',
                        type: 'string'
                    }
                }
            },
            default: [
                {
                    text: 'Our Artists',
                    url: '#'
                },
                {
                    text: 'Jewelry',
                    url: '#'
                },
                {
                    text: 'Fashion',
                    url: '#'
                },
                {
                    text: 'Music',
                    url: '#'
                },
                {
                    text: 'Literature',
                    url: '#'
                },
                {
                    text: 'For Your Home',
                    url: '#'
                }
            ]
        },
        aboutLinks: {
            title: 'About',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    text: {
                        title: 'Link Text',
                        type: 'string'
                    },
                    url: {
                        title: 'Link URL',
                        type: 'string'
                    }
                }
            },
            default: [
                {
                    text: 'Our Story',
                    url: '#'
                },
                {
                    text: 'Press',
                    url: '#'
                },
                {
                    text: 'Contact Us',
                    url: '#'
                }
            ]
        },
        helpLinks: {
            title: 'Help',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    text: {
                        title: 'Link Text',
                        type: 'string'
                    },
                    url: {
                        title: 'Link URL',
                        type: 'string'
                    }
                }
            },
            default: [
                {
                    text: 'FAQ',
                    url: '#'
                },
                {
                    text: 'Returns & Exchanges',
                    url: '#'
                },
                {
                    text: 'Shipping & Delivery',
                    url: '#'
                }
            ]
        }
    }
}
