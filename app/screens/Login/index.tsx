import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import images from 'app/config/images';
import ThemeController from 'app/components/ThemeController';
import ButtonContainer from 'app/components/ButtonContainer';
import TextInputBox from 'app/components/TextInputBox';

const Login: React.FC = () => {
  const [selected, setSelected] = React.useState('email');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.loginImage}>
            <Image
              source={images.loginImage}
              style={{
                resizeMode: 'stretch',
                height: Dimensions.get('screen').height / 3,
                width: Dimensions.get('screen').width,
              }}
            />
          </View>
          <View style={styles.bodycontainer}>
            <View style={styles.email}>
              <TouchableOpacity
                onPress={() => {
                  setSelected('email');
                }}
                style={[
                  styles.emailTouch,
                  selected === 'email'
                    ? {
                        backgroundColor: '#e5e5e5',
                      }
                    : null,
                ]}>
                <Text>Email</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelected('phone');
                }}
                style={[
                  styles.emailTouch,
                  selected === 'phone'
                    ? {
                        backgroundColor: '#e5e5e5',
                      }
                    : null,
                ]}>
                <Text>Phone</Text>
              </TouchableOpacity>
            </View>
            <TextInputBox
              placeholder={
                selected === 'email' ? 'Email Address' : 'Ex. (373) 378 8383'
              }
            />
            <ButtonContainer
              text={'Get Started >'}
              style={{
                backgroundColor: '#bdbdbd',
                width: Dimensions.get('window').width - 200,
              }}
            />
            <View style={styles.breakline} />
            <View style={styles.already}>
              <Text>Already have Near Account?</Text>
            </View>
            <TextInputBox placeholder="walletName.near" />
            {/* <View style={styles.emailAddress}>
            <TextInput style={styles.textInput} placeholder="" />
          </View> */}
            <ButtonContainer
              onPress={() => NavigationService.navigate('Create')}
              text={'Login >'}
              style={{ backgroundColor: '#2F80ED' }}
            />
            <View style={styles.terms}>
              <Text style={styles.termsText}>
                by clicking continue you must agree to near labs {'\n'}
                <Text style={{ color: '#2F80ED' }}>
                  Terms & Conditions{' '}
                </Text>{' '}
                ans
                <Text style={{ color: '#2F80ED' }}>Privacu Policy</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
