import React, { useState } from 'react'
// import { useDevice } from 'vtex.device-detector'
import styles from './FooterMobile.css';
import facebook from './icons/facebook-app-symbol.png';
import instagram from './icons/instagram.png';

type FooterLink = {
    text: 'string', url: 'string'
}
const FooterMobile: StorefrontFunctionComponent = () => {
    const { shopLinks, aboutLinks, helpLinks } = FooterMobile.schema.properties;
    const [activeMenu, setActiveMenu] = useState('')

    const handleMenu = (text: string) => {
        text == activeMenu ?
            setActiveMenu('') : setActiveMenu(text);
    };
    return (
        <footer>
            <div className={`${styles.mfooter__box}`}>

                {activeMenu == 'Shop' ?
                    <>
                        <div className={`${styles.mfooter__column}`}>
                            <button type="button" className={`${styles.mcollapsible}`} onClick={() => handleMenu('Shop')}>Shop <span className={`${styles.mfooter__menu__icon}`} >-</span></button>
                        </div>
                        <div className={`${styles.mfooter__link}`}>
                            {shopLinks?.default.map((link: FooterLink) => {
                                return <a className={`${styles.mfooter__links}`} href={link.url}>{link.text}</a>
                            })}

                        </div></> : <div className={`${styles.mfooter__column}`}>
                        <button type="button" className={`${styles.mcollapsible}`} onClick={() => handleMenu('Shop')}>Shop <span className={`${styles.mfooter__menu__icon}`} >+</span></button>
                    </div>}

                {activeMenu == 'About' ?
                    <>
                        <div className={`${styles.mfooter__column}`}>
                            <button type="button" className={`${styles.mcollapsible}`} onClick={() => handleMenu('About')}>About <span className={`${styles.mfooter__menu__icon}`} >-</span></button>
                        </div>
                        <div className={`${styles.mfooter__link}`}>
                            {aboutLinks?.default.map((link: FooterLink) => {
                                return <a className={`${styles.mfooter__links}`} href={link.url}>{link.text}</a>
                            })}

                        </div></> : <div className={`${styles.mfooter__column}`}>
                        <button type="button" className={`${styles.mcollapsible}`} onClick={() => handleMenu('About')}>About <span className={`${styles.mfooter__menu__icon}`} >+</span></button>
                    </div>}

                {activeMenu == 'Help' ?
                    <>
                        <div className={`${styles.mfooter__column}`}>
                            <button type="button" className={`${styles.mcollapsible}`} onClick={() => handleMenu('Help')}>Help <span className={`${styles.mfooter__menu__icon}`} >-</span></button>
                        </div>
                        <div className={`${styles.mfooter__link}`}>
                            {helpLinks?.default.map((link: FooterLink) => {
                                return <a className={`${styles.mfooter__links}`} href={link.url}>{link.text}</a>
                            })}

                        </div></> : <div className={`${styles.mfooter__column}`}>
                        <button type="button" className={`${styles.mcollapsible}`} onClick={() => handleMenu('Help')}>Help <span className={`${styles.mfooter__menu__icon}`} >+</span></button>
                    </div>}

                <div className={`${styles.bottom__mfooter}`}>
                    <div className={`${styles.mfooter__column}`}>
                        <h2>Sign up to receive the Project Atelope newsletter</h2>
                        <div className={`${styles.input__email}`} >
                            <input placeholder='Enter your email address' type='text' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </div>
                    <div className={`${styles.mfooter__columnR}`}>
                        <h2>Connect with us</h2>
                        <div className={`${styles.mfooter__icons__box}`}>
                            <a href='#'>
                                <img className={`${styles.mfooter__icon}`} src={instagram} />
                            </a>
                            <a href='#'>
                                <img className={`${styles.mfooter__icon}`} src={facebook} />
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

FooterMobile.schema = {
    title: 'FooterMobile',
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


export default FooterMobile