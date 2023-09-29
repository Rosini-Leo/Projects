import React,{
useState,
useContext,
createContext,
}from "react";

import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const[isSidebarOpen,setisSidebarOpen]= useState(false)
    const[query,setQuery] = useState('')
    const[scrollPosition,setScrollPosition] = useState(0)
    const{ isLoading , data , isError , count } = useFetch(`s=${query}`);


    /* Sidebar */
    const openSidebar = () =>{
        setisSidebarOpen(true)
    }
    const closeSidebar = () =>{
        setisSidebarOpen(false)
    }

    /* Cocktail function */

    const searchCocktail = (input) =>{
        setQuery(input)
    }

    const getScrollPosition = value => setScrollPosition(value)
    const deleteScrollPosition = () => setScrollPosition(0)

    return(
    <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        query,
        isLoading,
        data,
        isError,
        count,
        searchCocktail,
        getScrollPosition,
        deleteScrollPosition,
    }}>
        {children}
    </AppContext.Provider>
    )
}; 

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppProvider,useGlobalContext};