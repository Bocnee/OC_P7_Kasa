import propTypes from 'prop-types';
import defaultPic from '../../assets/defaultPic.png';
import styles from '../../styles/components/card.module.scss';
import { Link } from 'react-router-dom';

function Card({ title, cover, id }) {
   return (
      <Link className={styles.card} to={`/logement/${id}`}>
         <img
            src={cover}
            alt={title}
            className={styles.img}
            draggable="false"
         />
         <h3 className={styles.title}>{title}</h3>
      </Link>
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
