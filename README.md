###### This project I did while learning Redux Toolkit.
Check this out on Netlify - https://shopping-cart-with-rtk.netlify.app/

</br>

# Let's build a Redux app in 6 stpes

## (1) Install Redux and Redux Toolkit package in an react app
```
npm install --save react-redux @reduxjs/toolkit
```

## (2) Create a global store under src/app/store.js
```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
  
  },
});
```

## (3) Available store to whole React app
To configure it, go to 'index.js' file
```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## (4) Create a slice
Create a slice under 'src/features/slice/sliceName.js'

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 val = 1;
}; 

export const sliceName = createSlice({
  name: "reducerName",
  initialState,
  reducers: {
  incrementBy1: (state) => {
    state.val += 1;
    },
  incrementByInput: (state, action) => {
    state.val += action.payload;
    }
  },
});

export const { incrementBy1, incrementByInput } = counterSlice.actions;

export default sliceName.reducer;
```

## (5) Add slice reducer to store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import reducerName from "../features/slice/sliceName";

export const store = configureStore({
  reducer: { storeReducerName : reducerName },
});
```

## (6) useSelector and useDispatch to interact with React app

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByInput, incrementBy1 } from "../features/slice/sliceName";

export default function Counter() {
  const { val } = useSelector((state) => state.storeReducerName);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div> { val } </div>
        <button onClick={() => dispatch(incrementBy1())}>Increment by 1</button>
        <span>{count}</span>
        <button onClick={() => dispatch(incrementByInput(10))}>increment by input : +10</button>
      </div>
    </>
  );
}
```

#### Thank You...


# Fetch data with RTK
First, have to follow the regular 5 steps of building redux app. Then the following extra 3 steps have to be done.

## (1) import createAsyncThunk and configure like below
```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// configure to action
export const getAllData = createAsyncThunk( "gitHubUser", async() =>{
  const response = await fetch("https://api.github.com/users");
  const result = response.json();
  return result;
})

const initialState = {
    users: [],
    loading: false,
    error: null,
}; 

export const getUserSlice = createSlice({
  name: "getUserData",
  initialState,
  reducer: {},
});

export default getUserSlice.reducer;
```

## (2) create 'extraReducer' instead of 'reduce'
```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllData = createAsyncThunk( "gitHubUser", async() =>{
  const response = await fetch("https://api.github.com/users");
  const result = response.json();
  return result;
})

const initialState = {
    users: [],
    loading: false,
    error: null,
}; 

export const getUserSlice = createSlice({
  name: "getUserData",
  initialState,
  extraReducers: {
    [getAllData.pending] : (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled] : (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected] : (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default getUserSlice.reducer;
```

## (3) Use 'useSelector' and 'useDispatch' to interact with React App
```jsx
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './feature/slice/slice';

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector( state => state.userData );

  return (
    <div style={{margin: "30px auto", width: "50%", textAlign: "center"}}>
      <button  onClick={() => dispatch(getAllData())}>Get Users</button>
      {
        users.map(user => 
        <div>
          <h3>{user.id}</h3> 
          <h5>{user.login}</h5> 
        </div>)
      }
    </div>
  );
}

export default App;

```
