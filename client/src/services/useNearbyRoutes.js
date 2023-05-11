import axios from "axios"
import { useEffect, useState } from "react"
import { baseURL } from "./config"

function useNearbyRoutes(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const userLocation = JSON.parse(localStorage.getItem('location'))

    let number = 0
    useEffect(() => {
        setLoading(true);
        axios
            .post(`http://localhost:8080/home`,{
                lat: userLocation.latitude,
                lon: userLocation.longitude
            })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                number ++
                console.log(number)
            })
            .catch((error) => {
                console.log(error)
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);
    
        return { data, loading, error };
    }
    
    export default useNearbyRoutes;