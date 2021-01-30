/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Block from '../Components/Block';
import { useSelector } from 'react-redux';


const Profile = props => {
    const driverInfo = useSelector(state => state.auth.driverInfo ? state.auth.driverInfo : 'no data');
    // console.log('infooooooooooooooooooooo')
    // console.log(driverInfo);
    return (

        <View style={styles.container}>
            <View style={styles.Block}>
                <Text>{driverInfo.comissionrate}</Text>
            </View>
        </View>



    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: '1%',
    },

    Block: {
        flex: 1,
        height: '88%',
        backgroundColor: 'grey',
        // margin:'1%',
        borderRadius: 10,
    },
});

export default Profile;

