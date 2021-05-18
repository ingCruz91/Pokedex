//@flow
import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {PokeList} from '../../components/PokeList';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import constants from '../../helpers/Constants';
import {getRequestApiClient} from '../../api/Gateway';
import {actions} from '../../store/Actions';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state?.pokeReducer.listOfPokemon);
  const [enteredSearch, setEnteredSearch] = useState('');

  /**
   * @function requestPokeData
   * This function get the data from the Pokemon API and get the first 150 pokemons
   */
  const requestPokeData = async () => {
    const {data} = await getRequestApiClient(constants.api.GET_POKEMON_LIST);
    if (data) {
      dispatch(
        actions.addPokemons({
          data: data.results,
        }),
      );
    }
  };

  useEffect(() => {
    requestPokeData();
  }, []);

  /**
   * @function getPokemonByFilter
   * This function get the data collected and retrieve a list filter by name
   */
  const getPokemonByFilter = () => {
    return enteredSearch
      ? pokemonList?.data.filter(poke =>
          poke.name.toLowerCase().includes(enteredSearch.toLowerCase()),
        )
      : pokemonList.data;
  };

  const pokemonInputHandler = enteredText => {
    setEnteredSearch(enteredText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Pokemon to search"
            onChangeText={pokemonInputHandler}
            value={enteredSearch}
            style={styles.input}
            maxLength={20}
          />
        </View>
      </View>

      <PokeList
        containerStyle={styles.middleSection}
        pokeList={getPokemonByFilter()}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
