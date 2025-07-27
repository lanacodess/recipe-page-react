import '../styles/Nutrition.css';

export default function Nutrition() {
  return (
    <section className="nutrition">
      <div className="container nutrition__container">
        <h2 className="nutrition__title">Nutrition</h2>
        <p className="nutrition__description">
          The table below shows nutritional values per serving without the additional fillings.
        </p>

        <div className="nutrition__list">
          <div className="nutrition__item">
            <span className="nutrition__label">Calories</span>
            <span className="nutrition__value">277kcal</span>
          </div>

          <div className="divider nutrition-divider"></div>

          <div className="nutrition__item">
            <span className="nutrition__label">Carbs</span>
            <span className="nutrition__value">0g</span>
          </div>

          <div className="divider nutrition-divider"></div>

          <div className="nutrition__item">
            <span className="nutrition__label">Protein</span>
            <span className="nutrition__value">20g</span>
          </div>

          <div className="divider nutrition-divider"></div>
          
          <div className="nutrition__item">
            <span className="nutrition__label">Fat</span>
            <span className="nutrition__value">22g</span>
          </div>
        </div>
        
      </div>
    </section>

  );
}