/* eslint-disable prettier/prettier */
export const SET_PENDING_ORDERS = 'SET_PENDING_ORDERS';

const baseUrl = 'https://www.allwaytaxi.com/api';
const token = 'sb23oc-Moas|Kallwayu';



export const setOrderStatus = (orderID, driverId, status) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/orderstatus.php?token=${token}&driver_id=${driverId}&status=${status}&order_id=${orderID}`);
      console.log('maaaaaaaaaaiiiiiiiiiiillllllllllllllllllllllllllllllllllll');
      console.log(`${baseUrl}/orderstatus.php?token=${token}&driver_id=${driverId}&status=${status}&order_id=${orderID}`);
    const resData = await response.json();
    //   console.log('staaaaaaaaaaaaaaaaaaaaaaaaatuuuuuuuuuuuuuuuuuuuuuuusAPIIIIIIIIIIIIIIIIdataaaaaaaaa');
    //   console.log(resData);
    //   console.log('staaaaaaaaaaaaaaaaaaaaaaaaatuuuuuuuuuuuuuuuuuuuuuuusAPIIIIIIIIIIIIIIIIdataaaaaaaaa');
    if (resData.result == 1) {
      console.log('status was succesfully changed');
      dispatch({
        type: 'nothing',
        orders: resData,
      });
     // dispach to refresh incoming orders and pending counter and running counter
     // see how to resend dispatches for above reducers from here
      
    }


      
      // if (status == 'pending') {

      // }


      
      

  };


};
export const setOrderStatusIfPaid = (isPaid, orderID) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/orderpaid.php?token=${token}&order_id=${orderID}&paid=${isPaid}`);
      console.log('ansdlkasndkljaskldnjaskldjaskldjjklasndkjasbnkasjbciawbsjkchsugbwvuocvbahcyuacvhagdcwo')
      console.log(`${baseUrl}/orderpaid.php?token=${token}&order_id=${orderID}&paid=${isPaid}`);
    const resData = await response.json();
    //   console.log('staaaaaaaaaaaaaaaaaaaaaaaaatuuuuuuuuuuuuuuuuuuuuuuusAPIIIIIIIIIIIIIIIIdataaaaaaaaa');
    //   console.log(resData);
    //   console.log('staaaaaaaaaaaaaaaaaaaaaaaaatuuuuuuuuuuuuuuuuuuuuuuusAPIIIIIIIIIIIIIIIIdataaaaaaaaa');
    if (resData.result == 1) {
      console.log('status was succesfully changed');
      dispatch({
        type: 'nothing',
        orders: resData,
      });
     // dispach to refresh incoming orders and pending counter and running counter
     // see how to resend dispatches for above reducers from here
      
    }


      
      // if (status == 'pending') {

      // }


      
      

  };


};


