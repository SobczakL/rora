import { useState, useEffect } from "react";

export function useLoading() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setLoading(true);
        console.log(isLoading)
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    return isLoading;
}