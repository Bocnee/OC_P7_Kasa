import { useParams } from 'react-router-dom';
import { logementsList } from '../../datas/logementsList';

import pages from '../../styles/utils/parts/pagesWrap.module.scss';
import styles from '../../styles/pages/logement.module.scss';

import Gallery from '../../components/Gallery';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import ToggleBar from '../../components/ToggleBar';
import NotFound from '../NotFound';

function Logement() {
   const { id } = useParams();
   const logement = logementsList.find((log) => log.id === id);

   if (!logement) {
      return <NotFound />;
   }

   return (
      <div className={pages.wrap}>
         <Gallery
            pictures={logement.pictures}
            title={logement.title}
            key={Math.random()}
         />
         <div className={styles.wrap}>
            <div className={styles.descriptionWrap}>
               <h2 className={styles.title}>{logement.title}</h2>
               <p className={styles.location}>{logement.location}</p>
               <Tag index={logement.tags} tag={logement.tags} />
            </div>
            <div className={styles.hostWrap}>
               <div className={styles.host}>
                  <p className={styles.host__name}>{logement.host.name}</p>
                  <img
                     className={styles.host__picture}
                     src={logement.host.picture}
                     alt={logement.host.name}
                  />
               </div>
               <Rating rate={logement.rating} />
            </div>
         </div>
         <ToggleBar
            description={logement.description}
            equipement={logement.equipments}
         />
      </div>
   );
}

export default Logement;
