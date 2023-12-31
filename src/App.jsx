import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Write from "./pages/Write.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CookieConsent from "react-cookie-consent";
import "./style.scss";
import "animate.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="cookies"
        enableDeclineButton
        flipButtons
        style={{ background: "#171810" }}
        buttonStyle={{ color: "#171810", fontSize: "13px", background: "#03FA6E" }}
        expires={150}
      >
        This website uses <span style={{ color: "#03FA6E" }}>cookies</span> to enhance the user experience.{" "}
      </CookieConsent>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <div className="app">
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </div>
};

export default App;
