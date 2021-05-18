import {actionTypes} from './ActionTypes';

export const actions = {
  addPokemons: pokemons => ({type: actionTypes.ADD_POKEMONS, data: pokemons}),
};
