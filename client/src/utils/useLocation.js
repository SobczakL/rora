import { useState, useEffect } from "react";

function useLocation() {
    const [location, setLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);

    useEffect(() => {
        localStorage.clear();
        const storedLocation = JSON.parse(localStorage.getItem("location"));

        if (storedLocation) {
            setLocation(storedLocation);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const currentLocation = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        };
                        setLocation(currentLocation);
                        localStorage.setItem(
                            "location",
                            JSON.stringify(currentLocation)
                        );
                    },
                    (error) => {
                        setLocationError(error);
                    }
                );
            } else {
                setLocationError(
                    new Error("Geolocation not supported in this browser.")
                );
            }
        }
    }, []);

    return { location, locationError };
}

export default useLocation;
