import axios from "axios"
import { serverURL } from "./config"

export function savedRouteChecker(username, routeId){
    axios.post(`${serverURL}/home/savedRoutes`, {
        username: username,
        routeId: routeId
    }) 
    .then((response) => {
        return true
    })
    .catch((error) => {
        return false
    })
}

export function saveNewRoute(data){
    axios.post(`${serverURL}/home/saveRoute`, data) 
}

export function deleteSavedRoute(username, routeId){
    axios.post(`${serverURL}/home/deleteRoute`, {
        username: username,
        routeId: routeId
    })
}