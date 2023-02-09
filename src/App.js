import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "b8157177";
  const MY_KEY = "a2db20b852b8a6869b107a919c16d0c5";

  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState('');
  const[wordSubmited, setWordSubmited] = useState('salade');

   useEffect(() => {
    const myRecipes= async() =>{
      const response =  await fetch(`https://api.edamam.com/search?q=${wordSubmited}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
    myRecipes();
     
  },[wordSubmited]);
const myRecipesSearch = (e)=>{
  
  setMySearch(e.target.value);

}

const finalSearch =(e)=>{
  e.preventDefault();
  setWordSubmited(mySearch);



}
  return (
    <div className="App">
     <div className="container">
     <video autoPlay muted loop>
      <source src={video}type="video/mp4" />
     </video>
      <h1>Find a Recipe</h1>
    </div>

    <form 
      className='container'
      onSubmit={finalSearch}>
      <input className='search' placeholder='Search...'onChange={myRecipesSearch} value={mySearch}></input>
         
      <button>
        <img src="https://img.icons8.com/windows/512/search.png" alt="foto"width ="35px"className='icons' />
      </button>
    </form>
<div>
    {myRecipes.map((element, index) =>(
      <MyRecipesComponent label={element.recipe.label}
      image={element.recipe.image}
      calories={element.recipe.calories} 
      ingredients={element.recipe.ingredientLines}
      key={index}
      />
      

   ))}
</div>


    </div>
    
);
}

export default App;
