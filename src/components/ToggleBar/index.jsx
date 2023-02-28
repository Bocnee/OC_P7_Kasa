import { useState } from 'react';
import styles from '../../styles/components/toggleBar.module.scss';
import chevron from '../../assets/arrow.svg';

function ToggleBar({ title, description }) {
   const [toggle, setToggle] = useState(false);
   const handleToggle = () => {
      setToggle(!toggle);
   };
   return (
      <div>
         <div className={styles.toggle} onClick={handleToggle}>
            <h3 className={styles.toggle__title}>{title}</h3>
            <div
               aria-expanded={!toggle}
               className={
                  toggle
                     ? `${styles.toggle__chevron}`
                     : `${styles.toggle__chevron}`
               }>
               <img src={chevron} alt="flèche" />
            </div>
         </div>
         <div className={styles.description} aria-expanded={toggle}>
            {toggle && (
               <li className={styles.description__list}>{description}</li>
            )}
         </div>
      </div>
   );
}

export default ToggleBar;
