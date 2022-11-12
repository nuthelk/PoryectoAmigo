import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayoutLogin from './pages/LayoutLogin';
import LayoutLogout from './pages/LayoutLogout';
import Welcome from './pages/Welcome';
import LoginEmail from './pages/LoginEmail';
import RegisterEmail from './pages/RegisterEmail';
import Profile from './pages/Profile';
import Description from './pages/Description';
import WishList from './pages/WishList';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';


let idUser = sessionStorage.getItem('idUser')



const router = createBrowserRouter([
  {
    path: "/",
    element: idUser ? <LayoutLogin /> : <LayoutLogout />,
    errorElement: idUser ? <><LayoutLogin /><NotFound /></> : <><LayoutLogout /> <NotFound /></>,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "/loginEmail",
        element: idUser ? <Shop /> : <LoginEmail />,
      },
      {
        path: "/registerEmail",
        element: idUser ? <Welcome /> : <RegisterEmail />,
      },
      {
        path: "/profile",
        element: idUser ? <Profile /> : <Welcome />
      },
      {
        path: "/wishList",
        element: idUser ? <WishList /> : <Welcome />
      },
      {
        path: "/description",
        element: idUser ? <Description /> : <Welcome />
      },
      {
        path: "/shop",
        element: idUser ? <Shop /> : <Welcome />
      }
    ]
  },






]);

function App() {

  return (
    <div className="App bg-[#EFF2F6] max-h-max h-screen overflow-y-scroll ">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
