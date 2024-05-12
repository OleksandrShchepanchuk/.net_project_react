import React, { createContext, useState, useEffect } from 'react';
import  { jwtDecode } from 'jwt-decode';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if ( tokenIsValid(token)) {
            setIsAuthenticated(true);
        }
        if ( isItAdmin(token)){
            setIsAdmin(true);
        }
    }, []);

    const tokenIsValid = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decodedToken.exp >= currentTime;
        } catch (error) {
            console.error('Error decoding token:', error.message);
            return false;
        }


    };

    const isItAdmin  = (token) =>{
        try {
            const decodedToken = jwtDecode(token);
            var role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            const userRoles = role;
            return !!userRoles.includes('Admin');
        } catch (error) {
            console.error('Error decoding token:', error.message);
            return false;
        }
    }

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContext;