import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart/Cart';
import Main from './Component/Main/Main';
import Shop from './Component/Shop/Shop';


function App() {
  const router = createBrowserRouter([
    {path: '/',
    element: <Main />,
    children:[
      {path:'/',element: <Shop />},
      {path:'/cart',element: <Cart />},
      {path:'*', element: <div>This page is not available</div>}
    ]
  },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
