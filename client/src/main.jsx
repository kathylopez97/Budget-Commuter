import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import ResultsPage from './components/ResultsPage';
import Profile from './components/Profile';
import LastSearched from './components/HomepageLastSearched';
import TermsandAgreements from './components/TermsandAgreements';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import App from './App.jsx'
// import FavoriteVehicles from './pages/FavoritedVehicles'
// import GetSingleVehicle from './pages/GetSingleVehicle'
// import Search from './pages/Search'

const router = createBrowserRouter([
    
    {
        path: '/',
        
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong Page!</h1>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/results',
                element: <ResultsPage />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/favorites',
                element: <LastSearched/>
            },
            {
                path: '/termsandagreement',
                element: <TermsandAgreements />
            },
            {
                path: '/privacypolicy',
                element: <PrivacyPolicy/>
            },
            {
                path: '/contactus',
                element: <ContactUs/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );