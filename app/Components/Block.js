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
import {useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Badge} from 'react-native-paper';

const Block = (props) => {
  const language = useSelector((state) => state.application.language);

  // console.log(language);
  return (
    <TouchableOpacity style={{...props.style, flex: 1}} onPress={props.onPress}>
      <View style={[styles.Block, props.style]}>
        {props.badge ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <Badge style={styles.badge} size={30}>
              {props.badge}
            </Badge>
          </View>
        ) : null}
        {props.icon ? (
          <Icon
            name={props.icon}
            size={props.size ? props.size : 60}
            style={styles.Icon}
          />
        ) : null}
        {props.title ? <Text style={styles.title}>{props.title}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Block: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(69,69,69,9)',
    margin: '3%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: language == 'EN' ? 'flex-start' : 'flex-end',
    // backgroundColor: isShiftStarted ? 'red':'green',
  },
  Icon: {
    color: 'white',
    marginTop: 0,
  },
  title: {
    color: 'white',
    marginHorizontal: 0,
    marginTop: 5,
    textAlign: 'center',
  },
  badge: {
    alignSelf: 'flex-end',
  },
});

export default Block;
