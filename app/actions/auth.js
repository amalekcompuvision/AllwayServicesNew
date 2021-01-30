export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_STATUS = 'SET_STATUS';
export const SET_DRIVER_INFO = 'SET_DRIVER_INFO';

import { useState } from 'react';
import { clockRunning } from 'react-native-reanimated';
import { store } from '../store/index';
// import { useDispatch } from 'react-redux';


const baseUrl = 'https://www.allwaytaxi.com/api';
const token = 'sb23oc-Moas|Kallwayu';

// export const setStatus = (id, status) => {
//   // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)
//   let intStatus = 0;
//   if (status == true) {
//     intStatus = 1;
//   }
//   else {
//     intStatus = 0;
//   }
//   return async (dispatch) => {
//     const response = await fetch(
//       // `${baseUrl}/driverlogin.php?token=${token}&password=${password}&email=${email}`);
//       `${baseUrl}/driverstatus.php?token=${token}&driver_id=${id}&status=${status}`
//     );
//     const resData = await response.json();

//     // console.log(resData);
//     if (resData.result == 1) {
//       if (resData.message == 'Already Deactivated' || resData.message == 'Already Activated') {

//       }
//       else {
//         dispatch({
//           type: SET_STATUS,
//           //  token: resData.idToken,
//           statusChanged: status,
//         });
//       }

//     }
//   };


// };
export const login = (email, password) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/driverlogin.php?token=${token}&password=${password}&email=${email}`);
    // ${baseUrl}/driverstatus.php?token=${token}&driver_id=3&status=1
    const resData = await response.json();

    // console.log(resData);
    if (resData.result == 0) {
      const errorResData = await response.json();
      const errorId = errorResData.resData.message;
      let message = 'Something went wrong!';
      if (errorId === '"Wrong Email or Password"') {
        message = 'the email or password is invalid!';
      } else if (errorId === '"Wrong Email or Password"') {
        message = 'the email or password is not valid!';
      }
      console.log(message);
      throw new Error('Wrong Email or Password');
    }


    dispatch({
      type: LOGIN,
      //  token: resData.idToken,
      userId: resData.id,
    });


    dispatch({
      type: SET_USER_DATA,
      userInfo: {
        id: resData.id,
        fname: resData.fname,
        lname: resData.lname,
        email: resData.email,
        phone: resData.phone,
      }


    });
  };


};
export const setDriverInfo = (driverID) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)
  console.log(`${baseUrl}/driverinfo.php?token=${token}&driver_id=${driverID}`);
  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/driverinfo.php?token=${token}&driver_id=${driverID}`);
    const resData = await response.json();
    dispatch({
      type: SET_USER_DATA,
      driverInfo: resData,
    });
  };
};
