import GlobalContext from "./GlobalContex";

const GlobalState = (props)=>{
    const host = "http://localhost:5000";

}
return(
    <GlobalContext.Provider value={{}}>
        {props.children}
    </GlobalContext.Provider>
)

export default GlobalState