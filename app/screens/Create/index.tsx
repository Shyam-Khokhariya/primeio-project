import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
import TextInputBox from 'app/components/TextInputBox';
import ButtonContainer from 'app/components/ButtonContainer';
import Header from 'app/components/Header';
const Create: React.FC = () => {
  const [name, setName] = React.useState('');
  const [wallet, setWallet] = React.useState('');
  return (
    <View style={styles.container}>
      <Header title="Create NEAR Account" />
      <View style={styles.progressLine} />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.bodycontainer}>
            <View style={styles.email}>
              <Text>
                Enter an Account ID to use with your NEAR account. Your Account
                ID will be used for all NEAR operations, including sending and
                receiving assets.
              </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <TextInputBox
                header="Full Name"
                placeholder="Ex John Doe"
                value={name}
                onChangeText={(value: String) => setName(value)}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <TextInputBox
                header="Wallet ID"
                value={wallet}
                onChangeText={(value: String) => setWallet(value)}
                placeholder="yourname.near"
              />
            </View>
            <ButtonContainer
              text={'Create an account'}
              onPress={
                name && wallet ? () => NavigationService.navigate('Home') : null
              }
              style={{
                backgroundColor: name && wallet ? '#000000' : '#bdbdbd',
                width: Dimensions.get('window').width - 200,
              }}
            />

            <View style={styles.terms}>
              <Text style={styles.termsText}>
                By creating a NEAR account, you agree to the NEAR Wallet {'\n'}
                <Text style={{ color: '#2F80ED' }}>Terms of Service</Text> and
                <Text style={{ color: '#2F80ED' }}>Privacy Policy</Text>.
              </Text>
            </View>
          </View>
          <View style={styles.breakline} />
          <View style={{ flex: 3 }}>
            <View style={styles.already}>
              <Text>Already have Near Account?</Text>
            </View>
            <ButtonContainer
              onPress={() => NavigationService.navigate('Create')}
              text={'Login with NEAR >'}
              style={{
                backgroundColor: '#2F80ED',
                width: Dimensions.get('window').width - 200,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Create;
