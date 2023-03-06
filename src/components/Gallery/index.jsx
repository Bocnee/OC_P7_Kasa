import { useState, useEffect, useRef } from 'react';
import chevronRight from '../../assets/chevronGalleryR.svg';
import chevronLeft from '../../assets/chevronGalleryL.svg';
import styles from '../../styles/components/gallery.module.scss';

function Gallery({ pictures, title }) {
   const [current, setCurrent] = useState(0);
   const timer = useRef(null);
   const auto = useState(true);
   const length = pictures.length;

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
   };

   const previousSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
   };

   useEffect(() => {
      if (length > 1) {
         if (timer.current) {
            clearTimeout(timer.current);
         }
         timer.current = setTimeout(() => {
            if (auto) {
               setCurrent((t) => (t === length - 1 ? 0 : t + 1));
            }
         }, 3000);
         return () => clearTimeout(timer.current);
      }
   }, [auto, length]);

   return (
      <div className={styles.galleryWrap}>
         {length > 1 ? (
            <img
               className={`${styles.galleryWrap__chevron} ${styles.galleryWrap__chevron__l}`}
               src={chevronLeft}
               alt="chevron gauche"
               onClick={previousSlide}
            />
         ) : null}
         {length > 1 ? (
            <img
               className={`${styles.galleryWrap__chevron} ${styles.galleryWrap__chevron__r}`}
               src={chevronRight}
               alt="chevron droite"
               onClick={nextSlide}
            />
         ) : null}
         {pictures.map((pic, index) => (
            <div
               key={Math.random()}
               className={
                  index === current
                     ? `${styles.imgWrap} ${styles.imgWrap__current}`
                     : styles.imgWrap
               }>
               {index === current && (
                  <img
                     draggable="false"
                     className={
                        index === current
                           ? `${styles.img} ${styles.img__current}`
                           : styles.imgWrap
                     }
                     src={pic}
                     alt={title}
                  />
               )}
            </div>
         ))}
         {length > 1 ? (
            <p className={styles.text}>
               {current + 1}/{length}
            </p>
         ) : null}
      </div>
   );
}

export default Gallery;
