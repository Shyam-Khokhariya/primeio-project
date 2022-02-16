import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodycontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  loginImage: {
    flex: 4,
  },
  email: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  emailTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
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
  getStartedButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStarted: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cfcfcf',
    backgroundColor: '#bdbdbd',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: Dimensions.get('window').width - 200,
  },
  getstartedText: {
    color: '#ffffff',
    fontSize: 18,
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

  loginText: {
    color: '#ffffff',
    fontSize: 18,
  },
  breakline: {
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
