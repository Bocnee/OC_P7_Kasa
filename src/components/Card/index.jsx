import propTypes from 'prop-types';
import defaultPic from '../../assets/defaultPic.png';
import styles from '../../styles/components/card.module.scss';

function Card({ title, cover }) {
   return (
      <article className={styles.card}>
         <img src={cover} alt={title} className={styles.img} />
         <h3 className={styles.title}>{title}</h3>
      </article>
   );
}

Card.propTypes = {
   title: propTypes.string.isRequired,
   cover: propTypes.string.isRequired,
};

Card.defaultProps = {
   title: 'Titre de la location',
   cover: defaultPic,
};

export default Card;
