import {createStore, combineReducers} from 'redux';
import pokeReducer from './PokeReducer';

const rootReducer = combineReducers({
  pokeReducer: pokeReducer,
});

const configureStore = () => createStore(rootReducer);
export default configureStore;
