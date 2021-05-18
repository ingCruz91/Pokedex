//@flow
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import type {POKE_TYPE} from '../models/PokeModel';

type AssetListProps = {
  pokeList?: [POKE_TYPE],
  regularFont?: string,
  boldFont?: string,
  onPressHandler: () => void,
  onRefreshData: () => void,
  containerStyle?: StyleSheet.Styles,
  text?: string,
  navigation: any,
};

export const PokeList = (props: AssetListProps) => {
  const {
    pokeList,
    regularFont,
    boldFont,
    onPressHandler,
    containerStyle,
    navigation,
    text,
  } = props;

  const onPress = onPressHandler
    ? onPressHandler
    : () => console.log('onPressHandler not implemented');

  const keyExtractor = item => item.name;

  const Item = ({pokemon}) => (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Details', {
          pokemon: pokemon,
        });
      }}>
      <View style={styles.itemText}>
        <Text style={styles.titleText}>{pokemon.name.toUpperCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderItem = ({item}) => <Item pokemon={item} />;

  return (
    <View style={containerStyle}>
      <View style={styles.headerItem}>
        <Text style={styles.titleTextHeader}>Catch them all!!</Text>
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        data={pokeList}
        renderItem={renderItem}
      />
    </View>
  );
};
