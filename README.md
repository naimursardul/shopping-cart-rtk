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



# CURD with axios and RTK

## (1) Install axios 
```
npm install axios
```

## (2) get action

```js
export const funName = createAsyncThunk("actionName", async () => {
  try {
    const response = await axios.get(baseUrl);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
});
```

## (3) Post action

```js
export const funName = createAsyncThunk("actionName", async (dataFromClient) => {
  try {
    const response = await axios.post(`url`, dataFromClient);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
});
```



# Handle CORS (Cross-Origin Resource Sharing) issue

## (1) npm i cors

## (2) import cors from "cors";

## (3) app.use(cors())



# DOTENV
## (1) npm i dotenv

## (2) create file with name ".env"

## (3) '.env' file
```.env
DB_USERNAME=admin
DB_PASSWORD=12345678
```

## (4) file where you need the variable

```js
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
```


# Mongoose

## (1) npm i mongoose

## (2) Mongoose execution file

```js
import mongoose from "mongoose";

const Connection = () => {
  const MONGODB_URL = `mongodb+srv://admin:naimur4030447@mern-todo.umea7bk.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URL);

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log(`Error while connecting! ${error.message}`);
  });
};

export default Connection;
```

## (3) Mongoose Schema file for data validation

```js
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Todo = mongoose.model("todo", TodoSchema); // (CollectionName, schemaName)

export default Todo;

```

## (4) express execution file

```js
import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Todo from "./model/TodoSchema.js";

const app = express();
const PORT = 5000;
const router = express.Router();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

router.post("/todos", async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.todo,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

Connection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```
