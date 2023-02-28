import pages from '../../styles/utils/parts/pagesWrap.module.scss';

function NotFound() {
   return (
      <div className={pages.wrap}>
         <h1>Erreur 404.</h1>
      </div>
   );
}

export default NotFound;
