import pages from '../../styles/utils/parts/pagesWrap.module.scss';
import styleBanner from '../../styles/utils/parts/banners.module.scss';
import styles from '../../styles/pages/about.module.scss';

import Collapse from '../../components/Collapse';
import { ToggleInfo } from '../../datas/aboutList';

import aboutImg from '../../assets/aboutImg.png';

function About() {
   return (
      <div className={pages.wrap}>
         <div className={styleBanner.banner}>
            <img
               src={aboutImg}
               alt="fond avec des montagnes"
               className={styleBanner.banner__img}
            />
         </div>
         <div className={styles.toggleWrap}>
            {ToggleInfo.map((info) => (
               <Collapse
                  title={info.title}
                  description={info.description}
                  key={info.id}
               />
            ))}
         </div>
      </div>
   );
}

export default About;
