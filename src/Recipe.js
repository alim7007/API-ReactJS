import React from 'react';
import style from './recipe.module.css';


function Recipe(props) {

    return (
        <div className={style.recipeDiv}>
            <h1 className={style.h1} >{props.title}</h1>
            <img className={style.img} src={props.image} alt="" />
            <ol className={style.ol} >{props.ingredients.map(ingredient => (<li>{ingredient.text}</li>))}</ol>

        </div>
    )
}

export default Recipe;














