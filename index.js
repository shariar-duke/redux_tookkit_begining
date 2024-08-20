const store = require("./app/store.js") // store tak import kore anlam
const {counterActions} = require("./features/counter/counterSlice")  // counterActions eta k named increment kora holo jeta oi file a cilo 


// initail State ta print kore dkeha jiate pare 

console.log(store.getState())


// eta node project tai store tay subscribe kore rkahte hbe . react project hole jetar drkr nai .

store.subscribe(()=> 
{
    console.log(store.getState())
})

// store a subscribe kroa holo...


// ekhn action dispatch kore dite hbe ...
// ei counterActions er modhe increment and decremnt ta ase. ei duta ei counterAtions objet eri property , karon reudcer er modhe fucntion gular name ja cilo oguali asole 
// aciton


// dispatch actions now 

store.dispatch(counterActions.increment())
store.dispatch(counterActions.decrement())

