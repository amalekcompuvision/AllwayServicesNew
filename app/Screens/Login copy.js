/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import { Button } from 'react-native-paper';
import application from '../reducers/application';
import {ApplicationActions} from '../actions/index'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = props => {
    const navigation = useNavigation();
    const dispatch= useDispatch();
    // const language = useSelector(state=> state.application.language);
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
                                navigation.replace('Home')
                            }}
                    >
                    <Text
                        style={{fontSize:18}}
                    >Login
                        </Text>
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
});

export default Login;
