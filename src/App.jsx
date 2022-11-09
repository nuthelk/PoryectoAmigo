import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayoutLogin from './pages/LayoutLogin';
import LayoutLogout from './pages/LayoutLogout';
import Welcome from './pages/Welcome';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },

]);

function App() {
 
  return (
    <div className="App bg-[#EFF2F6] min-w-max min-h-screen overflow-x-auto relative">
        <LayoutLogin/>
        <RouterProvider router={router} />
      
    </div>
  )
}

export default App
