import styles from '../../styles/components/tag.module.scss';

function Tag({ tag }) {
   return (
      <div className={styles.tagsWrap}>
         {tag.map((t) => (
            <div className={styles.tag} key={Math.random()}>
               {t}
            </div>
         ))}
      </div>
   );
}

export default Tag;
