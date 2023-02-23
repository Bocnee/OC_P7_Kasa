import logo from '../../assets/logoWhite.svg';
import footerClasses from '../../styles/components/footer.module.scss';

function Footer() {
   return (
      <footer className={footerClasses.footerWrap}>
         <div className={footerClasses.footerFlex}>
            <img
               draggable="false"
               src={logo}
               alt="Logo de Kasa, avec le deuxième A en forme de maison"
               className={footerClasses.footerFlex__img}
            />
            <p className={footerClasses.footerFlex__paragraph}>
               &#169; 2020 Kasa. All right reserved
            </p>
         </div>
      </footer>
   );
}

export default Footer;
