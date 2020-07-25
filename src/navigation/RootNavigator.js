import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {Context as AuthContext} from '../contexts/AuthContext';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {state} = useContext(AuthContext);

  console.log(state.token);

  return (
    <Stack.Navigator headerMode="none">
      {state.token == null ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="MainStack" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
