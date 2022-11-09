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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/LoginEmail",
    element: <LoginEmail />,
  },
  {
    path: "/RegisterEmail",
    element: <RegisterEmail />,
  },

]);

function App() {
 
  return (
    <div className="App bg-[#EFF2F6] h-screen">
        <LayoutLogout />
        <RouterProvider router={router} />
      
    </div>
  )
}

export default App
