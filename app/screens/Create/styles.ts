import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodycontainer: {
    flex: 6,
  },
  email: {
    flex:1,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  progressLine: {
    width: Dimensions.get('screen').width - 100,
    borderWidth: 2,
    alignSelf:'flex-start',
    borderColor: '#2F80ED',

  },
  breakline: {
    width: Dimensions.get('screen').width - 40,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    marginVertical: 25,
  },
  already: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  terms: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    textAlign: 'center',
  },
});

export default styles;
