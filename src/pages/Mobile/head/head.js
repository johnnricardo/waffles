import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import styles from './head.module.css';
import Link from 'next/link';

function Head({title}) { 
    return(
        <div>
            <NextHead>
                <title>{title}</title>
            </NextHead>
            <div>
                <div> 
                    <a className={styles.iglink} href="https://www.instagram.com/wafflesnet/" target="_blank">Instagram</a>
                </div>
                <div>
                    <Link href="/Mobile/services">
                        <a className={styles.servicelink}>Serviços</a>
                    </Link>
                </div>
                <div> 
                    <a className={styles.fblink}href="https://www.facebook.com/wafflesnetci" target="_blank">Facebook</a>
                </div>
            </div>
        </div>
    )
}
Head.propsTypes = {
    title: PropTypes.string.isRequired,
}
export default Head;