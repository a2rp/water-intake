import { useEffect, useState } from "react";

const readStoredValue = (key, initialValue, validate) => {
    try {
        const storedValue = window.localStorage.getItem(key);

        if (storedValue === null) {
            return initialValue;
        }

        const parsedValue = JSON.parse(storedValue);

        if (typeof validate === "function") {
            return validate(parsedValue);
        }

        return parsedValue;
    } catch {
        return initialValue;
    }
};

const useLocalStorage = (key, initialValue, validate) => {
    const [value, setValue] = useState(() =>
        readStoredValue(key, initialValue, validate),
    );

    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));

            setError(false);
        } catch {
            setError(true);
        }
    }, [key, value]);

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key);

            setValue(initialValue);
            setError(false);
        } catch {
            setError(true);
        }
    };

    return {
        value,
        setValue,
        error,
        removeValue,
    };
};

export default useLocalStorage;
