//@flow
import React, {useState, useEffect} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import constants from '../helpers/Constants';
import {getRequestApiClient} from '../api/Gateway';

const PokeDetail = props => {
  const requestInfoDetails = async () => {

    const {data} = await getRequestApiClient(props.route.params.pokemon.url);
    console.log(data);
    console.log(props.route.params.pokemon.name);
  };

  useEffect(() => {
    requestInfoDetails();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>{props.route.params.pokemon.name}</Text>
      </View>

      <View style={styles.middleSection}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
  },
  headerSection: {flex: 1.5, backgroundColor: '#EDEEFF'},
  middleSection: {flex: 5, backgroundColor: '#CCCCFF'},
  footerSection: {
    flex: 0.7,
    backgroundColor: '#EDEEFF',
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
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
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
    flex: 0.2,
    fontSize: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    height: hp('16%'),
    textAlign: 'center',
    fontSize: hp('5.5%'),
    color: '#9900CC',
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

export default PokeDetail;
