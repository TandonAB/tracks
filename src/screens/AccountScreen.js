import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Spacer from '../components/Spacer';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../contexts/AuthContext';

const AccountScreen = () => {
  const {state, signout} = useContext(AuthContext);

  console.log('HELLO', state);
  return (
    <View>
      <Text>AccountScreen</Text>
      <Spacer />
      <Spacer>
        <Button title="Sign Out" onPress={() => signout()} />
      </Spacer>
    </View>
  );
};

export default AccountScreen;
