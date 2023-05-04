import { useState, useEffect } from "react";

function useLocation() {
    const [location, setLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            },
            (error) => {
            setLocationError(error);
            }
        );
        } else {
        setLocationError(new Error("Geolocation not supported in this browser."));
        }
    }, []);

    return { location, locationError };
}

export default useLocation;