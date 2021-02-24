/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as authActions from '../actions/auth';
import {useEffect} from 'react';

const ButtonBlock = (props) => {
  const language = useSelector((state) => state.application.language);
  const [isShiftStarted, setIsShiftStarted] = useState(userInfo);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const userStatus = useSelector((state) => state.auth.userInfo);
  const statusFromApi = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //     setIsShiftStarted(statusFromApi ? statusFromApi : false)
  //     setStatusHandler(userInfo.id, isShiftStarted);
  // },[statusFromApi]);

  const setStatusHandler = async (id, status) => {
    // console.log(status);
    let action;

    action = authActions.setStatus(id, status);

    // setError(null);
    // setIsLoading(true);
    try {
      await dispatch(action);
    } catch (err) {
      console.log(err.message);
      //   setError(err.message);
      //   setIsLoading(false);
    }
  };

  // console.log(language);
  return (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={() => {
        props.onPress();
        setIsShiftStarted(!isShiftStarted);
        // setStatusHandler(userInfo.id, !isShiftStarted);
        // setStatusHandler(1, isShiftStarted);
      }}>
      <View
        style={[
          styles.Block,
          props.style,
          {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        {props.icon ? (
          <Icon name={props.iconName} size={80} style={styles.Icon} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Block: {
    flex: 1,
    flexDirection: 'column',
    // height:'100%',
    margin: '3%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,

    // justifyContent: language == 'EN' ? 'flex-start' : 'flex-end',
    // backgroundColor: isShiftStarted ? 'red':'green',
  },
  Icon: {
    color: 'white',
    marginTop: 7,
    alignSelf: 'center',
  },
});

export default ButtonBlock;
