import axios from "axios"
import { serverURL } from "./config"

export function savedRouteChecker(username, routeId, callback){
    axios.post(`${serverURL}/home/verifySavedRoute`, {
        username: username,
        routeId: routeId
    }) 
    .then((response) => {
        callback(true)
    })
    .catch((error) => {
        callback(false)
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