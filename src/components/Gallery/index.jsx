import { useState, useEffect, useRef } from 'react';

import chevronRight from '../../assets/chevronGalleryR.svg';
import chevronLeft from '../../assets/chevronGalleryL.svg';

import styles from '../../styles/components/gallery.module.scss';

const delay = 4000;

function Gallery({ pictures, title }) {
   const [index, setIndex] = useState(0);
   const timer = useRef(null);
   const length = pictures.length;

   function resetTimeout() {
      if (timer.current) {
         clearTimeout(timer.current);
      }
   }

   useEffect(() => {
      resetTimeout();
      timer.current = setTimeout(
         () =>
            setIndex((prevIndex) =>
               prevIndex === length - 1 ? 0 : prevIndex + 1
            ),
         delay
      );
      return () => {
         resetTimeout();
      };
   }, [index, length]);

   const nextSlide = () => {
      setIndex(index === length - 1 ? 0 : index + 1);
   };

   const previousSlide = () => {
      setIndex(index === 0 ? length - 1 : index - 1);
   };

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
         {length > 1 ? (
            <div className={styles.dotsWrap}>
               {pictures.map((_, i) => (
                  <div
                     key={i}
                     className={
                        i === index
                           ? `${styles.dotsWrap__dot} ${styles.dotsWrap__dot__active}`
                           : styles.dotsWrap__dot
                     }
                     onClick={() => setIndex(i)}></div>
               ))}
            </div>
         ) : null}
         <div
            className={styles.imgWrap}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {pictures.map((pic, index) => (
               <img
                  draggable="false"
                  className={styles.img}
                  src={pic}
                  alt={title}
                  key={index}
               />
            ))}
         </div>
         {length > 1 ? (
            <p className={styles.text}>
               {index + 1}/{length}
            </p>
         ) : null}
      </div>
   );
}

export default Gallery;
