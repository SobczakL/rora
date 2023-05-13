import axios from "axios"
import { useEffect, useState } from "react"
import { serverURL } from "./config"

function useGetSavedRoutes(){
    const [favouriteData, setFavouriteData] = useState(null)
    const [favouriteLoading, setFavouriteLoading] = useState(null)
    const [favouriteError, setFavouriteError] = useState(null)

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${serverURL}/home/favourites`,{
                lat: userLocation.latitude,
                lon: userLocation.longitude
            })
            .then((response) => {
                setFavouriteData(response.data);
            })
            .catch((error) => {
                setFavouriteError(error);
            })
            .finally(() => {
                setFavouriteLoading(false);
            });
        }, []);
    
    return { favouriteData, favouriteLoading, favouriteError };
}
export default useGetSavedRoutes;