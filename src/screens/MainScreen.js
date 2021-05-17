//@flow
import React, {useState, useEffect} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {PokeList} from '../components/PokeList';
import {useDispatch, useSelector} from 'react-redux';

import constants from '../helpers/Constants';
import {getRequestApiClient} from '../api/Gateway';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state?.pokeReducer.listOfPokemon);
  const [enteredSearch, setEnteredSearch] = useState('');
  const [pokeList, setPokeList] = useState([]);

  /**
   * @function requestPokeData
   * This function get the data from the Pokemon API and get the first 150 pokemons
   */
  const requestPokeData = async () => {
    const {data} = await getRequestApiClient(constants.api.GET_POKEMON_LIST);
    if (data) {
      setPokeList(data.results);
    }
  };


  useEffect(() => {
    requestPokeData();
  }, []);

  const getPokemonByFilter = () => {
    return enteredSearch
      ? pokeList.filter(poke =>
          poke.name.toLowerCase().includes(enteredSearch.toLowerCase()),
        )
      : pokeList;
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
      <View style={styles.footerSection} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerSection: {flex: 0.7, backgroundColor: 'white'},
  middleSection: {flex: 5, backgroundColor: '#CAE1F9'},
  footerSection: {
    flex: 0.4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 12,
  },

  item: {
    backgroundColor: 'white',
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    flex: 0.1,
    fontSize: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    height: hp('16%'),
    textAlign: 'center',
    fontSize: hp('5.5%'),
    color: 'red',
    fontFamily: 'AvenirNext-Bold',
    lineHeight: hp('6.5%'),
    marginTop: 40,
  },
  textInput: {
    height: 40,
    minWidth: 50,
    marginTop: 10,
    backgroundColor: 'white',
  },
});

export default MainScreen;
