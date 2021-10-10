import React from "react";
import "./Meal.css";
const Meal = (props) => {
    const { strMealThumb, strCategory, strMeal, strYoutube } = props.meal;
    return (
        <div className="meal">
            <a href={strYoutube}>
                <img className="meal-image" src={strMealThumb} alt={strMeal} />
            </a>
            <h4 className="meal-name">{strMeal}</h4>
            <h5>Category: {strCategory}</h5>
            <button
                onClick={() => props.handleAddToCart(props.meal)}
                className="btn-regular"
            >
                Meal Order
            </button>
        </div>
    );
};

export default Meal;
