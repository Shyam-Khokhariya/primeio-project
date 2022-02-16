import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function ButtonContainer(props) {
  return (
    <View style={styles.loginButton}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.loginContainer, { ...props.style }]}>
        <Text style={styles.loginText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
