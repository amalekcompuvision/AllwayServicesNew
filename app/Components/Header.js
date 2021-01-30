/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu } from 'react-native-paper';




const Header = props => {


    // console.log(language);
    return (
        <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: Dimensions.get('screen').height / 9 }}
        >
            <Image
                style={styles.Image} resizeMode="cover" source={require("../images/Allway-Services-.png")} />

            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}   >
                <TouchableOpacity
                    style={{ position: 'relative' }}
                    onPress={() => {
                        //   this.props.navigation.navigate('Notifications');
                    }}>
                    <Icon name="bell-outline" size={30} style={{ color: 'white' }} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ position: 'relative' }}
                    onPress={() => {
                        props.onPress();
                        //   this.props.navigation.navigate('Notifications');
                    }}>
                    <Icon name="dots-vertical" size={30} style={{ color: 'white' }} />

                </TouchableOpacity>



            </View>

        </View>


    );
};

const styles = StyleSheet.create({

    Image: {
        width: Dimensions.get('screen').width / 2,
        marginBottom: 5,
        height: Dimensions.get('screen').width / 4,
        // backgroundColor:'red'
        // marginTop: Dimensions.get('screen').height * 0.1,

    },
});

export default Header;
