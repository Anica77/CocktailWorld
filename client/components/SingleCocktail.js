import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const SingleCocktail = (props) => {
  const { drink } = props;

  console.log("DRINK!!!", drink[0]);

  return (
    <div>
      {drink &&
        drink.map((aDrink) => (
          <div key={aDrink.idDrink}>
            <h1>{aDrink.strDrink}</h1>
            <h2>Category: {aDrink.strCategory}</h2>
            <h2>Glassware: {aDrink.strGlass}</h2>
            <div>
              <p>Ingridients:</p>
              <ul>
                <li>{aDrink.strIngredient1}</li>
                <li>{aDrink.strIngredient2}</li>
                <li>{aDrink.strIngredient3}</li>
              </ul>
              <p>Instructions:</p>
              <p>{aDrink.strInstructions}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    drink: state.drinkReducer.drink,
  };
};

export default connect(mapState)(SingleCocktail);
