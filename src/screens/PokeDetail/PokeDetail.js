//@flow
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import constants from '../../helpers/Constants';
import {getRequestApiClient} from '../../api/Gateway';
import FastImage from 'react-native-fast-image';
import styles from './styles';


const PokeDetail = props => {
  const [pokeID, setPokeId] = useState('');
  const [baseExperience, setBaseExperience] = useState('');
  const [types, setTypes] = useState('');
  const [abilities, setAbilities] = useState('');

  /**
   * @function requestInfoDetails
   * This function get the data from the Pokemon API and get the details of selected pokemon
   */
  const requestInfoDetails = async () => {
    const {data} = await getRequestApiClient(props.route.params.pokemon.url);

    if (data) {
      setBaseExperience(data?.base_experience);
      setTypes(
        Array.from(data.types, pokeTypes => pokeTypes?.type?.name + '/ '),
      );
      setAbilities(
        Array.from(
          data?.abilities,
          pokeAbilities => pokeAbilities?.ability?.name + '/ ',
        ),
      );
      setPokeId(data.id);
      console.log(data);
    }
  };

  useEffect(() => {
    requestInfoDetails();
  }, []);

  useEffect(() => {
    setPokeId(pokeID);
    setBaseExperience(baseExperience);
    setTypes(types);
    setAbilities(abilities);
  }, [pokeID]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>
          {props.route.params.pokemon.name.toUpperCase()}
        </Text>
        <View style={styles.pokemonStats}>
          <Text style={styles.textInput}>
            BASE EXPERIENCE: {baseExperience}
          </Text>
          <Text style={styles.textInput}>TYPES:  {types} </Text>
          <Text style={styles.textInput}>ABILITIES: {abilities}</Text>
        </View>
      </View>

      <View style={styles.middleSection}>
        <FastImage
          style={{width: wp('75%'), height: hp('75%')}}
          source={{
            uri: constants.api.GET_IMG_POKEMON + pokeID + '.png',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </SafeAreaView>
  );
};

export default PokeDetail;
