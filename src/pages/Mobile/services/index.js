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
      <text className={styles.conhecaServico}>Conheça nossos serviços</text>
      <div>
      <img className={styles.serviceimg} src='/img/servicosmobile.png'/>
      </div>
    </body>
  </div>
  )
}

export default service;