/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import * as actionTypes from "@actions/actionTypes";
const initialState = {
  theme: null,
  font: null,
  force_dark: false,
  language: null,
  menu: "eCommerce",
  product: "",
  productsFromApi: "",
  loading: true,
};

export default (state = initialState, action = {}) => {
 

  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case actionTypes.CHANGE_FONT:
      return {
        ...state,
        font: action.font,
      };
    case actionTypes.FORCE_APPEARANCE:
      return {
        ...state,
        force_dark: action.force_dark,
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        menu: action.menu,
      };
    case actionTypes.SET_PRODUCTS_DATA:
      return {
        ...state,
        product: action.product,
      };
    case actionTypes.SET_PRODUCTS_FROM_API_DATA:
      return {
        ...state,
        productsFromApi: action.product,
        loading: false,
      };

    default:
      return state;
  }
};
