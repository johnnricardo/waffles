import styles from './main.module.css'
import Head from '../head/head';

function main() {
  return (
    <div>
      <header>
        <div>
          <Head title="Waffles Site"/>
        </div>
      </header>
      <body>
        <div>
          <img className={styles.wafflesimg} src="/img/logowaffles.png"/>
            <a className={styles.procurando}>Procurando Manutenção?</a>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5528999067634" target="_blank">
                <div className={styles.wppbutton}>
                  <text className={styles.callwpp}> Me chame no WhatsApp! </text>
                </div>
              </a>
            </div> 
          <text className={styles.aviso}>Se não entregarmos em 48h você paga somente a metade do preço.</text>
        </div>
      </body>
    </div>
  )
}
export default main