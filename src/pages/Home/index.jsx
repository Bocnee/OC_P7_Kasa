import pages from '../../styles/utils/parts/pagesWrap.module.scss';
import styles from '../../styles/pages/home.module.scss';
import styleBanner from '../../styles/utils/parts/banners.module.scss';

import { logementsList } from '../../datas/logementsList';
import Card from '../../components/Card';

import homeImg from '../../assets/accueilImg.png';

function Home() {
   return (
      <div className={pages.wrap}>
         <div className={`${styleBanner.banner} ${styles.banner}`}>
            <img
               src={homeImg}
               alt="fond avec des montagnes"
               className={styleBanner.banner__img}
            />
            <h2 className={styles.banner__title}>
               Chez vous, <br className={styles.breakMobile} />
               partout et ailleurs
            </h2>
         </div>
         <div className={styles.cardWrap}>
            {logementsList.map((log) => (
               <Card key={log.id} title={log.title} cover={log.cover} />
            ))}
         </div>
      </div>
   );
}

export default Home;
