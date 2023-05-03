import axios from "axios"
import { useEffect, useState } from "react"
import { baseURL } from "./baseURL"

function useUserData(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(url){
            setLoading(true);
            axios
                .get(`${baseURL}${url}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [url])

    return { data, loading, error }
}

export default useUserData;