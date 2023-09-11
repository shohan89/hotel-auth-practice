import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Booking from './components/Booking';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/booking',
          element: <PrivateRoute><Booking /></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/registration',
          element: <Registration />
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={ routes } />
    </div>
  );
}

export default App;
