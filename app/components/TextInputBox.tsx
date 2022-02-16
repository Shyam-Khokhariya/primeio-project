import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function TextInputBox(props) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.emailAddress}>
      {props.header ? (
        <Text
          style={[
            { marginVertical: 10 },
            isFocus ? { color: '#2F80ED' } : { color: '#808080' },
          ]}>
          {props.header}
        </Text>
      ) : null}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={props.value}
        onChangeText={props.onChangeText}
        style={[
          styles.textInput,
          isFocus ? styles.isActive : null,
          { ...props.style },
        ]}
        placeholder={props.placeholder}
      />
    </View>
  );
}
