import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    flex: 2,
    backgroundColor: '#192965',
    alignItems: 'center',
  },
  middleSection: {
    flex: 2,
    backgroundColor: '#EDEEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: hp('5.5%'),
    color: 'yellow',
    fontFamily: 'AvenirNext-Bold',
    lineHeight: hp('6.5%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  textInput: {
    fontFamily: 'AvenirNext-MediumItalic',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: hp('2.8%'),
    color: 'white',
  },
  pokemonStats: {
    flex: 0.7,
    textAlignVertical: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
});
export default styles;
