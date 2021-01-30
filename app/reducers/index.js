/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ApplicationReducer from './application';
import DriverInfoReducer from './driverInfo';
import OrdersReducer from './orders';
import OrderDetailsReducer from './orderDetails';


export default combineReducers({
    auth: AuthReducer,
    application: ApplicationReducer,
    driverinfo: DriverInfoReducer,
    orders: OrdersReducer,
    orderDetails: OrderDetailsReducer,
});
