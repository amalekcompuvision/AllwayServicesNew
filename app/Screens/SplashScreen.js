/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import application from '../reducers/application';
import { ApplicationActions } from '../actions/index';
import SyncStorage from 'sync-storage';
import { useDispatch } from 'react-redux';
import * as authActions from '../actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';




const SplashScreen = props => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [myEmail, setMyEmail] = useState();
    const [mypassword, setMyPassword] = useState();
    useEffect(() => {
        setTimeout(() => {
            // navigation.replace('language Choose')
            // authHandler();
            getData();
        }, 1000)
    }, []);


    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            if (email !== null || password !== null) {
                // console.log('emaaaaaaaaaaaaaaaaaaaail');
                // console.log(email);
                // console.log(password);
                let action;

                action = authActions.login(
                    email,
                    password
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
                navigation.replace('Login');
            }
        } catch (e) {
            console.log('errrrrrrrrrror00');
            console.log(e);
        }
    }

    // const authHandler = async () => {
    //     dispatch(ApplicationActions.onChangeLanguage('EN'));
    //     if (myEmail != null || mypassword != null) {
    //         let action;

    //         action = authActions.login(
    //             myEmail,
    //             mypassword
    //         );

    //         setError(null);
    //         setIsLoading(true);
    //         try {
    //             await dispatch(action);
    //             navigation.replace('Home');
    //         } catch (err) {
    //             setError(err.message);
    //             setIsLoading(false);
    //         }
    //     }
    //     else {
    //         navigation.replace('Login');
    //     }
    // };

    // console.log(language);
    return (
        <View
            style={{ felx: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'black', alignItems: 'center', height: Dimensions.get('screen').height }}
        >
            <Image
                style={styles.Image} resizeMode="center" source={require("../images/Allway-Services-.png")} />

        </View>


    );
};

const styles = StyleSheet.create({

    Image: {
        width: '100%',
        marginBottom: 100,
        height: '50%',
        // backgroundColor:'red'
        // marginTop: Dimensions.get('screen').height * 0.1,

    },
});

export default SplashScreen;
