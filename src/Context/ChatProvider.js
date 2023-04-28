import { createContext, useContext, useEffect, useState } from "react";

const chatContex =createContext();

const ChatProvider = ({children})=>{

    const [user, setuser] = useState()

    // TODO: THIS USERINFO SHOULD COME FROM DATABASE
    localStorage.setItem("userInfo",{})
    useEffect(() => {
        // const userInfo= JSON.parse(localStorage.getItem('userInfo'))
        const userInfo = localStorage.getItem('userInfo')
        setuser(userInfo)
    }, [])

        // if(!userInfo){
        //     navigate('/')
        // }
    

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