import axios from "axios";
import history from "../history";

const GET_URL = "GET_URL";
const GET_A_DRINK = "GET_A_DRINK";

const getUrl = (value) => ({ type: GET_URL, value });
const _getADrink = (drink) => ({ type: GET_A_DRINK, drink });

export const getDrink = (value) => async (dispatch) => {
  const drink = await axios.get(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`
  );
  dispatch(getUrl(drink.data.drinks));
};

export const getADrink = (id) => async (dispatch) => {
  console.log("we are hitting thunk");
  console.log("ID", id);
  const singleDrink = await axios.get(
    `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  dispatch(_getADrink(singleDrink.data.drinks));
};

export default function (state = { drinks: [], drink: [] }, action) {
  switch (action.type) {
    case GET_URL:
      return { ...state, drinks: action.value };
    case GET_A_DRINK:
      return { ...state, drink: action.drink };
    default:
      return state;
  }
}
