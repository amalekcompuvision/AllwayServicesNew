/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, TouchableOpacity, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Block from '../Components/Block';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as orderDetailsActions from '../actions/orderDetails';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { color } from 'react-native-reanimated';
import colors from '../constants/Colors';
import * as orderStatusActions from '../actions/orderStatus';
import { Button, Divider } from 'react-native-paper';



const PendingRequests = props => {
    const language = useSelector(state => state.application.language);
    const navigation = useNavigation();
    // const phoneNumber = pendingOrders?.phone ? pendingOrders.phone : 'Not available';
    const driverInfoFromRedux = useSelector(state => state.auth.driverInfoList);

    const pendingOrders = useSelector(state => state?.orders?.pendingOrders ? state.orders.pendingOrders : null);
    // console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    // console.log(pendingOrders.id);
    // console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const userInfo = useSelector(state => state.auth.userInfo);
    const orderDetails = useSelector(state => state.orderDetails.orderDetails ? state.orderDetails.orderDetails : 'no data');


    let CLientName = language == 'EN' ? 'Client Name' : 'اسم العميل';
    let OrderPrice = language == 'EN' ? 'OrderPrice' : 'سعر الطلب';
    let DeliveryPrice = language == 'EN' ? 'Delivery Price' : 'سعر التوصيل';
    let Commission = language == 'EN' ? 'Commission' : 'العمولة';
    let pickUp = language == 'EN' ? 'PickUp' : 'التسليم';
    let destination = language == 'EN' ? 'Destination' : 'الوجهة';
    let orderDate = language == 'EN' ? 'Order Date' : 'تاريخ الطلب';
    let orderTime = language == 'EN' ? 'Order Time' : 'وقت الطلب';
    let Start = language == 'EN' ? 'Start' : 'البدء';
    let Details = language == 'EN' ? 'Details' : 'التفاصيل';
    let UWannaSTart = language == 'EN' ? 'Do you want to start ?' : 'هل تريد البدأ ؟';
    let Yes = language == 'EN' ? 'Yes' : 'نعم';
    let Cancel = language == 'EN' ? 'Cancel' : 'إلغاء';
    let notAvailable = language == 'EN' ? 'not available' : 'غير متوفر';
    let ShiftWarningTitle = language == 'EN' ? 'Start Shift First' : ' ابدأ مناوبة اولا';
    let ShiftWarningBody = language == 'EN' ? 'please start shift before from home screen' : 'يرجى بدأ المناوبة من الشاشة الرئيسية اولا';
    let orderPhoneNumber = language == 'EN' ? 'Phone number' : 'رقم الهاتف';



    const handleOrderStatus = async (orderID, driverId, status) => {
        let channgeStatusAction = orderStatusActions.setOrderStatus(orderID, driverId, status);
        try {
            // console.log('clicked')
            await dispatch(channgeStatusAction);
            console.log('handleorders started working from homescreen');
            navigation.replace('Home');



        } catch (err) {
            // console.log('clicked')
            console.log('handleorders faced problem in home screen');
            setError(err.message);
            console.log('err msg is');
            console.log(err.message);
            console.log('err msg is');
        }
    };

    const handleSetOrderDetails = async (orderID) => {
        let action;
        action = orderDetailsActions.setOrderDetails(orderID);
        try {
            // console.log('clicked')
            await dispatch(action);
            navigation.navigate('OrderDetails');
            console.log('handleorders started working from homescreen');

        } catch (err) {
            // console.log('clicked')
            console.log('handleorders faced problem in home screen');
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
            return 15;
        } else {
            return 12;
        }
    }
    // console.warn(marginTopScreenSize(width));

    function marginTopScreenSize(screenWidth) {
        if (screenWidth >= 420) {
            return '8%';
        } else if (screenWidth >= 390) {
            return '25%';
        } else if (screenWidth >= 250) {
            return '40%';
        } else {
            return '40%';
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
                {pendingOrders.map((order) => {
                    orderID = order.id;
                    return (


                        <View
                            key={order.id}
                            style={{ flex: 1 }}
                        >
                            <View
                                style={{ flex: 1, backgroundColor: Colors.darkGrey, marginTop: 20, marginHorizontal: 10, borderRadius: 10, padding: 10, paddingBottom: 0, }}
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

                                            <Icon name={'face-profile'} size={30} style={{ color: colors.white, marginRight: 0 }} />

                                            <Text
                                                style={{
                                                    ...styles.textDetails,
                                                    color: colors.white,
                                                    fontSize: fontSizerBig(width),
                                                    marginLeft: 10
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
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                marginVertical: 10,
                                            }}
                                        >

                                            <Icon name={'face-profile'} size={30} style={{ color: 'white', marginRight: 0 }} />

                                            <Text
                                                style={{
                                                    ...styles.textDetails,
                                                    color: 'white',
                                                    fontSize: fontSizerMedium(width),
                                                    marginLeft: 10,
                                                }}
                                            >
                                                {/* {'Fares Saab'} */}
                                                {orderPhoneNumber}
                                                {': '}
                                                {order.phone ? order.phone : notAvailable}
                                            </Text>
                                            {order.phone
                                                ?
                                                <TouchableOpacity
                                                    style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginHorizontal: 20,
                                                        height: 30,
                                                        // width: 50,
                                                        // backgroundColor: colors.primary,
                                                        borderRadius: 10,
                                                        paddingHorizontal: 10,
                                                        // paddingHorizontal: 10,
                                                    }}
                                                    onPress={() => {

                                                    }}
                                                >
                                                    <Icon name={'phone'} size={30} style={{ color: colors.green, marginRight: 10 }}
                                                        onPress={() => {
                                                            Linking.openURL(`tel:${order.phone}`)
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                                :
                                                null}

                                        </View>





                                        <Divider />
                                        <View
                                            style={{
                                                flexDirection: language == 'EN' ? 'row' : 'row-reverse',
                                                alignItems: 'center',
                                                marginBottom: 10
                                            }}

                                        >

                                            <Icon name={'clock'} size={30} style={{ color: colors.white }} />

                                            <Text
                                                style={{ ...styles.textDetails, fontSize: fontSizerMedium(width), marginLeft: 10, fontWeight: 'normal', color: colors.white }}
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

                                            <Icon name={'car-hatchback'} size={30} style={{ color: colors.white }} />
                                            <Text
                                                style={{ ...styles.textDetails, fontSize: fontSizerMedium(width), color: colors.white, marginLeft: 10, fontWeight: 'normal' }}
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
                                            <Icon name={'calendar-month'} size={30} style={{ color: colors.white }} />

                                            <Text
                                                style={{ ...styles.textDetails, marginLeft: 10, color: colors.white, fontSize: fontSizerSmall(width) }}
                                            >
                                                {orderDate}{': '} {order.order_date}
                                            </Text>
                                            <Icon name={'clock'} size={30} style={{ color: colors.white, marginLeft: 10 }} />
                                            <Text
                                                style={{ ...styles.textDetails, marginLeft: 0, color: colors.white, fontSize: fontSizerSmall(width) }}
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
                                            <Icon name={'clock'} size={30} style={{ color: colors.white }} />

                                            <Text
                                                style={{ ...styles.textDetails, marginLeft: 10, color: colors.white, fontSize: 15 }}
                                            >
                                                {orderTime}{': '} {order.order_time}
                                            </Text>

                                        </View> */}
                                        <Divider />
                                        <Text
                                            style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: colors.white, fontSize: fontSizerSmall(width) }}
                                        >
                                            {OrderPrice}{': '} {order.orderprice}
                                        </Text>
                                        <Divider />
                                        <Text
                                            style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: colors.white, fontSize: fontSizerSmall(width) }}
                                        >
                                            {DeliveryPrice}{': '} {order.deliveryprice}
                                        </Text>
                                        <Divider />
                                        <Text
                                            style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: colors.white, fontSize: fontSizerSmall(width) }}
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
                                                width: (Dimensions.get('window').width / 2),
                                                backgroundColor: '#db8e3b',
                                                justifyContent: 'center',
                                                paddingVertical: 0,
                                                elevation: 10,
                                                // borderRadius:10,
                                            }}

                                            onPress={
                                                () => {
                                                    handleSetOrderDetails(order.id); // cahnge it later to order.id from redux, like next line:
                                                    // navigation.navigate('OrderDetails');
                                                    //   console.log(order.id);
                                                    // handleSetOrders(id, 'pending');
                                                }
                                            }
                                        >

                                            <Icon name={'eye'} size={iconSizeRelative(width)} style={{ alignSelf: 'center', color: Colors.white }} />
                                            <Text
                                                style={{ ...styles.textStyle, fontFamily: 'open-sans-bold', fontSize: fontSizerMedium(width) }}
                                            >{Details}</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity
                                        style={{ ...styles.openButton2, justifyContent: 'center', backgroundColor: "green", alignSelf: 'center', width: (Dimensions.get('window').width - 20) / 2 }}
                                        onPress={() => {
                                            // setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Icon name={'arrow-right-drop-circle'} size={40} style={{ alignSelf: 'center', color: colors.white }} />
                                        <Text style={styles.textStyle}>{Start}</Text>
                                    </TouchableOpacity> */}
                                        <TouchableOpacity
                                            style={{ ...styles.openButton, justifyContent: 'center', height: '100%', backgroundColor: colors.green, alignSelf: 'center', width: (width - 20) / 2 }}
                                            onPress={() => {
                                                driverInfoFromRedux.status == 0 ?
                                                    Alert.alert(
                                                        ShiftWarningTitle,
                                                        ShiftWarningBody
                                                    )
                                                    :


                                                    setModalVisible(!modalVisible);
                                                console.log(modalVisible);

                                            }}
                                        // disabled={driverInfoFromRedux.status == 0 ? true : false}

                                        >


                                            <Icon name={'arrow-right-drop-circle'} size={iconSizeRelative(width)} style={{ alignSelf: 'center', color: 'white' }} />
                                            <Text style={{ ...styles.textStyle, fontSize: fontSizerMedium(width) }}>{Start}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                            <Modal
                                style={styles.ModalContainer}
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);

                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>

                                        <Text style={{ ...styles.textStyle, color: 'black' }}>{UWannaSTart}</Text>

                                        {/* {orderDetails.status === 'pending' 
                        ?
                        <Text style={{ ...styles.textStyle, color: 'black' }}>Do you want to start</Text>
                        :
                        <Text style={{ ...styles.textStyle, color: 'black' }}>was the order Paid/Not paid?</Text>

                        } */}

                                        <View
                                            style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 20, height: Dimensions.get('screen').height / 7 }}
                                        >

                                            <TouchableOpacity
                                                style={{ ...styles.openButton2, backgroundColor: colors.green }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    console.log(modalVisible);
                                                    handleOrderStatus(
                                                        orderDetails.id,
                                                        userInfo.id,
                                                        'running');
                                                }}
                                            >
                                                <Text
                                                    style={{ ...styles.textDetails, fontSize: 20 }}
                                                >{Yes}</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={{ ...styles.openButton2, backgroundColor: colors.red, }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    console.log(modalVisible);
                                                }}
                                            >
                                                <Text
                                                    style={{ ...styles.textDetails, fontSize: 20 }}
                                                >{Cancel}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                        </View>
                    );
                })}

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
        width: 60,
        // flex: 1,
        // padding: 10,
        elevation: 10,
        // width:'80%',
        // marginTop:10,

    },
    openButton2: {
        backgroundColor: "#F194FF",
        // flex: 1,
        // padding: 10,
        // marginTop:10,
        padding: 8,
        borderRadius: 10,
        height: 50,
        maxHeight: 50,
        elevation: 10,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDetails: {
        fontFamily: 'open-sans-bold',
        color: colors.white,
        fontWeight: 'bold',
    },
    textStyle: {
        color: "white",
        // fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'
    },
    Block: {
        // flex: 1,
        height: '100%',
        backgroundColor: 'grey',
        // margin:'1%',
        borderRadius: 10,
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingVertical: 35,
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
    openButton22: {
        backgroundColor: colors.red,
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: '80%',
        marginTop: 10,
    },
    textStyleTow: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});

export default PendingRequests;

