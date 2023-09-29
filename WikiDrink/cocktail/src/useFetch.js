import { useState , useEffect } from "react";
import axios from "axios";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query,type = false) =>{
    // define 'type' of url 
    const url = type ? (singleUrl) : (searchUrl);

    // Hook that check URL 'params'- 'function'
    const[isLoading,setisLoading] = useState(true)
    const[data,setData] = useState([])
    const[count,setCount] = useState(0)
    const[isError,setisError] = useState(false)

    useEffect(()=>{
        (async(query)=>{
            setisError(false)
            setisLoading(true)
            try {
                const response = await axios.get(`${url}${query}`)
                setData(response.data)
                setCount(response.data.drinks.length)
                // console.log(response);
            } catch (err) {
                setisError(true)
                setCount(0)
            }
            setisLoading(false)
        })(query);
    },[url,query])

    return{isLoading,data,count,isError};
}

export default useFetch;