import { useState, useEffect, useCallback } from "react";

function useFetch (url){
  
    const [data , setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null)

 const fetchData = useCallback (async () =>{
        setLoading(true)
        setError(null)

        try{
            let response = await fetch(url)
            if(!response.ok){
                throw new Error("Failed to fetch")
            }
            let result = await response.json()
            console.log(result)
            setData(result)
        }catch(err){
           setError(err.message || "Something went wrong" )
        }finally{
            setLoading(false)
        }
    },[url])
     

    useEffect (()=>{
        fetchData()
    },[fetchData])

    return{ data , error, loading }
}

export default useFetch;