import { useEffect, useState } from 'react'
import Recipe from './components/Recipe';
import './App.css';
import config from './config'

function App() {

  const APP_ID = config.APP_ID;
  const APP_KEY = config.APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");



  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }



  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className='recipes'>
        {recipes.map((recipee, id) => (
          <Recipe
            key={id}
            title={recipee.recipe.label}
            calories={recipee.recipe.calories}
            image={recipee.recipe.image}
            ingredients={recipee.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
