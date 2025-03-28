import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/HowToPlay/HowToPlay";
import Layout from "./Components/Layout/Layout";
import Error from "./Components/Error/Error";
import Toaster from "./Components/Toaster/Toaster";

const router = createBrowserRouter([
  {
    path:'',
    element: <Layout />,
    children: [
      {path:'', element: <Home /> },
      {path: "home", element: <Home /> },
      {path: "about", element: <About /> },
      {path:'*',element:<Error/>},
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  );
}
/*
// 1- Account management
// 2- download and install 
// 2- Feedback
// 4- How to play
// 5- Subscribe for new announcement


*/
