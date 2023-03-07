import { useState } from 'react';
import styles from '../../styles/components/collapse.module.scss';
import chevron from '../../assets/arrow.svg';

function Collapse({ title, description }) {
   const [toggle, setToggle] = useState(false);
   const handleToggle = () => {
      setToggle(!toggle);
   };
   return (
      <div>
         <div className={styles.toggle} onClick={handleToggle}>
            <h2 className={styles.toggle__title}>{title}</h2>
            <div
               className={
                  toggle
                     ? `${styles.toggle__chevron} ${styles.toggle__chevron__active}`
                     : styles.toggle__chevron
               }>
               <img src={chevron} alt="flèche" />
            </div>
         </div>
         <div
            className={
               toggle
                  ? `${styles.description} ${styles.description__active}`
                  : styles.description
            }>
            {toggle && (
               <li className={styles.description__list}>{description}</li>
            )}
         </div>
      </div>
   );
}

export default Collapse;
