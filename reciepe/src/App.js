import './App.css';
import config from './config'

function App() {

  const APP_ID = config.APP_ID;
  const APP_KEY = config.APP_KEY;

  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
