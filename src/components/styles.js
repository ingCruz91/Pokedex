import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#EDEEFF',
  },
  itemText: {
    backgroundColor: 'yellow',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItem: {
    padding: 10,
    backgroundColor: 'black',
    marginVertical: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: hp('2.7%'),
    fontFamily: 'AvenirNext-Bold',
    color: '#192965',
  },
  titleTextHeader: {
    fontSize: hp('2.5%'),
    fontFamily: 'AvenirNext-Bold',
    color: 'white',
    textAlign: 'center',
  },
});
export default styles;
