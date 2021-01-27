/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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



const CompletedRequests = props => {
    const navigation = useNavigation();
    const language = useSelector(state => state.application.language);
    const completedOrders = useSelector(state => state.orders.completedOrders);
    console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    console.log(completedOrders);
    console.log('pendiiiiiiiiiiiiiiiiiiiiiiiiign');
    const dispatch = useDispatch();
    const [error, setError] = useState();

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

    return (

        <ScrollView
            style={styles.screen}
        >
            <View style={{ flex: 1, }}>
                {completedOrders.map((order) => {
                    return (

                        <View
                            key={order.id}
                            style={{ flex: 1, backgroundColor: Colors.darkGrey, marginTop: 20, marginHorizontal: 10, borderRadius: 10, padding: 10, paddingBottom:0, }}
                        >
                            <View style={{ flexDirection: 'column' }}>
                                <View
                                    style={{
                                        // flex: 4,
                                        height: Dimensions.get('window').height/7,
                                        // backgroundColor: 'yellow',
                                     }}
                                >
                                    <Text
                                        style={{ ...styles.textDetails, color: '#0094de', fontSize: 25 }}
                                    >
                                        {/* {'Fares Saab'} */}
                                        {CLientName}
                                        {': '}
                                        {order.clientname}
                                    </Text>

                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {OrderPrice}{': '} {order.orderprice}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {DeliveryPrice}{': '} {order.deliveryprice}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {Commission}{': '} {order.commission}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {pickUp}{': '} {order.pickup}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {destination}{': '} {order.destination}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {orderDate}{': '} {order.order_date}
                                    </Text>
                                    <Text
                                        style={{ ...styles.textDetails }}
                                    >
                                        {orderTime}{': '} {order.order_time}
                                    </Text>
                                </View>


                                <View
                                style={{flex:1, height: Dimensions.get('window').height/12, width:Dimensions.get('window').width-20 , flexDirection:'row', marginTop:75, alignSelf:'center', borderBottomLeftRadius:10, borderBottomRightRadius:10, overflow:'hidden'}}
                                >
                                <TouchableOpacity
                                    style={{
                                        height:'100%',
                                        width:(Dimensions.get('window').width-20),
                                        backgroundColor: Colors.primary,
                                        justifyContent:'center',
                                        paddingVertical:0,
                                        elevation: 10,
                                        // borderRadius:10,
                                    }}

                                    onPress={
                                        () => {
                                           navigation.navigate('OrderDetails');
                                          handleSetOrderDetails(order.id); // cahnge it later to order.id from redux, like next line:
                                        //   console.log(order.id);
                                          // handleSetOrders(id, 'pending');
                                        }
                                      }
                                >
                               
                               <Icon name={'eye'} size={40} style={{alignSelf:'center', color:Colors.white}} />
                                    <Text
                                    style={{ ...styles.textStyle, fontFamily: 'open-sans-bold'   }}
                                    >{Details}</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
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
        padding:8,

        flex:1,
        // padding: 10,
        elevation: 10,
        // width:'80%',
        // marginTop:10,
      },
    textDetails:{
        fontFamily: 'open-sans-bold',
        color:'white',
        fontWeight:'bold',
    },
    textStyle: {
        color: "white",
        // fontWeight: "bold",
        textAlign: "center",
        fontSize:12,
      },
    Block: {
        // flex: 1,
        height: '100%',
        backgroundColor: 'grey',
        // margin:'1%',
        borderRadius: 10,
    },
});

export default CompletedRequests;

