import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
//import { v4 as uuidv4 } from 'uuid';
import './App.css';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [searches, setSearches] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    fetchItems();
  }, [query]);

  const fetchItems = async () => {
    const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "48a9acf3cemshe5593d1474e76afp1f417djsne8de247fd24a",
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
      }
    });
    const data = await response.json();
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearches(e.target.value)
  }

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(searches)

  }


  return (
    <div className="appsDiv">
      <form onSubmit={getQuery} className="searchForm" >
        <input className="searchBar" type="text" value={searches} onChange={updateSearch} />
        <button className="searchButton" type="submit"  >
          Search
        </button>
      </form>
      <div className="recipe">
        {
          recipes.map(recipe => (
            <Recipe key={recipe.recipe.calories} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients} image={recipe.recipe.image} />
          ))}
      </div>
    </div>
  );
}

export default App;



