import { client } from './client'
import { useState, useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [fika, setFika] = useState([]);
  
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setRecipes(response.items);
        const fikaRecipes = response.items.filter(recipe => {
          return recipe.metadata.tags[0].sys.id === 'fika'
        })
        console.log(fikaRecipes);
        setFika(fikaRecipes);
      })
      .catch(console.error);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello you!</h1>
      </header>
        { recipes.map((recipe) => {
          return (
            <div key={recipe.sys.id}>
              <h2>{ recipe.fields.title }</h2>
              {recipe.fields.image.fields.file.url && <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />}
              <p><strong>Gör så här: </strong>{ recipe.fields.description }</p>
              <ul>
                { recipe.fields.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>{ingredient}</li>
                  )
                }) }
              </ul>
            </div>
          )
        })}
        <h2>FILTER FIKA!!!!!</h2>
        { fika.map((recipe) => {
          return (
            <h3 key={recipe.sys.id}>{recipe.fields.title}</h3>
          )
        })}
    </div>
  );
}

export default App;
