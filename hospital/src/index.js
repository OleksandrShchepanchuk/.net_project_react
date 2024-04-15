import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationPaths from "./components/app/paths";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import TestLoginPage from "./components/TestLoginPage/TestLoginPage";

const router = createBrowserRouter([
    {
        path: ApplicationPaths.RootPath,
        element: <App/>
    },
    {
        path: ApplicationPaths.LoginPage,
        element: <TestLoginPage/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
