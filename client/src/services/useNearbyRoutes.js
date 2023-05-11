import axios from "axios"
import { useEffect, useState } from "react"
import { serverURL } from "./config"

function useNearbyRoutes(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const userLocation = JSON.parse(localStorage.getItem('location'))

    useEffect(() => {
        setLoading(true);
        axios
            .post(`${serverURL}/home`,{
                lat: userLocation.latitude,
                lon: userLocation.longitude
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);
    
    return { data, loading, error };
}
export default useNearbyRoutes;