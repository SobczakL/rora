import { useState, useEffect } from "react";

export function useLoading() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return isLoading;
}
