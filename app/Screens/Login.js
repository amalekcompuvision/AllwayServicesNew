/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import { Button } from 'react-native-paper';
import application from '../reducers/application';
import {ApplicationActions} from '../actions/index'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Form, Input, Item } from 'native-base';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthActions } from '@actions';


const successInit = {
    id: true,
    password: true,
  };
const { authentication } = AuthActions;

const Login = props => {
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    // const [id, setId] = useState("test");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(successInit);
    // const success = useSelector(state=> state.auth.success);
    useEffect(()=>{
        dispatch(
            authentication(false, (response) => {})
          );
          
         
    });

    // const onLogin = () => {
    //     if (email === '' || password === '') {
    //         Alert.alert('please enter valid username or password')
    //     }
    //     else{
    //         dispatch(AuthActions.fetchUserInfo(email, password));
    //         console.log(success);
    //     }
        
    //   };
    const onLogin = () => {
        if (email === '' || password === '') {
          setSuccess({
            ...success,
            id: false,
            password: false,
          });
        } else {
          setLoading(true);
          dispatch(
            authentication(true, (response) => {
              if (response.success 
                // && id == "test" &&
                //  password == "123456"
                 ) {
                // navigation.navigate("Profile");
                navigation.replace('Home');
                // console.log('succeeeeeeeeees');
              } else {
                setLoading(false);
                // console.log('wrong');
              }
            })
          );
        }
      };
    // const language = useSelector(state=> state.application.language);
    return (
        <KeyboardAvoidingView
            // behavior="padding"
            // keyboardVerticalOffset={50}
            style={styles.container}
        >
        
            <View 
            style={styles.languageButtons}>
                <Form>
                <Image
                 style={styles.Image} resizeMode="cover" source={require("../images/Allway-Services-.png")} />
                 
                    <Item regular style={{ height: 40, width:'90%', marginBottom: 0, alignSelf:'center' }}>
                        <Input
                        placeholder='Enter username'
                        style={styles.passwordInput}
                        onChangeText={text => setEmail(text)}
                        //   value='test'
                        
                        />
                    </Item>
                    <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:'98%',
                        alignSelf:'center',
                       
                    }}
                    >
                    <Item regular style={{  height: 50, justifyContent:'space-between' ,height: 35, width:'80%', marginTop: 20, alignSelf:'center' }}>
                        <Input placeholder='Enter password' 
                        style={styles.usernameInput} 
                        onChangeText={text => setPassword(text)}

                        // secureTextEntry={showPassword}
                        // value='123456'
                        />
                    </Item>    
                    <Item>

                    <Icon
                            active
                            name={showPassword ? "eye" : "eye-off"}
                            onPress={() => {
                                setShowPassword(!showPassword);
                            }}
                            style={styles.eyeIcon}
                        />
                    </Item>
                    </View>
                        
                    
                
                </Form>
                <TouchableOpacity 
                    style={[
                             styles.button]}
                            onPress={() => {
                                //  dispatch(ApplicationActions.onChangeLanguage('EN'));
                                
                                //  dispatch(AuthActions.fetchUserInfo(email, password));
                                    // onLogin();
                                // console.log(email);
                                // console.log(password);
                                //  navigation.replace('Home');
                            }}
                    >
                    <Text
                        style={{fontSize:18}}
                    >Login
                        </Text>
                </TouchableOpacity>

            </View>
        
        </KeyboardAvoidingView>                      


    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'grey',
        padding:'1%',
    },
    button: {
        height: Dimensions.get('window').height*0.08,
        width: '75%',
        backgroundColor:'#d4eef9',
        justifyContent:'center',
        alignItems:'center',
        marginTop:Dimensions.get('window').height*0.05,
        borderRadius: 35,
      },
      languageButtons:{
          flex: 1,
          width:'100%',
          backgroundColor: 'grey',
          marginTop: 0,
          alignItems: 'center',
          justifyContent:'flex-start',
          paddingBottom:'20%',
        },
        Image:{
            width: Dimensions.get('screen').width,
            marginBottom: 5,
            height: Dimensions.get('screen').width/2,
            marginTop: Dimensions.get('screen').height * 0.1,
           
        },
        passwordInput:{
            // backgroundColor:'white'
           
        },
        usernameInput:{
            // backgroundColor:'white'
           
        },
        eyeIcon:{
            color: 'white',
            fontSize: 30,
            // marginLeft: 6,
            marginTop: 15,
        },
});

export default Login;
