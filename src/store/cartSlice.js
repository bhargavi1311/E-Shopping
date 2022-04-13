const {createSlice} = require("@reduxjs/toolkit");



const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers :{
        add(state,action) {
            state.push(action.payload);  
           // console.log(state.cart);    
            localStorage.setItem("CartItems",JSON.parse(state.cart));
        },
        

        // remove(state,action) {
        //     state =state.filter(item => item.id !== action.payload)
        // },
    },

});

export const{add,remove} =cartSlice.actions;
export default cartSlice.reducer;