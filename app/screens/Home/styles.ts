import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodycontainer: {
    flex: 6,
  },
  name: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  username: {
    color: '#808080',
    fontSize: 12,
  },
  avatar: {
    height: 40,
    width: 40,
    margin: 10,
    backgroundColor: '#EBEDF0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarnames: {
    height: 40,
    margin: 10,
    flex:8
  },
  checkbox: {
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  checked: {
    height: 20,
    width: 20,
    backgroundColor: '#2F80ED',
    borderRadius: 20,
  },
  unchecked: {
    height: 20,
    width: 20,
    backgroundColor: '#E3E3E3',
    borderRadius: 20,
  },
});

export default styles;
