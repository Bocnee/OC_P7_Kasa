import starColored from '../../assets/starColored.svg';
import starNeutral from '../../assets/starNeutral.svg';

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
      <div>
         {fullStars.map((star) => (
            <span key={Math.random()}>{star}</span>
         ))}
         {emptyStars.map((star) => (
            <span key={Math.random()}>{star}</span>
         ))}
      </div>
   );
}

export default Rating;
