import styles from '../main/main.module.css'
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
                  <p className={styles.callwpp}> Me chame no WhatsApp! </p>
                </div>
              </a>
            </div> 
          <p className={styles.aviso}>Se não entregarmos em 48h você paga somente a metade do preço.</p>
          <div>
            <img className={styles.barrabaixo} src="/img/barrabaixo.png"/>
          </div>
        </div>
      </body>
    </div>
  )
}
export default main