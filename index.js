const store = require("./app/store.js") // store tak import kore anlam
const {counterActions} = require("./features/counter/counterSlice")  
const { dynamicCounterActions }= require ("./features/dynamicCounter/dynamicCounterSlice.js")
const {fetchPosts} = require("./features/posts/postSlice.js")

store.subscribe(()=> 
{
    // console.log(store.getState())
})







// Now I want to dispatch the fetchPosts function 

store.dispatch(fetchPosts())





// acitons for dynamicCoutner

// store.dispatch(dynamicCounterActions.increment(3)) // ei increment function er modhe perameter
// store.dispatch(dynamicCounterActions.increment(4))
// store.dispatch(dynamicCounterActions.decrement(2))


// // actions for coutner
// store.dispatch(counterActions.increment())
// store.dispatch(counterActions.decrement())

