import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../../styles/components/card.module.scss';

import defaultPic from '../../assets/defaultPic.png';

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

// proptypes par défaut
Card.propTypes = {
   title: propTypes.string.isRequired,
   cover: propTypes.string.isRequired,
};

Card.defaultProps = {
   title: 'Titre de la location',
   cover: defaultPic,
};

export default Card;
