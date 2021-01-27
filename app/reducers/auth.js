import { LOGIN, SIGNUP, SET_USER_DATA, SET_STATUS } from '../actions/auth';

const initialState = {
  // token: null,
  userId: null,
  userInfo: {
    fname:'malek',
    lname:'saab',
    phone:'702091082',
    email:'faressaab@compu-vision.me',
    id:3,
  },
  status: false,
  driverInfo: 'hi',
};

export default (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case LOGIN:
      return {
        // token: action.token,
        ...state,
        userId: action.userId,
      };
      case SET_USER_DATA:
        return {
          // token: action.token,
          ...state,
          userInfo: action.userInfo,
        };
        case SIGNUP:
          return {
            // token: action.token,
            ...state,
            userId: action.userId,
          };
          case SET_STATUS:
            return {
              // token: action.token,
              ...state,
        status: action.statusChanged,
      };
    default:
      return state;
  }
};
