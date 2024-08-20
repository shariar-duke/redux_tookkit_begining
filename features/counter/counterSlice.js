const createSlice = require("@reduxjs/toolkit")

// cerating the initialState

const initialState ={
    count:0
}

// ekhn amra main counterSlice ta banabo

const counterSlice = createSlice({
    name : "counter",
    initialState: initialState,
    reducers:{
        increment:(state, action) => 
        {
            state.count++;
        },

        decrement:(state, action) => 
        {
            state.count --
        }
    }
})

module.exports = counterSlice.reducer // default export kora holo counterSlice er reducer ta...
module.exports.counterActions = counterSlice.actions // export kore holo actions gula k 