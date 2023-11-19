###### This project I did while learning Redux Toolkit.
Check this out on Netlify - https://shopping-cart-with-rtk.netlify.app/

</br>

# Let's build a Redux app in 6 stpes

## (1) Install Redux and Redux Toolkit package in an react app
```
npm install --save react-redux @reduxjs/toolkit
```

## (2) Create a global store under src/app/store.js
```
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
  
  },
});
```

## (3) Available store to whole React app
To configure it, go to 'index.js' file
```
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

```
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

```
import { configureStore } from "@reduxjs/toolkit";
import sliceName from "../features/slice/sliceName";

export const store = configureStore({
  reducer: { storeReducerName : reducerName },
});
```

## (6) useSelector and useDispatch to interact with React app

```
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
