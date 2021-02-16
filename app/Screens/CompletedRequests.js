/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Block from '../Components/Block';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as orderDetailsActions from '../actions/orderDetails';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { color } from 'react-native-reanimated';
import { Divider } from 'react-native-paper';



const CompletedRequests = props => {
    const navigation = useNavigation();
    const language = useSelector(state => state.application.language);
    const completedOrders = useSelector(state => state?.orders?.completedOrders ? state.orders.completedOrders : null);
    console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    console.log(completedOrders);
    console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const userInfo = useSelector(state => state.auth.userInfo);

    let CLientName = language == 'EN' ? 'CLient Name' : 'اسم العميل';
    let OrderPrice = language == 'EN' ? 'OrderPrice' : 'سعر الطلب';
    let DeliveryPrice = language == 'EN' ? 'Delivery Price' : 'سعر التوصيل';
    let Commission = language == 'EN' ? 'Commission' : 'العمولة';
    let pickUp = language == 'EN' ? 'pickUp' : 'التسليم';
    let destination = language == 'EN' ? 'Destination' : 'الوجهة';
    let orderDate = language == 'EN' ? 'Order Date' : 'تاريخ الطلب';
    let orderTime = language == 'EN' ? 'Order Time' : 'وقت الطلب';
    let Details = language == 'EN' ? 'Details' : 'التفاصيل';





    const handleSetOrderDetails = async (orderID) => {
        let action;
        action = orderDetailsActions.setOrderDetails(orderID);
        try {
            // console.log('clicked')
            await dispatch(action);
            console.log('handleorders started working from homescreen');

        } catch (err) {
            console.log('clicked')
            //   console.log('handleorders faced problem in home screen');
            setError(err.message);
            console.log('err msg is');
            console.log(err.message);
            console.log('err msg is');
        }
    };
    const {
        width,
        height,
    } = Dimensions.get('window');
    console.warn(width);
    // console.warn(height);

    function fontSizerBig(screenWidth) {
        if (screenWidth >= 800) {
            return 35;
        } else if (screenWidth >= 370) {
            return 20;
        } else if (screenWidth >= 250) {
            return 20;
        } else {
            return 12;
        }
    }
    function fontSizerMedium(screenWidth) {
        if (screenWidth >= 800) {
            return 35;
        } else if (screenWidth >= 370) {
            return 18;
        } else if (screenWidth >= 250) {
            return 18;
        } else {
            return 12;
        }
    }
    function fontSizerSmall(screenWidth) {
        if (screenWidth >= 800) {
            return 32;
        } else if (screenWidth >= 370) {
            return 16;
        } else if (screenWidth >= 250) {
            return 12;
        } else {
            return 12;
        }
    }
    function marginTopScreenSize(screenWidth) {
        if (screenWidth >= 800) {
            return '5%';
        }
        else if (screenWidth >= 480) {
            return '0%';
        }
        else if (screenWidth >= 370) {
            return '8%';
        } else if (screenWidth >= 250) {
            return '25%';
        } else {
            return '35%';
        }
    }
    function iconSizeRelative(screenWidth) {
        if (screenWidth >= 800) {
            return 60;
        } else if (screenWidth >= 370) {
            return 40;
        } else if (screenWidth >= 250) {
            return 30;
        } else {
            return 20;
        }
    }



    return (

        <ScrollView
            style={styles.screen}
        >
            <View style={{ flex: 1, }}>
                {completedOrders == null
                    ?
                    <View
                        style={{ flex: 1, backgroundColor: 'black' }}
                    ></View>
                    :
                    completedOrders.map((order) => {
                        // console.log(order);
                        return (


                            <View
                                key={order.id}
                                style={{ flex: 1 }}
                            >
                                <View
                                    style={{ flex: 1, backgroundColor: '#262626', marginTop: 20, marginHorizontal: 10, borderRadius: 10, padding: 10, paddingBottom: 0, }}
                                >
                                    <View style={{ flexDirection: 'column' }}>
                                        <View
                                            style={{
                                                // flex: 4,
                                                height: height / 3,
                                                // backgroundColor: 'yellow',
                                            }}
                                        >

                                            <View
                                                style={{
                                                    flexDirection: language == 'EN' ? 'row' : 'row-reverse',
                                                    alignItems: 'center',
                                                    marginVertical: 5,
                                                }}
                                            >

                                                <Icon name={'face-profile'} size={30} style={{ color: 'white' }} />

                                                <Text
                                                    style={{
                                                        ...styles.textDetails,
                                                        color: 'white',
                                                        fontSize: fontSizerBig(width),
                                                    }}
                                                >
                                                    {/* {'Fares Saab'} */}
                                                    {CLientName}
                                                    {': '}
                                                    {order.clientname}
                                                </Text>
                                            </View>





                                            <Divider />
                                            <View
                                                style={{
                                                    flexDirection: language == 'EN' ? 'row' : 'row-reverse',
                                                    alignItems: 'center',
                                                    marginBottom: 10
                                                }}

                                            >

                                                <Icon name={'clock'} size={30} style={{ color: 'white' }} />

                                                <Text
                                                    style={{ ...styles.textDetails, fontSize: fontSizerBig(width), marginLeft: 10, fontWeight: 'normal', color: 'white' }}
                                                >
                                                    {pickUp}{': '} {order.pickup}
                                                </Text>
                                            </View>
                                            <Divider />
                                            <View
                                                style={{
                                                    flexDirection: language == 'EN' ? 'row' : 'row-reverse', marginBottom: 10,
                                                }}
                                            >

                                                <Icon name={'car-hatchback'} size={30} style={{ color: 'white' }} />
                                                <Text
                                                    style={{ ...styles.textDetails, fontSize: fontSizerBig(width), color: 'white', marginLeft: 10, fontWeight: 'normal' }}
                                                >
                                                    {destination}{': '} {order.destination}
                                                </Text>
                                            </View>

                                            <Divider />

                                            <View
                                                style={{
                                                    flexDirection: language == 'EN' ? 'row' : 'row-reverse',
                                                    marginBottom: 5,
                                                    marginRight: language == 'EN' ? 70 : -70,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Icon name={'calendar-month'} size={30} style={{ color: 'white' }} />

                                                <Text
                                                    style={{ ...styles.textDetails, marginLeft: 10, color: 'white', fontSize: fontSizerSmall(width) }}
                                                >
                                                    {orderDate}{': '} {order.order_date}
                                                </Text>
                                                <Icon name={'clock'} size={30} style={{ color: 'white', marginLeft: 10 }} />
                                                <Text
                                                    style={{ ...styles.textDetails, marginLeft: 0, color: 'white', fontSize: fontSizerSmall(width) }}
                                                >
                                                    {order.order_time}
                                                </Text>

                                            </View>
                                            {/* <Divider />
                                        <View
                                            style={{
                                                flexDirection: language == 'EN' ? 'row' : 'row-reverse',
                                                marginBottom: 5,
                                                marginRight: language == 'EN' ? 70 : -70,
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Icon name={'clock'} size={30} style={{ color: 'white' }} />

                                            <Text
                                                style={{ ...styles.textDetails, marginLeft: 10, color: 'white', fontSize: 15 }}
                                            >
                                                {orderTime}{': '} {order.order_time}
                                            </Text>

                                        </View> */}
                                            <Divider />
                                            <Text
                                                style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: 'white', fontSize: fontSizerSmall(width) }}
                                            >
                                                {OrderPrice}{': '} {order.orderprice}
                                            </Text>
                                            <Divider />
                                            <Text
                                                style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: 'white', fontSize: fontSizerSmall(width) }}
                                            >
                                                {DeliveryPrice}{': '} {order.deliveryprice}
                                            </Text>
                                            <Divider />
                                            <Text
                                                style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: 'white', fontSize: fontSizerSmall(width) }}
                                            >
                                                {Commission}{': '} {order.commission}
                                            </Text>
                                        </View>


                                        <View
                                            style={{ flex: 1, height: height / 10, width: width - 20, flexDirection: 'row', marginTop: marginTopScreenSize(width), alignSelf: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, overflow: 'hidden' }}
                                        >
                                            <TouchableOpacity
                                                style={{
                                                    height: '100%',
                                                    width: (width - 20),
                                                    backgroundColor: '#db8e3b',
                                                    justifyContent: 'center',
                                                    paddingVertical: 0,
                                                    elevation: 10,
                                                    // borderRadius:10,
                                                }}

                                                onPress={
                                                    () => {
                                                        handleSetOrderDetails(order.id); // cahnge it later to order.id from redux, like next line:
                                                        navigation.navigate('OrderDetails');
                                                        //   console.log(order.id);
                                                        // handleSetOrders(id, 'pending');
                                                    }
                                                }
                                            >

                                                <Icon name={'eye'} size={iconSizeRelative(width)} style={{ alignSelf: 'center', color: 'white' }} />
                                                <Text
                                                    style={{ ...styles.textStyle, fontFamily: 'open-sans-bold', fontSize: fontSizerMedium(width), }}
                                                >{Details}</Text>
                                            </TouchableOpacity>
                                            {/* <TouchableOpacity
                                            style={{ ...styles.openButton, justifyContent: 'center', backgroundColor: "green", alignSelf: 'center', width: (Dimensions.get('window').width - 20) / 2 }}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                                console.log(modalVisible);
                                            }}
                                        >
                                            <Icon name={'arrow-right-drop-circle'} size={40} style={{ alignSelf: 'center', color: 'white' }} />
                                            <Text style={styles.textStyle}>Start</Text>
                                        </TouchableOpacity> */}
                                        </View>
                                    </View>


                                </View>


                            </View>
                        );
                    })
                }

            </View>
        </ScrollView>



    );

};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems:'center',
        // justifyContent:'center',
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 0,
        padding: 8,

        flex: 1,
        // padding: 10,
        elevation: 10,
        // width:'80%',
        // marginTop:10,
    },
    textDetails: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontWeight: 'bold',
    },
    textStyle: {
        color: "white",
        // fontWeight: "bold",
        textAlign: "center",
        fontSize: 12,
    },
    Block: {
        // flex: 1,
        height: '100%',
        backgroundColor: 'grey',
        // margin:'1%',
        borderRadius: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 0,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});

export default CompletedRequests;

