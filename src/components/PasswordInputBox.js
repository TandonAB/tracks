import React from 'react';
import {View} from 'react-native';
import {Input} from 'react-native-elements';

const PasswordInputBox = (props) => {
  return (
    <View>
      <Input label="Password" autoCapitalize="none" autoCorrect={false} />
    </View>
  );
};

export default PasswordInputBox;
