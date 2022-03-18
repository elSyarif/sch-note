import React, { createContext, useContext, useState } from "react";

interface AuthProviderProps{
    user: any
    signin: (user: string, callback: VoidFunction) => void
    signout: (callback: VoidFunction) => void
}


const AuthContext = createContext<AuthProviderProps>(null!)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<any>('id.syarif@gmail.com')

    const signin = (user: string ) => {
        setUser(user)
    }

    const signout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}