import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
     <div >
     <RecipePhoto/>
        <div className="recipePhotoBlock">
          <RecipeDescription/>
          <RecipeIngredients/>
        </div>
      </div>
    </div>
  );
}

export default App;
