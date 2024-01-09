import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
        {
            path:"/login",
            element:<Login></Login>
        }
    ]
  },
]);

export default router;