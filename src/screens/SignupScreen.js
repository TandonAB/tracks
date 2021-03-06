import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Context as AuthContext} from '../contexts/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState('eye');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearErrorMessage();
    });
    return () => unsubscribe;
  }, [navigation, clearErrorMessage]);

  const showPasswordHandle = (event) => {
    let icon = securePassword ? 'eye-off' : 'eye';
    setShowPasswordIcon(icon);
    setSecurePassword(!securePassword);
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h4 h4Style={styles.h4Style}>
          SignUp for Tracker
        </Text>
      </Spacer>

      <Spacer />

      <Spacer>
        <Input
          label="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          secureTextEntry={securePassword}
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          rightIcon={
            <MaterialCommunityIcons
              name={showPasswordIcon}
              size={24}
              onPress={showPasswordHandle}
            />
          }
        />

        {/* <Spacer /> */}

        <Spacer>
          {state.errorMessage ? (
            <Text style={styles.error}>{state.errorMessage}</Text>
          ) : null}
          <Button title="Sign Up" onPress={() => signup({email, password})} />
        </Spacer>
        <Spacer>
          <Text style={styles.italicText}>
            Already have an account.{' '}
            <Text
              onPress={() => navigation.navigate('Signin')}
              style={styles.signinBtn}>
              Sign in.
            </Text>
          </Text>
        </Spacer>
      </Spacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  h4Style: {
    fontWeight: '100',
    textAlign: 'center',
  },
  icon: {
    right: 36,
    // borderWidth: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginVertical: 6,
    fontStyle: 'italic',
  },
  signinBtn: {
    color: 'cornflowerblue',
  },
  italicText: {fontStyle: 'italic'},
});
