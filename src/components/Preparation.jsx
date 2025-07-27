import '../styles/Preparation.css';

export default function Preparation() {
  return (

   <section className="prep-time">

    <div className="container prep-time__container">
      <h2 className="prep-time__title">Preparation time</h2>

      <ul className="prep-time__list">
        <li className="prep-time__item">
          <strong className="prep-time__label">Total: </strong> <span>&nbsp;</span> Approximately 10 minutes
        </li>
        <li className="prep-time__item">
          <strong className="prep-time__label">Preparation: </strong> <span>&nbsp;</span> 5 minutes
        </li>
        <li className="prep-time__item">
          <strong className="prep-time__label">Cooking: </strong> <span>&nbsp;</span> 5 minutes
        </li>
      </ul>

    </div>

  </section>

  );
}