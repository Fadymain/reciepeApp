import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, id) => (
          <li key={id}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image}/>
    </div>
  )
}

export default Recipe