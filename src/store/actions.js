import {ADD_CART,ADD_PRODUCT_NUM} from "./mutations-type"

export default {
  changeCart(context,payload){
    return new Promise ((resolve,reject) =>{
      let oldProduct = null;
    for(let item of context.state.cartList){
      if(item.iid === payload.iid){
        oldProduct = item;
        break;
      }
    }
    if(oldProduct){
      context.commit(ADD_PRODUCT_NUM,oldProduct);
      resolve("商品在购物车内数量+1")
    }
    else{
      payload.count = 1;
      context.commit(ADD_CART,payload);
      resolve("商品成功添加到购物车")
    }
    })
    
   }
}