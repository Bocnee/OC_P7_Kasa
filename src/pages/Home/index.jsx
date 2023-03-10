import pages from '../../styles/utils/parts/pagesWrap.module.scss';
import styles from '../../styles/pages/home.module.scss';

import { logementsList } from '../../datas/logementsList';

import Card from '../../components/Card';

import homeImg from '../../assets/accueilImg.png';

function Home() {
   return (
      <div className={pages.wrap}>
         <div className={styles.banner}>
            <img
               src={homeImg}
               alt="fond avec des montagnes"
               className={styles.banner__img}
               draggable="false"
            />
            <h2 className={styles.banner__title}>
               Chez vous, <br className={styles.breakMobile} />
               partout et ailleurs
            </h2>
         </div>
         <div className={styles.cardWrap}>
            {logementsList.map((log) => (
               <Card
                  key={log.id}
                  title={log.title}
                  cover={log.cover}
                  id={log.id}
               />
            ))}
         </div>
      </div>
   );
}

export default Home;
