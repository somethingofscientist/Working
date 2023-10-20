import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PageNotFound from './components/pages/PageNotFound';
import Register from './components/pages/Register';
import Username from './components/pages/Username';
import Password from './components/pages/Password';
import Profile from './components/pages/Profile';
import Reset from './components/pages/Reset';
import Recovery from './components/pages/Recovery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;
