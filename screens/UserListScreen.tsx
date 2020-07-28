import React, {useEffect, useState} from 'react';
import {BackgroundTitle, Title} from './LoginScreen';
import {FlatList, ListRenderItem, View} from 'react-native';
import UserDetails from '../components/UserDetails';

interface Props {}

interface IUser {
  id: string;
  // createdAt: Date;
  name: string;
  // email: string;
  username: string;
  balance: string;
  // factor_authentication: boolean;
  // user_ref: string;
}

const UserListScreen = (props: Props) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/')
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <UserDetails
        name={item.name}
        username={item.username}
        balance={item.balance}
      />
    );
  };
  
  return (
    <View>
      <BackgroundTitle>
        <Title>UserListScreen</Title>
      </BackgroundTitle>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => item.id}
      />
    </View>
  );
};

export default UserListScreen;
