function MyRecipesComponent({label, image,calories, ingredients}){
    return(<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
        <img className="tasty"src={image} alt="foto"/>
        </div>
        <ul className="list">
            {ingredients.map((ingredient, id) =>(
             <li key={id}><img src="https://img.icons8.com/material/512/checkmark--v1.png" className="icon"alt="done"/>{ingredient}</li>
        ))}
        </ul>

        <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
        </div>
        
    </div>
    )
}

export default MyRecipesComponent;