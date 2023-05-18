import { useState, useEffect } from "react";

export function useDelayedValue(initialValue, delay) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue(false);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return value;
}
