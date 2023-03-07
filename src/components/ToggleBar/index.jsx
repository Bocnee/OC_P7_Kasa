import { useState } from 'react';
import styles from '../../styles/components/collapse.module.scss';
import chevron from '../../assets/arrow.svg';

function ToggleBar({ description, equipement }) {
   const [toggleDesc, setToggleDesc] = useState(0);
   const handleToggle = () => {
      setToggleDesc(!toggleDesc);
   };
   const [toggleEqu, setToggleEqu] = useState(0);
   const handleToggleEqu = () => {
      setToggleEqu(!toggleEqu);
   };
   return (
      <div className={styles.toggleWrap}>
         <div>
            <div className={styles.toggle} onClick={handleToggle}>
               <div className={styles.toggle__name}>Description</div>
               <div
                  className={
                     toggleDesc
                        ? `${styles.toggle__chevron} ${styles.toggle__chevron__active}`
                        : styles.toggle__chevron
                  }>
                  <img src={chevron} alt="flèche" />
               </div>
            </div>
            <div
               className={
                  toggleDesc
                     ? `${styles.description} ${styles.description__active}`
                     : styles.description
               }>
               {toggleDesc && (
                  <li className={styles.description__txt}>{description}</li>
               )}
            </div>
         </div>
         <div>
            <div className={styles.toggle} onClick={handleToggleEqu}>
               {equipement.length > 1 ? (
                  <p className={styles.toggle__name}>Équipements</p>
               ) : (
                  <p className={styles.toggle__name}>Équipement</p>
               )}
               <div
                  className={
                     toggleEqu
                        ? `${styles.toggle__chevron} ${styles.toggle__chevron__active}`
                        : styles.toggle__chevron
                  }>
                  <img src={chevron} alt="flèche" />
               </div>
            </div>
            <div
               className={
                  toggleEqu
                     ? `${styles.description} ${styles.description__active}`
                     : styles.description
               }>
               {toggleEqu && (
                  <ul>
                     {equipement.map((list) => (
                        <li
                           key={Math.random()}
                           className={styles.description__txt}>
                           {list}
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      </div>
   );
}

export default ToggleBar;
