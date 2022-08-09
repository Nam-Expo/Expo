import React, { useState, createContext, useEffect, useMemo, Dispatch, SetStateAction } from 'react'

type AuthContextADT = {
    loggedIn: boolean
    setLoggedIn: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextADT>({} as AuthContextADT)

export const AuthenticationProvider = (props: { children: React.ReactNode, loggedIn: boolean }) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(props.loggedIn);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
};