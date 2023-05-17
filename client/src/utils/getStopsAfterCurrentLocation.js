
export default function getStopsAfterCurrentLocation(stops){
    const currentLatLon = JSON.parse(localStorage.getItem('location'))
    const currentIndex = stops.findIndex((stop) => {
        return stop.lat === currentLatLon.latitude && stop.longitude === currentLatLon.lon
    })

    if(currentIndex === -1){
        return []
    }

    return stops.slice(currentIndex + 1)
}