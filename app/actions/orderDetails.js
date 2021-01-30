/* eslint-disable prettier/prettier */
export const SET_ORDER_DETAILS = 'SET_ORDER_DETAILS';

const baseUrl = 'https://www.allwaytaxi.com/api';
const token = 'sb23oc-Moas|Kallwayu';



export const setOrderDetails = (orderID) => {
  // console.log(`https://www.allwaytaxi.com/api/driverlogin.php?token=${token}&password=${password}&email=${email}`)

  return async (dispatch) => {
    const response = await fetch(
      `${baseUrl}/orderinfo.php?token=${token}&order_id=${orderID}`);
      console.log('order details details details aaaaaaaaaaaaaaaaaakljklsajdklasjdklasjdkljasldjaslkdjklasjdklasjdlk')
        console.log(`${baseUrl}/orderinfo.php?token=${token}&order_id=${orderID}`);
      const resData = await response.json();
      // console.log('deeeeeeeeeeetaaaaaaaaaaaaaaaaaaaaaaailAPI');
      // console.log(`${baseUrl}/orderinfo.php?token=${token}&order_id=${orderID}`);
      // console.log(resData);
      // console.log('deeeeeeeeeeeeeeeeeeeeeeeeeeetaaaaaaaaaaailsAPID');


      //later add if status = pendinig {type= SET_PENDING_ORDERS} else if status=completed... else if status= running{...}

        dispatch({
            type: SET_ORDER_DETAILS,
            order: resData, /////////// .shi yemken
          });



      
      

  };


};


