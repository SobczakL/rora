
export default function getStopsAfterCurrentLocation(stops) {
    const direction = JSON.parse(localStorage.getItem('direction'));

    //find all stops going in the same direction
    const stopsInDirection = stops.itineraries.filter((trip) => trip.direction_headsign === direction);

    const currentLatLon = JSON.parse(localStorage.getItem('location'));  
    //find index of stops closest to current location
    const closestStopIndex = findClosestStopIndex(stopsInDirection[0].stops, currentLatLon);
    if (closestStopIndex === -1) {
        return [];
    }

    return stopsInDirection[0].stops.slice(closestStopIndex + 1);
}  
//parse all stops to find nearest stop
function findClosestStopIndex(stops, currentLatLon) {
    let closestStopIndex = -1;
    let smallestDistance = Infinity;

    for (let i = 0; i < stops.length; i++) {
    const stop = stops[i];
    const latDiff = stop.stop_lat - currentLatLon.latitude;
    const lonDiff = stop.stop_lon - currentLatLon.longitude;

    const distance = latDiff * latDiff + lonDiff * lonDiff;

        if (distance < smallestDistance) {
            smallestDistance = distance;
            closestStopIndex = i;
        }
    }  

    return closestStopIndex;
}

