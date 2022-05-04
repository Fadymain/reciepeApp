import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, id) => (
          <li key={id}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)} Calories</p>
      <img className={style.image} src={image} />
    </div>
  )
}

export default Recipe