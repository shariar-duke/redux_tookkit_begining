const fetch = require("node-fetch");
const { applyMiddleware , createStore} = require("redux");
const thunkMiddleware = require("redux-thunk").default

// initial state

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// initailState er por amake kisu actions banate hbe , actionTypes na banay direct actions gula lekehe felbo
// ei action ta holo request pathanor jnno
const fetchPostRequested = () => {
  return {
    type: "posts/requested",
  };
};

// ekhn fetch kore ana hole ekta succeded action dispatch korte hbe

const fetchPostSucceded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

// post gula fetch koret giye jode kno errors ase action dispatch korte hbe

const fetchPostFailed = (error) => {
  return {
    type: "posts/failed",
    payload: error,
  };
};

// ekhn amra reducer fucntion ta lekhbo

const reducer = (state = initialState, action) => {
  // ei action ta holo jokhn matro request ta kora hoise
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "posts/failed":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        posts: [],
      };
    default:
      return state;
  }
};

// now I have to create the thunk function

const fetchPosts = () => {
  return async (dispatch) => {
    // api call howar agei loading ta amader false kore nite hbe so amader oi action ta dispatch korte hbe . Then api er response asar por baki discission
    dispatch(fetchPostRequested());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const posts = await response.json();
      dispatch(fetchPostSucceded(posts))
    } catch (error) {

        dispatch(fetchPostFailed(error))
    }
  };
};


// create the store 

const store = createStore(reducer , applyMiddleware(thunkMiddleware))


// store completed now subscribe to the store ...

store.subscribe(()=> {
    console.log(store.getState())
})

// Now dispatch the actions

store.dispatch(fetchPosts())