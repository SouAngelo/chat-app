import React, { useState, createContext } from 'react'

export const chatContext = createContext({})

export default function ChatProvider({children}){

    const [username, setUsername] = useState('')
    const [secret, setSecret] = useState('')

    return <chatContext.Provider value={{username, setUsername, secret, setSecret}}>{children}</chatContext.Provider>
}