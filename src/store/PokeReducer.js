import {actionTypes} from './ActionTypes';

const initialState = {
  listOfPokemon: [],
};

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POKEMONS:
      return {
        ...state.listOfPokemon,
      };

    default:
      return {
        ...state,
      };
  }
};
export default pokeReducer;
