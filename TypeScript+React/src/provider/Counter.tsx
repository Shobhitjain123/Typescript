import React, {createContext, useContext, useState} from 'react'

interface CounterContextValue{
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

interface CounterProviderProps {
    children: React.ReactNode
}

const CounterContext = createContext<CounterContextValue | null>(null)

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
    const [count, setCount] = useState<number>(0)
    return (
        <CounterContext.Provider value={{
            count,
            setCount
        }}>
            {props.children}
        </CounterContext.Provider>
    )
    
}

export const useCounter = () => {
    return useContext(CounterContext)
}