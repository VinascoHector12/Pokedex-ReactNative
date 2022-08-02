import { useState, createContext } from 'react';

//Creacion de contexto
export const AuthContext = createContext({
    auth: undefined,
    logIn: () => {},
    logOut: () => {}
});

//Provider: Acciones que haran el contexto - El provider envuelve la aplicacion por lo que el hijo es lo que se encuentra adentro
export function AuthProvider(props){
    const { children } = props;
    const [auth, setAuth] = useState(undefined);

    //Funcion para logIn
    const logIn = (userData) => {
        setAuth(userData);
    }

    //Funcion para cerra sesion
    const logOut = () => {
        setAuth(undefined);
    }

    const valueContext = { 
        auth,
        logIn,
        logOut
    };

    return(
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
}