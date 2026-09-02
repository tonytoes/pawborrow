import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Login from "@/pages/Login";
import Booking from "../pages/Booking";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/booking", element: <Booking /> }
]);

export default router;