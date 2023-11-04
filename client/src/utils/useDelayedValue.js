import { useState, useEffect } from "react";

export function useDelayedValue(initialValue, delay) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue(!initialValue);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return value;
}
