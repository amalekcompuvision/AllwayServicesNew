/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable space-infix-ops */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import Block from '../Components/Block';
import ButtonBlock from '../Components/ButtonBlock';
import { useState } from 'react';
import * as authActions from '../actions/auth';
import * as driverInfoActions from '../actions/driverInfo';
import * as ordersActions from '../actions/orders';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SyncStorage from 'sync-storage';
import { ApplicationActions } from '../actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';





const Home = props => {

  const [refreshing, setRefreshing] = useState(false);
  const language = useSelector(state => state.application.language);
  const navigation = useNavigation();
  const userInfo = useSelector(state => state.auth.userInfo);

  const driverInfoFromRedux = useSelector(state => state.auth.driverInfoList);
  // const [driverInfo, setDriverInfo] = useState(driverInfoFromRedux.status);
  // console.log('useeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerInfooooooooooooooooooooo')
  // console.warn(driverInfoFromRedux.status);
  // console.log('useeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerInfooooooooooooooooooooo')
  const counters = useSelector(state => state.driverinfo.ordersCount);
  const [error, setError] = useState();
  // console.log('useseeeeeeeeeeeeeeeeleeeeeeector');
  // console.log(userInfo);
  // console.log('useseeeeeeeeeeeeeeeeleeeeeeector');
  const [isShiftStarted, setIsShiftStarted] = useState(true);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();


  let CurrentOrders = language == 'EN' ? 'Current Orders' : 'الطلبات الجارية';
  let IncomingOrders = language == 'EN' ? 'Incoming Orders' : 'الطلبات الواردة';
  let OrderHistory = language == 'EN' ? 'Order History' : 'الطلبات المنتهية';
  let Stats = language == 'EN' ? 'Stats' : 'احصائيات';
  let ChangeLanguage = language == 'EN' ? 'Change Language' : 'تغيير اللغة';
  let SignOut = language == 'EN' ? 'Sign Out' : 'تسجيل الخروج';
  let changeLangAlertTitle = language == 'EN' ? 'Change Language !!' : 'تغيير اللغة؟';
  let changeLangAlertBody = language == 'EN' ? 'Are you sure you want to Change Language?' : 'هل تريد تأكيد تغيير اللغة؟';
  let No = language == 'EN' ? 'No' : 'كلا';
  let Yes = language == 'EN' ? 'Yes' : 'نعم';
  let logoutAlertTitle = language == 'EN' ? 'Logout!!' : 'تسجيل الخروج';
  let logoutAlertBody = language == 'EN' ? 'Are you sure you want to Logout?' : 'هل تريد تأكيد تسجيل الخروج؟';
  let startShift = language == 'EN' ? 'Start Shift ?' : 'بدأ المناوبة؟';
  let endShift = language == 'EN' ? 'End Shift ?' : 'انهاء المناوبة؟';
  let startShiftBody = language == 'EN' ? 'Are you sure you want to Start Shift ?' : 'هل بالتأكيد تريد بدأ المناوبة؟';
  let endShiftBody = language == 'EN' ? 'End Shift ?' : 'هل بالتأكيد تريد انهاء المناوبة؟';



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setCounters(userInfo.id).then(() => setRefreshing(false));
  }, []);


  useEffect(() => {
    //Update the state you want to be updated

  }, [isFocused])



  let id = typeof userInfo.id == undefined ? 'id' : userInfo.id;
  let fname = typeof userInfo.fname == undefined ? 'name' : userInfo.fname;
  let lname = typeof userInfo.lname == undefined ? 'lname' : userInfo.lname;
  let email = typeof userInfo.email == undefined ? 'email' : userInfo.email;
  let phone = typeof userInfo.phone == undefined ? 'phone' : userInfo.phone;
  let pendingCounter = counters.pendingcount ? counters.pendingcount : '-';
  let runningCounter = counters.runningcount ? counters.runningcount : '-';
  let completedorder = counters.completedorder ? counters.completedorder : '-';

  const [shouldSHowMenu, setShouldSHowMenu] = useState(false);
  let _menu = null;
  const showMenu = (index) => {
    console.log('pressed');
    setShouldSHowMenu(!shouldSHowMenu);
  };
  useEffect(() => {
    setCounters(id);
  }, [setCounters, id]);
  useEffect(() => {
    setDriverBigInfo(id);
  }, [setDriverBigInfo, id]);


  const {
    width,
    height,
  } = Dimensions.get('window');

  const marginTopScreenSize = (screenWidth) => {
    if (screenWidth >= 420) {
      return '5%';
    } else if (screenWidth >= 390) {
      return '8%';
    } else if (screenWidth >= 250) {
      return '20%';
    } else {
      return '40%';
    }
  }

  const setCounters = async (id) => {
    let action;

    action = driverInfoActions.setDriverOrderCount(
      id,
    );
    try {
      await dispatch(action);
      // console.log('set counter started working from homescreen');

    } catch (err) {
      // console.log('set counter faced problem in home screen');
      setError(err.message);
      console.log(err.message);
    }
  };
  const setDriverStatus = async (id, status) => {
    let action;

    action = driverInfoActions.setDriverStatus(
      id,
      status
    );
    try {
      await dispatch(action);
      // console.log('set counter started working from homescreen');

    } catch (err) {
      // console.log('set counter faced problem in home screen');
      setError(err.message);
      console.log(err.message);
    }
    setDriverBigInfo(id);
    // setDriverInfo(!driverInfo);
    console.log('pressed');
  };


  const setDriverBigInfo = async (id) => {
    let action;

    action = authActions.setDriverInfo(
      id,
    );
    try {
      await dispatch(action);
      // console.log(' started working from homescreen');

    } catch (err) {
      // console.log('faced problem in home screen');
      setError(err.message);
      console.log(err.message);
    }
  };
  const handleSetOrders = async (driverId, status) => {
    let action;

    action = ordersActions.setOrders( //setOrders to driverInfoActions
      driverId,
      status
    );
    try {
      await dispatch(action);
      // console.log('handleorders started working from homescreen');

    } catch (err) {
      // console.log('handleorders faced problem in home screen');
      setError(err.message);
      // console.log('err msg is');
      console.log(err.message);
      // console.log('err msg is');
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
    } catch (error) { }
  };
  const logoutAlert = () => {
    Alert.alert(
      logoutAlertTitle,
      logoutAlertBody,
      [
        { text: No, onPress: () => setShouldSHowMenu(!shouldSHowMenu), style: 'cancel' },
        {
          text: Yes, onPress: () => {
            removeData();
            setShouldSHowMenu(!shouldSHowMenu)
            navigation.replace('SplashScreen');

          }
        },
      ]
    );
  };



  return (

    <View style={styles.container}>
      <Header
        onPress={showMenu}
      />
      {shouldSHowMenu
        ?
        (
          <View
            style={{ position: 'absolute', left: '60.8%', top: Dimensions.get('screen').height / 10, backgroundColor: Colors.white, zIndex: 5 }}>
            <Menu.Item
              titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
              onPress={() => {
                Alert.alert(
                  changeLangAlertTitle,
                  changeLangAlertBody,
                  [
                    { text: No, onPress: () => setShouldSHowMenu(!shouldSHowMenu), style: 'cancel' },
                    {
                      text: Yes, onPress: () => {
                        if (language == 'EN') {
                          dispatch(ApplicationActions.onChangeLanguage('AR'));
                          setShouldSHowMenu(!shouldSHowMenu);
                        }
                        else {
                          dispatch(ApplicationActions.onChangeLanguage('EN'));
                          setShouldSHowMenu(!shouldSHowMenu);
                        }
                      },
                    },
                  ]
                );
                //  if (language == 'EN') {
                //   dispatch(ApplicationActions.onChangeLanguage('AR'));

                //  }
                //  else
                //  {
                //   dispatch(ApplicationActions.onChangeLanguage('EN'));

                //  }

              }}
              title={ChangeLanguage}
              titleStyle={{ color: 'black' }}
            />
            <Menu.Item titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
              onPress={() => {
                logoutAlert();
              }}
              title={SignOut}
              titleStyle={{ color: 'black' }}
            />

          </View>

        )
        :
        null}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >


        <TouchableOpacity
          style={styles.PersonInfoRow}
          onPress={
            () => {
              navigation.navigate('Profile');
              // handleSetDriverInfo(userInfo.id);
            }
          }
        >


          <View style={{ flex: 1 }} >
            <View style={{ ...styles.Block, flexDirection: 'row', backgroundColor: 'black' }}>
              <View
                style={{ width: Dimensions.get('screen').width / 4, justifyContent: 'center', }}
              >
                <TouchableOpacity>
                  <Image
                    style={styles.Image} resizeMode="center" source={require("../images/profile2.jpg")} />
                </TouchableOpacity>
              </View>
              <View
                style={{ justifyContent: 'flex-start' }}
              >
                <View
                  style={{ justifyContent: 'center' }}
                >
                  <Text
                    style={{
                      ...styles.PersonInfotText,
                      color: '#2175eb',
                      fontSize: 30

                    }}
                  >
                    {fname}
                    {" "}
                    {lname}
                  </Text>
                </View>
                <Text
                  style={{
                    ...styles.PersonInfotText,
                    // textAlign: language == 'EN' ? 'left' : 'right',
                  }}
                >{"- "}
                  {phone}
                </Text>
                <Text
                  style={{
                    ...styles.PersonInfotText,
                    // textAlign: language == 'EN' ? 'left' : 'right',
                  }}
                >{"- "}
                  {email}
                </Text>
                <Text
                  style={{
                    ...styles.PersonInfotText,
                    // textAlign: language == 'EN' ? 'left' : 'right',
                  }}
                >{"- "}
                  {'Jobs completed: '}
                  {completedorder}
                </Text>


              </View>


            </View>
          </View>
        </TouchableOpacity>


        <View style={{ ...styles.ButtonsRow, flexDirection: language == 'EN' ? 'row' : 'row-reverse', alignItems: 'center', marginTop: marginTopScreenSize(width) }}>
          <ButtonBlock

            style={[styles.Block, {
              justifyContent: language == 'EN' ? 'flex-start' : 'flex-end',
              height: 0,
              // eslint-disable-next-line no-trailing-spaces
              backgroundColor: driverInfoFromRedux.status == 0 ? 'red' : 'green',
            }]}
            backgroundColor={driverInfoFromRedux.status == 0 ? 'green' : 'red'}
            iconName={driverInfoFromRedux.status == 0 ? 'play' : 'stop'}
            icon={true}
            onPress={() => {

              Alert.alert(
                driverInfoFromRedux.status == 0 ? startShift : endShift,
                driverInfoFromRedux.status == 0 ? startShiftBody : endShiftBody,
                [
                  { text: No, style: 'cancel' },
                  {
                    text: Yes,
                    onPress: () => {
                      setDriverStatus(
                        userInfo.id,
                        driverInfoFromRedux.status == 0 ? 1 : 0 ,
                      );

                    }
                  },
                ]
              );

              // setDriverStatus(
              //   userInfo.id,
              //   driverInfo == 0 ? 1 : 0 ,
              // );


            }}
          ></ButtonBlock>

          <Block
            style={{ height: '100%', }}
            icon={'account-convert'}
            size={50}
            title={CurrentOrders}
            badge={runningCounter}
            onPress={
              () => {
                handleSetOrders(id, 'running');
                navigation.navigate('Current Requests'
                  // , {
                  //   itemId: 86,
                  //   otherParam: 'anything you want here',
                  // }
                );
                // handleSetDriverInfo(userInfo.id);
              }
            }

          >
          </Block>


          <Block
            style={{ height: '100%', }}
            icon={'history'}
            title={IncomingOrders}
            badge={pendingCounter}
            onPress={
              () => {
                handleSetOrders(id, 'pending'); // cahnge it later to id from redux, like next line:
                navigation.navigate('Incoming Orders');
                // handleSetOrders(id, 'pending');
              }
            }

          ></Block>


        </View>
        <View style={styles.ButtonsRow}>
          <Block
            icon={'history'}
            title={OrderHistory}
            badge={completedorder}
            onPress={
              () => {
                handleSetOrders(id, 'completed'); // cahnge it later to id from redux, like next line:
                navigation.navigate('Completed Requests');
                // handleSetOrders(id, 'pending');
              }
            }
          ></Block>
          {/* <Block
          icon={'calendar-edit'}
          title={'Schedule'}
        ></Block>
        <Block
          icon={'chat-processing-outline'}
          title={'chats'}
        ></Block> */}
          <Block
            icon={'book'}
            title={Stats}
          ></Block>


        </View>

        {/* here scrollview end */}
      </ScrollView>
    </View>



  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: '1%',
  },
  PersonInfotText: {
    color: 'white',
    width: '100%',
    paddingHorizontal: 10,
    // fontFamily: Global.fontEnglishName,
    fontSize: 18,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  PersonInfoRow: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    marginHorizontal: 10,
    // backgroundColor: 'red',
  },
  ButtonsRow: {
    flexDirection: 'row',
    width: '100%',
    height: '18%',
    // backgroundColor: 'red',
  },
  Block: {
    flex: 1,
    height: '100%',
    backgroundColor: 'grey',
    // margin:'1%',
    borderRadius: 10,
  },
  Image: {
    width: '90%',
    height: '90%',
    marginBottom: 80,
    // resizeMode:"cover",
    borderRadius: 100,
    // backgroundColor:'red'
    // marginTop: Dimensions.get('screen').height * 0.1,

  },
});

export default Home;
