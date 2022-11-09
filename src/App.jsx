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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/loginEmail",
    element: <LoginEmail />,
  },
  {
    path: "/registerEmail",
    element: <RegisterEmail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

]);

function App() {
 
  return (
    <div className="App bg-[#EFF2F6] h-screen overflow-y-scroll md:overflow-auto relative">
        <LayoutLogin/>
        <RouterProvider router={router} />
      
    </div>
  )
}

export default App
