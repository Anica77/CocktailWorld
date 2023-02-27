import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SelectSpirit from "./SelectSpirit";
import { Link } from "react-router-dom";
import { getADrink } from "../store/drinks";

export const Home = (props) => {
  const { username } = props;
  const { drinks } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const drinkss = !searchTerm
    ? drinks
    : drinks.filter((drink) =>
        drink.strDrink.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <SelectSpirit />
      {drinkss ? (
        <div className='md-form'>
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      ) : (
        "Select your favorite spirit"
      )}
      {drinkss &&
        drinkss.map((drink) => (
          <Link
            to='/goToSingleCocktail'
            key={drink.idDrink}
            onClick={() => {
              props.getCocktail(drink.idDrink);
            }}
          >
            <div>
              <p>{drink.strDrink}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
    drinks: state.drinkReducer.drinks,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getCocktail: (id) => dispatch(getADrink(id)),
  };
};

export default connect(mapState, mapDispatch)(Home);
