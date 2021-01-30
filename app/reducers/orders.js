import { SET_PENDING_ORDERS, SET_RUNNING_ORDERS, SET_COMPLETED_ORDERS } from '../actions/orders';

const initialState = {
  pendingOrders:[
    {
      id: "",
      clientname: "",
      orderprice: "",
      deliveryprice: "",
      commission: "",
      pickup: "",
      destination: "",
      order_date: "",
      order_time: "",
      status: ""
    },
],
  completedOrders:[
    {
      id: "",
      clientname: "",
      orderprice: "",
      deliveryprice: "",
      commission: "",
      pickup: "",
      destination: "",
      order_date: "",
      order_time: "",
      status: ""
    },
],
  runingOrders:[
    {
      id: "",
      clientname: "",
      orderprice: "",
      deliveryprice: "",
      commission: "",
      pickup: "",
      destination: "",
      order_date: "",
      order_time: "",
      status: ""
    },
],
};

export default (state = initialState, action) => {
   console.log('orders info staaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate');
  console.log(state);
   console.log('orders info staaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate end');
  switch (action.type) {

    case SET_PENDING_ORDERS:
      return {
        // token: action.token,
        ...state,
        pendingOrders: action.orders,
      };
    case SET_RUNNING_ORDERS:
      return {
        // token: action.token,
        ...state,
        runingOrders: action.orders,
      };
    case SET_COMPLETED_ORDERS:
      return {
        // token: action.token,
        ...state,
        completedOrders: action.orders,
      };
    default:
      return state;
  }
};
