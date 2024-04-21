import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import ContactSeller from "./components/ContactSeller";
import ResultsPage from "./components/ResultsPage";
import Profile from "./components/Profile";
import PostVehicle from "./components/PostVehicle";
import LastSearched from "./components/LastSearched";
import TermsandAgreements from "./components/TermsandAgreements";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
import App from "./App.jsx";

// router to path and element components

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    errorElement: <h1 className="display-2">Wrong Page!</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/results",
        element: <ResultsPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/postvehicle",
        element: <PostVehicle />,
      },
      {
        path: "/favorites",
        element: <LastSearched />,
      },
      {
        path: "/termsandagreement",
        element: <TermsandAgreements />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contactseller",
        element: <ContactSeller />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
