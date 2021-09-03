import styles from './services.module.css';
import Headservice from '../head/headservices';

function service(){
  return(
  <div>
    <header>
        <div>
          <Headservice title="Waffles Site"/>
        </div>
    </header>
    <body>
      <div>
        <img className={styles.serviceimg} src="/img/servicos.png"/>
      </div>
      <div>
        <img className={styles.barrabaixo} src="/img/barrabaixo.png"/>
      </div>
      <div className={styles.serviceaviso}>
        <div>*Taxa de transporte R$5,00</div>
        <div>*Não trabalhamos com produtos Apple</div>
        <div>*Para outras manutenções, consulte o orçamento via WhastApp</div>
      </div>
    </body>
  </div>
  )
}

export default service;