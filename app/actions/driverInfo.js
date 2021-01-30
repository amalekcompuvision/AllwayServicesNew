
export const SET_DRIVER_INFO = 'SET_DRIVER_INFO';
// export const SET_PENDING_ORDERS = 'SET_PENDING_ORDERS';

const baseUrl = 'https://www.allwaytaxi.com/api';
const token = 'sb23oc-Moas|Kallwayu';


export const setDriverOrderCount = (driverId) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/driverordercount.php?token=${token}&driver_id=${driverId}`);
      'https://www.allwaytaxi.com/api/driverordercount.php?token=sb23oc-Moas|Kallwayu&driver_id=3'
    const resData = await response.json();
      // console.log('coooooooooouuuuuuuuuuuuuuuuuuunttttttttttteeeeeeeeeerrrrrrrrrrrr');
      // console.log(resData);
      // console.log('coooooooooouuuuuuuuuuuuuuuuuuunttttttttttteeeeeeeeeerrrrrrrrrrrr');
      
      dispatch({
        type: SET_DRIVER_INFO,
        driverInfo: resData,
      });

  };


};
// export const setOrders = (driverId, status) => {
//   // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

//   return async (dispatch) => {
//     const response = await fetch(
//       `${baseUrl}/driverorders.php?token=${token}&driver_id=${driverId}&status=${status}`);
//       console.log(`${baseUrl}/driverorders.php?token=${token}&driver_id=${driverId}&status=${status}`)
//     const resData = await response.json();
//       console.log('staaaaaaaaaaaaaaaaaaaaaaaaatuuuuuuuuuuuuuuuuuuuuuuusAPIIIIIIIIIIIIIIIIdataaaaaaaaa');
//       console.log(resData);
//       console.log('staaaaaaaaaaaaaaaaaaaaaaaaatuuuuuuuuuuuuuuuuuuuuuuusAPIIIIIIIIIIIIIIIIdataaaaaaaaa');


//       //later add if status = pendinig {type= SET_PENDING_ORDERS} else if status=completed... else if status= running{...}
//       dispatch({
//         type: SET_PENDING_ORDERS,
//         orders: resData,
//       });

//   };


// };


