import { SET_ORDER_DETAILS } from '../actions/orderDetails';

const initialState = {
  orderDetails:'',
};

export default (state = initialState, action) => {
  //  console.log('order details aaaaaaarrrrrrrrrrreeeeeeeeeee');
  //  console.log(state);
  //  console.log('order details aaaaaaarrrrrrrrrrreeeeeeeeeee');
  switch (action.type) {

    case SET_ORDER_DETAILS:
      return {
        // token: action.token,
        orderDetails: action.order,
      };
    default:
      return state;
  }
};
