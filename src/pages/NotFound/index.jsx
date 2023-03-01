import pages from '../../styles/utils/parts/pagesWrap.module.scss';
import { Link } from 'react-router-dom';
import styles from '../../styles/pages/notFound.module.scss';

function NotFound() {
   return (
      <div className={`${pages.wrap} ${styles.wrap}`}>
         <div className={styles.error}>
            <h2 className={styles.error__title}>404</h2>
            <p className={styles.error__paragraph}>
               Oups ! La page que <br className={styles.break} />
               vous demandez n'existe pas.
            </p>
         </div>
         <div>
            <Link className={styles.link} to="/">
               Retouner sur la page d'accueil
            </Link>
         </div>
      </div>
   );
}

export default NotFound;
