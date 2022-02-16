import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Header(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>

      {/* <View style={{ flex: 0.5 }}> */}
      <View
        style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
        <View style={styles.crossicon}>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}
