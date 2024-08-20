const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice")
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice")
const postReducer = require("../features/posts/postSlice")
const { createLogger } = require("redux-logger") // redux logger amader create logger name ekta function dia thake 


const logger = createLogger()  // ei function ta call korle ei logger middleware ta amra pai

const store = configureStore({
    reducer:{
        counter:counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post:postReducer
    },
    middleware : (getDefaultMiddlewares) => {

        return getDefaultMiddlewares().concat(logger)
    }
})

module.exports = store 