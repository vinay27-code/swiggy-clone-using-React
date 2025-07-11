import { createSlice } from "@reduxjs/toolkit"

const cart= createSlice({
    name:"cartSlice",
    initialState:{
        items:[],
        count:0
    },
    reducers:{
       addItems:(state,action)=>{
        state.items.push({...action.payload,quantity:1});
        state.count+=1;
        

       },
       increaseQuantity:(state,action)=>{
        const itemElement= state.items.find(item=>item.id===action.payload.id);
        itemElement.quantity+=1;
        state.count+=1;
        
        
       },
       decreaseQuantity:(state,action)=>{
         const itemElement= state.items.find(item=>item.id===action.payload.id);
         if(itemElement.quantity>1){
            itemElement.quantity-=1;
         }
         else{
            state.items=state.items.filter(item=>item.id!==action.payload.id);
         }
        state.count-=1;
       },
    
clearCart: (state) => {
    state.items = [];
    state.count = 0;
}

}
})

export const {addItems,increaseQuantity,decreaseQuantity,clearCart}=cart.actions;
export default cart.reducer