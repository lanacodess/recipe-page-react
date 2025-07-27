import '../styles/Ingredients.css';

export default function Ingredients() {
  return (

    <section className="ingredients">

      <div className="container ingredients__container">

        <h2 className="ingredients__title">Ingredients</h2>
        
        <ul className="ingredients__list">
          <li className="ingredients__item">2–3 large eggs</li>
          <li className="ingredients__item">Salt, to taste</li>
          <li className="ingredients__item">Pepper, to taste</li>
          <li className="ingredients__item">1 tablespoon of butter or oil</li>
          <li className="ingredients__item">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        
        <div className="divider"></div>

      </div>

    </section>

  );
}