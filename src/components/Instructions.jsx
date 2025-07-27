import '../styles/Instructions.css';

export default function Instructions() {
  return (

    <section className="instructions">

      <div className="container instructions__container">

        <h2 className="instructions__title">Instructions</h2>
        
        <ol className="instructions__list">
          <li className="instructions__item">
            <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
          </li>
          <li className="instructions__item">
            <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="instructions__item">
            <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
          </li>
          <li className="instructions__item">
            <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
          </li>
          <li className="instructions__item">
            <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
          </li>
          <li className="instructions__item">
            <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
          </li>
        </ol>

        <div className="divider"></div>

      </div>

    </section>

  );
}