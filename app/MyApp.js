/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import PendingRequests from './Screens/PendingRequests';
import CurrentRequests from './Screens/CurrentRequests';
import CompletedRequests from './Screens/CompletedRequests';
import languageChoose from './Screens/languageChoose';
import Profile from './Screens/Profile';
import Login from './Screens/Login';
import Home from './Screens/Home';
import AuthScreen from './Screens/AuthScreen';
import OrderDetails from './Screens/OrderDetails';
import colors from './constants/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const RootStack = createStackNavigator();


const MyApp = prop => {
    const language = useSelector(state => state.application.language);


    return (
        <NavigationContainer>
            <StatusBar backgroundColor={Colors.black} />

            <RootStack.Navigator
            // mode="modal"
            //headerMode="none"
            // initialRouteName="Menu"
            >
                <RootStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="SplashScreen"
                    component={SplashScreen} />
                <RootStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="language Choose"
                    component={languageChoose} />
                {/* <RootStack.Screen name="Login" component={Login} /> */}
                <RootStack.Screen
                    options={{
                        headerShown: false,
                        headerStyle: {
                            ...styles.header,
                        },

                        headerTitleStyle: {
                            ...styles.headerTitle,
                        },
                        headerTintColor: colors.white,


                    }}
                    name="Login" component={AuthScreen} />
                <RootStack.Screen
                    options={{
                        headerShown: false,
                        title: 'My home',
                        headerStyle: {
                            ...styles.header,

                        },

                        headerTitleStyle: {
                            ...styles.headerTitle,
                        },
                        headerTintColor: colors.white,


                    }}
                    name="Home" component={Home} />
                <RootStack.Screen
                    options={{
                        title: language == 'EN' ? 'Current Requests' : 'الطلبات الجارية',
                        headerStyle: {
                            ...styles.header,
                        },
                        headerTintColor: colors.white,

                    }}
                    name="Current Requests" component={CurrentRequests} />
                <RootStack.Screen
                    options={{
                        title: language == 'EN' ? 'Completed Requests' : 'الطلبات المنتهية',
                        headerStyle: {
                            ...styles.header,
                        },
                        headerTintColor: colors.white,

                    }}
                    name="Completed Requests" component={CompletedRequests} />

                <RootStack.Screen
                    options={{
                        title: language == 'EN' ? 'Pendng Requests' : 'الطلبات الواردة',
                        headerStyle: {
                            ...styles.header,
                        },
                        headerTitleStyle: {
                            ...styles.headerTitle,
                        },
                        headerTintColor: colors.white,


                    }}
                    name="Incoming Orders" component={PendingRequests} />


                <RootStack.Screen
                    options={{

                        headerStyle: {
                            ...styles.header,
                        },
                        headerTitleStyle: {
                            ...styles.headerTitle,
                        },
                        headerTintColor: colors.white,
                    }}
                    name="Profile" component={Profile} />
                <RootStack.Screen
                    options={{
                        headerStyle: {
                            ...styles.header
                        },
                        headerTitleStyle: {
                            ...styles.headerTitle,
                        },
                        headerTintColor: colors.white,
                    }}
                    name="OrderDetails" component={OrderDetails} />



            </RootStack.Navigator>

            {/* <View style={styles.screen}>
                <Text>
                    hellossssss
                </Text>
            </View> */}

        </NavigationContainer>

    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: 'red',
    },
    header: {
        backgroundColor: colors.black,
    },
    headerTitle: {
        color: colors.white,
    },
    Icon: {
        color: 'white',
        marginTop: 0,

    },
});

export default MyApp;

