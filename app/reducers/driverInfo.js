import { SET_DRIVER_INFO, SET_PENDING_ORDERS } from '../actions/driverInfo';

const initialState = {
  ordersCount: '',
};

export default (state = initialState, action) => {
  //  console.log('driver info staaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate');
  // console.log(state);
  //  console.log('driver info staaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate');
  switch (action.type) {
    
    case SET_DRIVER_INFO:
      return {
        // token: action.token,
        ordersCount: action.driverInfo,
      };
    case SET_PENDING_ORDERS:
      return {
        // token: action.token,
        pendingOrders: action.orders,
      };
    default:
      return state;
  }
};
