import '../styles/Header.css';
import imgMobile from "../assets/omlette-mb.jpg";
import imgTablet from "../assets/omlette-tb.jpg";
import imgDesktop from "../assets/omlette-dk.jpg";


export default function Header() {

  return (

    <header className="header">
      <div className="container">
        <img
            className='header__img'
            src={imgMobile}
            srcSet={`
              ${imgTablet} 600w,
              ${imgDesktop} 1024w
            `}
            sizes="
              (min-width: 1024px) 1024px,
              (min-width: 600px) 600px,
              100vw
            "
            alt="Omelette"
        />
        
        <div className="header__content-wrapper">
          <h1 className='header__title'>Simple Omelette Recipe</h1>
          <p className="header__description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </div>
      </div>
    </header>
  );

}