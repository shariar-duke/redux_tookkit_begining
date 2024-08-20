const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState ={
    count:0
}


const dynamicCounterSlice = createSlice({
    name : "dynamicCounter",
    initialState: initialState,
    reducers:{
        increment:(state, action) => 
        {
            state.count +=  action.payload;
        },

        decrement:(state, action) => 
        {
            state.count -= action.payload;
        }
    }
})

module.exports = dynamicCounterSlice.reducer ;
module.exports.counterActions = dynamicCounterSlice.actions 