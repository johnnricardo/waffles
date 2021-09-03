import PropTypes from 'prop-types';
import NextHead from 'next/head';
import styles from './headservices.module.css';
import Link from 'next/link';

function Headservice({title}) { 
  return(
    <div>
      <header>
        <NextHead>
         <title>{title}</title>
        </NextHead>
        <div> 
          <Link href="/"> 
            <a className={styles.backlink}>Voltar</a>
          </Link>
        </div>
        <div>
          <a className={styles.wpplink} href="https://api.whatsapp.com/send?phone=5528999067634" target="_blank">WhatsApp</a>
        </div>
        <div>
          <a className={styles.iglink} href="https://www.instagram.com/wafflesnet/" target="_blank">Instagram</a>
        </div>
        <div> 
          <a className={styles.fblink}href="https://www.facebook.com/wafflesnetci" target="_blank">Facebook</a>
        </div>
      </header>
    </div>
      )
  }
  Headservice.propsTypes = {
      title: PropTypes.string.isRequired,
  }
  export default Headservice;
 