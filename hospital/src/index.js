import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationPaths from "./components/app/paths";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import TestLoginPage from "./components/app/TestLoginPage";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals