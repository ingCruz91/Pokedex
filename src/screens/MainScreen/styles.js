import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerSection: {flex: 0.7, backgroundColor: 'red'},
  middleSection: {flex: 5, backgroundColor: '#192965'},
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
    padding: hp('2%'),
    borderColor: 'blue',
  },
});
export default styles;
