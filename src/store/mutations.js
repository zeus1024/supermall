import {ADD_CART,ADD_PRODUCT_NUM} from "./mutations-type"

export default {
  [ADD_CART](state,payload){
    payload.choose = true
    state.cartList.push(payload)
  },
  [ADD_PRODUCT_NUM](state,payload){
    payload.count ++;
  }
}