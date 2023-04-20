import { createContext, useContext, useState } from "react";

const chatContex =createContext();

const ChatProvider = ({children})=>{

    const [user, setuser] = useState()

    return(
        <chatContex.Provider value={{user,setuser}}>
            {children}
        </chatContex.Provider>
    )
}

export const ChatState=()=>{
    return useContext(chatContex)
}

export default ChatProvider;