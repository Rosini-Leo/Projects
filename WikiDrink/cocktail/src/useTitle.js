import { useEffect } from "react";

// Hook that return a custom title
const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `Wiki Drink - ${title}`
    },[title])
}

export default useTitle;