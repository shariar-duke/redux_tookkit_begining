const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit")
const fetch = require("node-fetch");

// initial state
const initialState = {
    loading: false,
    posts: [],
    error: "",
};

// create aync thunk , ehnke amra direct kno function nibo na  amra createThunk er help nibo. age direct function lekhtam

const fetchPosts = createAsyncThunk("post/fetchPosts", async()=> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const posts = await response.json();

    return posts;
})

// ekhn amra main counterSlice ta banabo

const postSlice = createSlice({
    name : "post",
    initialState: initialState, 
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending , (state, action) => {
            state.loading = true;
            state.error =""
        })

        builder.addCase(fetchPosts.fulfilled , (state, action) => {
            state.loading = false;
            state.error ="";
            state.posts = action.payload
        })

        builder.addCase(fetchPosts.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.error.message;
            state.posts = []
        } )
    }
  
})

module.exports = postSlice.reducer; // postSlice er modhe extraReducer tai reducer hisebe kaj krobe...
module.exports.fetchPosts = fetchPosts
