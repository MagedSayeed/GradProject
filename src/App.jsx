import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import HowToPlay from "./Components/HowToPlay/HowToPlay";
import Layout from "./Components/Layout/Layout";
import Error from "./Components/Error/Error";
import Toaster from "./Components/Toaster/Toaster";
import Support from "./Components/Support/Support";
import Games from "./Components/Games/Games";
import SignUp from "./Components/SignUp/SignUp";
import SingleGamePage from "./Components/GamesPages/SingleGamePage";
import Skrew from "./Components/GamesPages/Skrew/Skrew";
import Chess from "./Components/GamesPages/Chess/Chess";
import Checkers from "./Components/GamesPages/Checkers/Checkers";
import Domino from "./Components/GamesPages/Domino/Domino";
import Idoubt from "./Components/GamesPages/IDoubt/Idoubt";
import Oldmaid from "./Components/GamesPages/Oldmaid/Oldmaid";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "howtoplay", element: <HowToPlay /> },
      { path: "support", element: <Support /> },
      { path: "games", element: <Games /> },
      { path: "signup", element: <SignUp /> },
      { path: "SingleGamePage", element: <SingleGamePage /> },
      { path: "Skrew", element: <Skrew /> },
      { path: "Chess", element: <Chess /> },
      { path: "Checkers", element: <Checkers /> },
      { path: "Domino", element: <Domino /> },
      { path: "Idoubt", element: <Idoubt /> },
      { path: "Oldmaid", element: <Oldmaid /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

