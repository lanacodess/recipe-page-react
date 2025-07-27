
import Header from './components/Header.jsx';
import Preparation from './components/Preparation.jsx';
import Ingredients from './components/Ingredients.jsx';
import Instructions from './components/Instructions.jsx';
import Nutrition from './components/Nutrition.jsx';


import './index.css'

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />

        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </>
  )
}

export default App
