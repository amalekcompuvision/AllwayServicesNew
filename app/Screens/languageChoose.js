/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import { Button } from 'react-native-paper';
import application from '../reducers/application';
import {ApplicationActions} from '../actions/index'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as authActions from '../actions/auth';
import SyncStorage from 'sync-storage';




const languageChoose = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const language = useSelector(state=> state.application.language);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();  
    const myEmail = SyncStorage.get('email');
    const mypassword = SyncStorage.get('password');
    console.log(myEmail);


        const authHandler = async () => {
            dispatch(ApplicationActions.onChangeLanguage('EN'));
            if (myEmail != null || mypassword != null ) {
                let action;
                
                action = authActions.login(
                    myEmail,
                    mypassword
                );
                
                setError(null);
                setIsLoading(true);
                try {
                  await dispatch(action);
                    navigation.replace('Home');
                } catch (err) {
                  setError(err.message);
                  setIsLoading(false);
                }
            }
            else {
                navigation.navigate('Login');
            }
              };
        const authHandler2 = async () => {
            dispatch(ApplicationActions.onChangeLanguage('AR'));
            if (myEmail != null || mypassword != null ) {
                let action;
                
                action = authActions.login(
                    myEmail,
                    mypassword
                );
                
                setError(null);
                setIsLoading(true);
                try {
                  await dispatch(action);
                    navigation.replace('Home');
                } catch (err) {
                  setError(err.message);
                  setIsLoading(false);
                }
            }
            else {
                navigation.navigate('Login');
            }
              };
    
    return (

        <View style={styles.container}>
            <View 
            style={styles.languageButtons}>
                <Image
                 style={styles.Image} resizeMode="cover" source={require("../images/Allway-Services-.png")} />
                <TouchableOpacity 
                    style={[
                             styles.button,
                            { marginTop: Dimensions.get('window').height * 0.1, }]}
                            onPress={() => {
                                dispatch(ApplicationActions.onChangeLanguage('EN'));
                                authHandler();
                                
                            }}
                    >
                    <Text
                        style={{fontSize:18}}
                    >English
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button]}
                    
                  onPress={() => {
                    dispatch(ApplicationActions.onChangeLanguage('AR'));
                    authHandler2();
                }}
                    >
                        <Text 
                        // style={[styles.btnText, { fontFamily: Global.fontArabicName, fontSize: 20 }]}
                        style={{fontSize:20}}
                        >العربية</Text>
                </TouchableOpacity>
            </View>
        </View>



    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'black',
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
          backgroundColor: 'black',
          marginTop: 0,
          alignItems: 'center',
          justifyContent:'center',
          paddingBottom:'20%',
        },
        Image:{
            width: Dimensions.get('screen').width,
            marginBottom: 5,
            height: Dimensions.get('screen').width/2,
            marginTop: Dimensions.get('screen').height * 0.1,
           
        },
});

export default languageChoose;
