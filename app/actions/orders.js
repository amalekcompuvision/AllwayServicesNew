/* eslint-disable prettier/prettier */
export const SET_PENDING_ORDERS = 'SET_PENDING_ORDERS';
export const SET_RUNNING_ORDERS = 'SET_RUNNING_ORDERS';
export const SET_COMPLETED_ORDERS = 'SET_COMPLETED_ORDERS';

const baseUrl = 'https://www.allwaytaxi.com/api';
const token = 'sb23oc-Moas|Kallwayu';



export const setOrders = (driverId, status) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/driverorders.php?token=${token}&driver_id=${driverId}&status=${status}`);
    console.log(`${baseUrl}/driverorders.php?token=${token}&driver_id=${driverId}&status=${status}`);
    const resData = await response.json();
    if (status === 'pending') {
      dispatch({
        type: SET_PENDING_ORDERS,
        orders: resData.data,
      });
    }
    if (status === 'running') {
      dispatch({
        type: SET_RUNNING_ORDERS, // change
        orders: resData.data,
      });
    }
    if (status === 'completed') {
      console.log(status);
      dispatch({
        type: SET_COMPLETED_ORDERS, // change
        orders: resData.data,
      });
    }

  };


};


