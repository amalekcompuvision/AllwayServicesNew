/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
  Image,
  Dimensions

} from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../Components/UI/Input';
import Card from '../Components/UI/Card';
import Colors from '../constants/Colors';
import * as authActions from '../actions/auth';
// import { Text } from 'native-base';
import SyncStorage from 'sync-storage';
import { ApplicationActions } from '../actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'native-base';


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  // const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const myEmail = SyncStorage.get('email');
  const mypassword = SyncStorage.get('password');

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', "Wrong password or email", [{ text: 'Okay' }]);
    }
  }, [error]);

  // SyncStorage.set('foo', 'hooooooooooooooooooooook');

  // const result = SyncStorage.get('foo');
  // console.log(result); // 'bar'

  const storeData = async (key, data, key1, data1) => {
    try {
      await AsyncStorage.setItem(key, data);
      await AsyncStorage.setItem(key1, data1);
    } catch (e) {
      console.log(e);
    }
  };

  // const getData = async () => {
  //   try {
  //     const email = await AsyncStorage.getItem('email');
  //     const password = await AsyncStorage.getItem('password');
  //     if(value !== null) {
  //       // value previously stored
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  // }

  const authHandler = async () => {
    let action;

    action = authActions.login(
      formState.inputValues.email,
      formState.inputValues.password,
    );

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      storeData(
        'email',
        formState.inputValues.email,
        'password',
        formState.inputValues.password,
      );
      props.navigation.replace('Home');

      dispatch(ApplicationActions.onChangeLanguage('AR'));

    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <View
      // behavior="padding"
      // keyboardVerticalOffset={0}
      style={styles.screen}
    >
      {/* <View
      style={{height:60,justifyContent: 'center', alignItems:'center', backgroundColor:Colors.balck}}
      >

      
      <Text
      style={{
        color:Colors.white,
        fontWeight:'bold',
        fontSize:20
      }}
      >Login</Text>
      </View> */}


      <View style={styles.gradient}>
        <Image style={styles.Image} resizeMode="cover" source={require("../images/Allway-Services-.png")} />

        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="E-Mail"
              labelStyle={{ color: 'white' }}
              inputStyle={{ color: 'white' }}
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue={myEmail}
            />
            <Input

              id="password"
              label="Password"
              labelStyle={{ color: 'white' }}
              inputStyle={{ color: 'white' }}
              keyboardType="default"
              secureTextEntry
              required
              minLength={3}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue={mypassword}/////////////
            />
            {/* <View style={styles.buttonContainer}>
              <Button
                    title={'Login'}
                    color='#ebd034'
                    onPress={authHandler}
                    disabled={isLoading}
                    style={{borderRadius:40,}}
                  />
            </View> */}
            <TouchableOpacity
              activeOpacity={isLoading ? 1 : 0.7}
              style={{...styles.ButtonContainer,
              backgroundColor: isLoading ? 'grey' : 'yellow',
              }}
              disabled={isLoading}
              onPress={()=>{
                authHandler();
                setIsLoading(!isLoading);
              }}
            >
              <View>
                <Text style={styles.textWithShadow}>Login</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </Card>
      </View>
    </View>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  authContainer: {
    shadowColor: 'white',
    backgroundColor: 'black',
    // backgroundColor:'white',
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  // buttonContainer: {
  //   marginTop: 40,
  // },
  ButtonContainer: {
    justifyContent: 'center',
    backgroundColor: 'yellow',
    marginTop: 50,
    height: 50,
    maxHeight: 70,
    borderRadius:20,

  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width / 3 + 20,
    marginBottom: '30%',
    paddingVertical: '10%'


  },
});

export default AuthScreen;
