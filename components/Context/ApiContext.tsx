import { createContext, useState } from 'react'


type EnvContextProviderProps = {
    children: React.ReactNode
}
export const EnvContext = createContext({})

export const EnvContextProvider = ({ children }: EnvContextProviderProps) => {
    const [env,setEnv] = useState<any>({})

    return <EnvContext.Provider value={{env, setEnv}}>{children}</EnvContext.Provider>
}
