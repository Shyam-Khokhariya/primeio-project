import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex:9.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  crossicon: {
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    fontSize:12,
    backgroundColor: '#e2e2e2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  loginButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cfcfcf',
    backgroundColor: '#2F80ED',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: Dimensions.get('window').width - 250,
  },
  isActive: {
    borderColor: '#2F80ED',
    borderWidth: 1,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 18,
  },
  emailAddress: {
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    backgroundColor: '#e2e2e2',
    paddingVertical: 15,
    paddingHorizontal: 24,
    fontSize: 18,
    borderRadius: 8,
    width: Dimensions.get('window').width - 40,
  },
});

export default styles;
