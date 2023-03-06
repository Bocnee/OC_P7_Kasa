import starColored from '../../assets/starColored.svg';
import starNeutral from '../../assets/starNeutral.svg';

import styles from '../../styles/components/rating.module.scss';

function Rating({ rate }) {
   const redStars = Array(5).fill(
      <img src={starColored} alt="étoile(s) rouge(s) qui indique la note" />
   );
   const fullStars = redStars.slice(5 - rate);

   const greyStars = Array(5).fill(
      <img src={starNeutral} alt="étoile(s) grise(s)" />
   );
   const emptyStars = greyStars.slice(rate);

   return (
      <div className={styles.star}>
         {fullStars.map((star) => (
            <span className={styles.star__one} key={Math.random()}>
               {star}
            </span>
         ))}
         {emptyStars.map((star) => (
            <span className={styles.star__one} key={Math.random()}>
               {star}
            </span>
         ))}
      </div>
   );
}

export default Rating;
