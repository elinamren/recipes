import { client } from './client'
import { useState, useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setRecipes(response.items)
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
              {/* <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />  */}
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
        <img src={ recipes[0].fields.image.fields.file.url } alt="hej" /> 
    </div>
  );
}

export default App;
