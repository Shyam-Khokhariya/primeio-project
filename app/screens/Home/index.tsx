import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import * as userActions from 'app/store/actions/userActions';
import styles from './styles';
import Header from 'app/components/Header';
import TextInputBox from 'app/components/TextInputBox';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.requestUser());
  }, []);
  const [search, setSearch] = React.useState('');
  const [userData, setUserData] = React.useState([]);
  const data = useSelector((state: any) => state.userReducer);
  if(data && data.data){
    setUserData(data.data)
  }
  const itemClicked = (item, index) => {
    let newData = [
      ...userData.slice(0,index),
      {...userData[index], checked :!item.checked},
      ...userData.slice(index)
    ]
    setUserData(newData)
  };

  return (
    <View style={styles.container}>
      <Header title="Gift an NFT" />

      <View style={{ width: Dimensions.get('screen').width - 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 7 }}>
            <TextInputBox
              placeholder="Search People"
              value={search}
              onChangeText={value => setSearch(value)}
            />
          </View>
        </View>
        <View>
            <FlatList
              data={userData || []}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  // onPress={() => itemClicked(item, index)}
                  style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={styles.avatar}>
                    <Text style={{ color: '#000000', fontSize: 18 }}>
                      {item.name[0]}
                    </Text>
                  </View>
                  <View style={styles.avatarnames}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.username}>@{item.username}</Text>
                  </View>
                  <View style={styles.checkbox}>
                    <View
                      style={
                        item.checked ? styles.checked : styles.unchecked
                      }></View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
      </View>
    </View>
  );
};

export default Home;
