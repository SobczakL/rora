import axios from "axios"
import { useEffect, useState } from "react"
import { serverURL } from "./config"

function useSearchRoutes(searchInput){
    const [searchData, setSearchData] = useState(null)
    const [searchLoading, setSearchLoading] = useState(null)
    const [searchError, setSearchError] = useState(null)

    useEffect(() => {
        if(typeof searchInput === 'string' && searchInput.trim() === ''){
            return [];
        }
        else {
            setSearchLoading(true);
            axios
                .post(`${serverURL}/home/search`, {
                    searchInput: searchInput
                })
                .then((response) => {
                    setSearchData(response.data);
                })
                .catch((error) => {
                    setSearchError(error);
                })
                .finally(() => {
                    setSearchLoading(false);
                }); 
            }
        }, [searchInput]);
    
    return { searchData, searchLoading, searchError };
}
export default useSearchRoutes;