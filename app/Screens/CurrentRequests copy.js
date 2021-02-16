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
import colors from '../constants/Colors';
import { color } from 'react-native-reanimated';
import { Button, Divider } from 'react-native-paper';
import * as orderStatusActions from '../actions/orderStatus';




const CurrentRequests = props => {
    const language = useSelector(state => state.application.language);
    const userInfo = useSelector(state => state.auth.userInfo);
    const driverInfoFromRedux = useSelector(state => state.auth.driverInfoList);
    const [orderID, setOrderID] = useState();
    const orderDetails = useSelector(state => state.orderDetails.orderDetails ? state.orderDetails.orderDetails : 'no data');
    // const phoneNumber = runingOrders?.phone ? runingOrders.phone : null;
    console.log('phoooooooooooooooooooooooooone')
    // console.log(phoneNumber);
    console.log('phooooooooooooooooooooooooooooooooooooooooooooooooooooone')
    const navigation = useNavigation();
    const runingOrders = useSelector(state => state?.orders?.runingOrders ? state.orders.runingOrders : null);
    console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    console.log(runingOrders);
    console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    const dispatch = useDispatch();
    const [error, setError] = useState();
    // console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    // console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    const [modalVisible, setModalVisible] = useState(false);

    let CLientName = language == 'EN' ? 'CLient Name' : 'اسم العميل';
    let OrderPrice = language == 'EN' ? 'OrderPrice' : 'سعر الطلب';
    let DeliveryPrice = language == 'EN' ? 'Delivery Price' : 'سعر التوصيل';
    let Commission = language == 'EN' ? 'Commission' : 'العمولة';
    let pickUp = language == 'EN' ? 'pickUp' : 'التسليم';
    let destination = language == 'EN' ? 'Destination' : 'الوجهة';
    let orderDate = language == 'EN' ? 'Order Date' : 'تاريخ الطلب';
    let orderTime = language == 'EN' ? 'Order Time' : 'وقت الطلب';
    let Finish = language == 'EN' ? 'Complete' : 'إنهاء';
    let Details = language == 'EN' ? 'Details' : 'التفاصيل';
    let Cancel = language == 'EN' ? 'Cancel' : 'إلغاء';
    let Complete = language == 'EN' ? 'Complete' : 'إكمال';
    let WasPaid = language == 'EN' ? 'Was the order paid ?' : 'هل كان الطلب مدفوع ؟';
    let NotPaid = language == 'EN' ? 'Not Paid' : 'ليس مدفوع';
    let Paid = language == 'EN' ? 'Paid' : 'مدفوع';
    let notAvailable = language == 'EN' ? 'not available' : 'غير متوفر';
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
    const handleOrderStatusIfPaid = async (isPaid, oID) => {
        let channgeStatusAction = orderStatusActions.setOrderStatusIfPaid(isPaid, oID);
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

    const handleSetOrderDetails = async (order_ID) => {
        let action;
        action = orderDetailsActions.setOrderDetails(order_ID);
        try {
            // console.log('clicked')
            await dispatch(action);
            console.log('handleorders started working from homescreen');

        } catch (err) {
            console.log('clicked')
            console.log('handleorders faced problem in home screen');
            setError(err.message);
            console.log('err msg is');
            console.log(err.message);
            console.log('err msg is');
        }
    };

    return (
        <ScrollView
            style={styles.screen}
        >
            <View style={{ flex: 1, }}>
                {runingOrders.map((order) => {


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
                                            height: Dimensions.get('window').height / 3,
                                            // backgroundColor: 'yellow',
                                        }}
                                    >

                                        <View
                                            style={{
                                                flexDirection: language == 'EN' ? 'row' : 'row-reverse',
                                                alignItems: 'center',
                                                marginVertical: 10,
                                            }}
                                        >

                                            <Icon name={'face-profile'} size={30} style={{ color: 'white', marginRight: 0 }} />

                                            <Text
                                                style={{
                                                    ...styles.textDetails,
                                                    color: 'white',
                                                    fontSize: 25,
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
                                                    fontSize: 20,
                                                    marginLeft: 10
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

                                            <Icon name={'clock'} size={30} style={{ color: 'white' }} />

                                            <Text
                                                style={{ ...styles.textDetails, fontSize: 25, marginLeft: 10, fontWeight: 'normal', color: 'white' }}
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
                                                style={{ ...styles.textDetails, fontSize: 25, color: 'white', marginLeft: 10, fontWeight: 'normal' }}
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
                                                style={{ ...styles.textDetails, marginLeft: 10, color: 'white', fontSize: 18 }}
                                            >
                                                {orderDate}{': '} {order.order_date}
                                            </Text>
                                            <Icon name={'clock'} size={30} style={{ color: 'white', marginLeft: 10 }} />
                                            <Text
                                                style={{ ...styles.textDetails, marginLeft: 0, color: 'white', fontSize: 18 }}
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
                                            style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: 'white' }}
                                        >
                                            {OrderPrice}{': '} {order.orderprice}
                                        </Text>
                                        <Divider />
                                        <Text
                                            style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: 'white' }}
                                        >
                                            {DeliveryPrice}{': '} {order.deliveryprice}
                                        </Text>
                                        <Divider />
                                        <Text
                                            style={{ ...styles.textDetails, fontWeight: 'normal', marginLeft: 40, marginVertical: 5, color: 'white' }}
                                        >
                                            {Commission}{': '} {order.commission}
                                        </Text>
                                    </View>


                                    <View
                                        style={{ flex: 1, height: Dimensions.get('window').height / 10, width: Dimensions.get('window').width - 20, flexDirection: 'row', marginTop: Dimensions.get('window').height / 10, alignSelf: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, overflow: 'hidden' }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                ...styles.openButton2,
                                                backgroundColor: '#db8e3b',
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

                                            <Icon name={'eye'} size={44} style={{ alignSelf: 'center', color: 'white' }} />
                                            <Text
                                                style={{ ...styles.textStyle, fontSize: 18, fontFamily: 'open-sans-bold' }}
                                            >{Details}</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity
                                    style={{ ...styles.openButton, justifyContent: 'center', backgroundColor: "green", alignSelf: 'center', width: (Dimensions.get('window').width - 20) / 2 }}
                                    onPress={() => {
                                        // setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Icon name={'arrow-right-drop-circle'} size={40} style={{ alignSelf: 'center', color: 'white' }} />
                                    <Text style={styles.textStyle}>{Start}</Text>
                                </TouchableOpacity> */}
                                        <TouchableOpacity
                                            style={{
                                                ...styles.openButton2,
                                                backgroundColor: colors.green,
                                            }}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                                handleSetOrderDetails(order.id);
                                                // console.warn(orderID);
                                                // orderID=order.id;

                                            }}
                                        // disabled={driverInfoFromRedux.status == 0 ? true : false}
                                        >


                                            <Icon name={'arrow-left-drop-circle-outline'} size={44} style={{ alignSelf: 'center', color: 'white' }} />
                                            <Text style={{ ...styles.textStyle, fontSize: 18 }}>{Complete}</Text>
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

                                        <Text style={{ ...styles.textStyle, color: 'black', fontWeight: 'bold', fontSize: 20 }}>
                                            {WasPaid}
                                        </Text>

                                        {/* {orderDetails.status === 'pending' 
                                            ?
                                            <Text style={{ ...styles.textStyle, color: 'black' }}>Do you want to start</Text>
                                            :
                                            <Text style={{ ...styles.textStyle, color: 'black' }}>was the order Paid/Not paid?</Text>

                                            } */}

                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 20, height: 100, width: '100%' }}
                                        >


                                            {/* <Button
                                                style={{ marginHorizontal: 20 }}
                                                mode="contained" onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    console.log(modalVisible);
                                                    handleOrderStatus(
                                                        orderID,
                                                        userInfo.id,
                                                        'completed');
                                                }}>
                                                No
                                             </Button> */}
                                            <TouchableOpacity
                                                style={{ ...styles.openButton, backgroundColor: colors.green }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    // console.warn(orderDetails.id);
                                                    handleOrderStatus(
                                                        orderDetails.id,
                                                        userInfo.id,
                                                        'completed');
                                                    handleOrderStatusIfPaid(0, orderDetails.id);
                                                    // console.warn(modalVisible);
                                                }}
                                            >
                                                <Text
                                                    style={styles.textDetails}
                                                >{NotPaid}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ ...styles.openButton, backgroundColor: colors.primary }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    console.log(modalVisible);
                                                    handleOrderStatus(
                                                        orderDetails.id,
                                                        userInfo.id,
                                                        'completed');
                                                    handleOrderStatusIfPaid(1, orderDetails.id);
                                                }}
                                            >
                                                <Text
                                                    style={styles.textDetails}
                                                >{Paid}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ ...styles.openButton, backgroundColor: colors.red, }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    console.log(modalVisible);
                                                }}
                                            >
                                                <Text
                                                    style={styles.textDetails}
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
        padding: 8,
        borderRadius: 10,
        height: 50,
        maxHeight: 80,
        flex: 1,
        elevation: 10,
        width: 200,
        maxWidth: 300,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // width:'80%',
        // marginTop:10,
    },
    textDetails: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
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
    openButton2: {
        height: '100%',
        width: (Dimensions.get('window').width / 2),
        justifyContent: 'center',
        paddingVertical: 0,
        elevation: 10,
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

export default CurrentRequests;

