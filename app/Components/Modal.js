/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableHighlight , Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Badge } from 'react-native-paper';
import colors from '../constants/Colors';



const Modal = props => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
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

                    <Text style={{ ...styles.textStyle, color: 'black' }}>was the order Paid/Not paid?</Text>


                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    >
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



    );
};

const styles = StyleSheet.create({
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        fontSize: 20,
    },
    openButton: {
        backgroundColor: colors.red,
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 2,
        width: '80%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },


});

export default Modal;
