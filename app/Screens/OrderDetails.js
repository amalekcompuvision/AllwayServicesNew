/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Block from '../Components/Block';
import { useDispatch, useSelector } from 'react-redux';
import { color } from 'react-native-reanimated';
import * as orderStatusActions from '../actions/orderStatus';
import colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const OrderDetails = (props) => {
    const navigation = useNavigation();
    const language = useSelector(state => state.application.language);
    const orderDetails = useSelector(state => state.orderDetails.orderDetails ? state.orderDetails.orderDetails : 'no data');
    const driverInfo = useSelector(state => state.auth.userInfo);
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    console.log(orderDetails);

    let CLientName = language == 'EN' ? 'CLient Name' : 'اسم العميل';
    let Price = language == 'EN' ? 'Price' : 'السعر ';
    let orderDate = language == 'EN' ? 'Order Date' : 'تاريخ الطلب';
    let orderId = language == 'EN' ? 'Order Id' : 'رقم الطلب ';
    let ProductName = language == 'EN' ? 'Product Name' : 'اسم المنتج ';
    let Total = language == 'EN' ? 'Total' : 'السعر الاجمالي ';
    let isPaid = language == 'EN' ? 'is Paid' : 'مدفوع ';
    let Quantity = language == 'EN' ? 'Quantity' : 'الكمية ';
    let Details = language == 'EN' ? 'Details' : 'التفاصيل ';
    let Complete = language == 'EN' ? 'Complete' : 'اكمال ';
    let Start = language == 'EN' ? 'Start' : 'ابدأ ';
    let ordertime = language == 'EN' ? 'ordertime' : 'توقيت الطلب ';
    let pick_up = language == 'EN' ? 'pick up' : 'اصطحاب ';
    let destination = language == 'EN' ? 'destination' : 'الوجهة ';
    let delivery_price = language == 'EN' ? 'Delivery Price' : 'سعر التوصيلة';
    let commission = language == 'EN' ? 'commission' : 'العمولة ';
    let status = language == 'EN' ? 'status' : 'الحالة ';
    let total = language == 'EN' ? 'total' : 'المجموع ';
    let notes = language == 'EN' ? 'notes' : 'ملاحظات ';



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
    const handleOrderStatusIfPaid = async (isPaid, orderID) => {
        let channgeStatusAction = orderStatusActions.setOrderStatusIfPaid(isPaid, orderID);
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


    // console.log('infooooooooooooooooooooo')
    // console.log(driverInfo);
//     /// /  /  // /e()/ 


// notes
// clientlastnam
// total
//     status
// clientname// fname/ lname / pickup /dest(bold) /delivr pric /commission
// order id/ order date/  order price /total /ispaid /order time
    return (

        <View style={styles.container}>
            <View style={{...styles.Block,  alignItems: language == 'EN' ? 'flex-start' : 'flex-end',}}>
                
                <Text style={styles.textStyle}>{orderId}{': '}{orderDetails.id}</Text>
                <Text style={styles.textStyle}>{orderDate}{': '}{orderDetails.orderdate}</Text>
                <Text style={styles.textStyle}>{ordertime}{': '}{orderDetails.ordertime}</Text>
                <Text style={styles.textStyle}>{pick_up}{': '}{orderDetails.pick_up}</Text>
                <Text style={styles.textStyle}>{destination}{': '}{orderDetails.destination}</Text>
                <Text style={styles.textStyle}>{delivery_price}{': '}{orderDetails.delivery_price}</Text>
                <Text style={styles.textStyle}>{commission}{': '}{orderDetails.commission}</Text>
                <Text style={styles.textStyle}>{status}{': '}{orderDetails.status}</Text>
                <Text style={styles.textStyle}>{total}{': '}{orderDetails.total}</Text>
                <Text style={styles.textStyle}>{notes}{': '}{orderDetails.notes}</Text>
                <Text style={styles.textStyle}>{CLientName}{': '}{orderDetails.clientname}</Text>
                {/* <Text style={styles.textStyle}>{ProductName}{': '}{orderDetails.producttitle}</Text> */}
                <Text style={styles.textStyle}>{Price}{': '}{orderDetails.orderprice}</Text>
                <Text style={styles.textStyle}>{Total}{': '}{orderDetails.total}</Text>
                <Text style={styles.textStyle}>{isPaid}{': '}{orderDetails.ispaid == 1 ? "Yes" : "No"}</Text>

                {/* <Text style={styles.textStyle}>{Quantity}{': '}{orderDetails.orderquantaty}</Text> */}
                {/* <Text style={styles.textStyle}>{Details}{': '}{orderDetails.message}</Text> */}

                {orderDetails.status === 'completed'
                    ?
                    null
                    :
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: colors.green, alignSelf: 'center' }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View>
                            <Icon name={orderDetails.status === 'pending' ? 'arrow-right-drop-circle' : 'stop-circle'} size={40} style={{ alignSelf: 'center', color: 'white' }} />
                            <Text style={styles.textStyle}>{orderDetails.status === 'pending' ? Start : Complete}</Text>
                        </View>
                    </TouchableHighlight>
                }
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
                        {orderDetails.status === 'pending' 
                        ?
                        <Text style={{ ...styles.textStyle, color: 'black' }}>Do you want to start</Text>
                        :
                        <Text style={{ ...styles.textStyle, color: 'black' }}>was the order Paid/Not paid?</Text>

                        }

                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            {orderDetails.status === 'pending' ? null :
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: colors.green, width: 100, marginHorizontal: 10 }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        handleOrderStatus(orderDetails.id, driverInfo.id, orderDetails.status === 'pending' ? 'running' : 'completed');
                                        handleOrderStatusIfPaid(1, orderDetails.id);
                                    }}
                                >
                                    <Text style={styles.textStyle}>{'Paid'}</Text>
                                </TouchableHighlight>
                            }
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: colors.primary, width: 100, marginHorizontal: 10 }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    handleOrderStatus(orderDetails.id, driverInfo.id, orderDetails.status === 'pending' ? 'running' : 'completed');
                                }}
                            >
                                <Text style={styles.textStyle}>{orderDetails.status === 'pending' ? 'Yes' : 'Not paid'}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: colors.red, width: 100, marginHorizontal: 10 }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>



    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.black,

    },

    Block: {
        flex: 1,
        alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        height: '88%',
        backgroundColor: colors.darkGrey,
        // margin:'1%',
        paddingLeft: 20,
        borderRadius: 10,
        // borderColor: colors.primaryGold,
        borderWidth: 3,

    },
    text: {
        marginVertical: 5,
        textAlign: 'left',
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
    openButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 2,
        width: '80%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
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

export default OrderDetails;

