import { DEFAULT_GLASS_ML, MIN_GLASS_ML } from "../constants/waterConstants";

export const createId = () => {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return crypto.randomUUID();
    }

    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
};

export const getTodayISO = () => {
    const date = new Date();

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const isValidISODate = (value) => {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return false;
    }

    const date = new Date(`${value}T12:00:00`);

    if (Number.isNaN(date.getTime())) {
        return false;
    }

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}` === value;
};

export const formatDateNice = (iso) => {
    if (!isValidISODate(iso)) {
        return "Invalid date";
    }

    const date = new Date(`${iso}T12:00:00`);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
};

export const shiftISODate = (iso, numberOfDays) => {
    const sourceDate = isValidISODate(iso) ? iso : getTodayISO();

    const date = new Date(`${sourceDate}T12:00:00`);

    date.setDate(date.getDate() + Number(numberOfDays || 0));

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const normalizePositiveInteger = (value, fallback = 1, minimum = 1) => {
    const parsedValue = Math.floor(Number(value));

    const safeMinimum = Math.max(1, Math.floor(Number(minimum) || 1));

    const safeFallback = Math.max(
        safeMinimum,
        Math.floor(Number(fallback) || safeMinimum),
    );

    if (!Number.isFinite(parsedValue)) {
        return safeFallback;
    }

    return Math.max(safeMinimum, parsedValue);
};

const normalizeCreatedAt = (value, fallback) => {
    const numericValue = Number(value);

    if (Number.isFinite(numericValue) && numericValue > 0) {
        return numericValue;
    }

    if (typeof value === "string") {
        const parsedDate = Date.parse(value);

        if (Number.isFinite(parsedDate)) {
            return parsedDate;
        }
    }

    return fallback;
};

export const normalizeWaterLog = (
    log,
    fallbackGlassMl = DEFAULT_GLASS_ML,
    index = 0,
) => {
    if (!log || typeof log !== "object" || !isValidISODate(log.date)) {
        return null;
    }

    const fallbackMl = normalizePositiveInteger(
        fallbackGlassMl,
        DEFAULT_GLASS_ML,
        MIN_GLASS_ML,
    );

    /*
     * Old Water Intake records did not store ml.
     * When such a record is found, the current
     * glass size is stored on the migrated record.
     */
    const storedMl = Number(log.ml);

    const ml =
        Number.isFinite(storedMl) && storedMl > 0
            ? Math.round(storedMl)
            : fallbackMl;

    const fallbackTime = Date.now() - index;

    return {
        id: typeof log.id === "string" && log.id.trim() ? log.id : createId(),

        date: log.date,

        ml,

        createdAt: normalizeCreatedAt(log.createdAt, fallbackTime),
    };
};

export const normalizeWaterLogs = (
    value,
    fallbackGlassMl = DEFAULT_GLASS_ML,
) => {
    if (!Array.isArray(value)) {
        return [];
    }

    return value
        .map((log, index) => normalizeWaterLog(log, fallbackGlassMl, index))
        .filter(Boolean);
};

export const createWaterLogs = ({ count, date, ml }) => {
    const safeCount = normalizePositiveInteger(count, 1, 1);

    const safeDate = isValidISODate(date) ? date : getTodayISO();

    const safeMl = normalizePositiveInteger(ml, DEFAULT_GLASS_ML, MIN_GLASS_ML);

    const createdAt = Date.now();

    return Array.from(
        {
            length: safeCount,
        },
        (_, index) => ({
            id: createId(),

            date: safeDate,

            ml: safeMl,

            createdAt: createdAt + index,
        }),
    );
};

export const getDayLogs = (logs, date) => {
    if (!Array.isArray(logs) || !isValidISODate(date)) {
        return [];
    }

    return logs
        .filter((log) => log && log.date === date)
        .sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
};

export const sumWaterMl = (logs) => {
    if (!Array.isArray(logs)) {
        return 0;
    }

    return logs.reduce((total, log) => {
        const ml = Number(log?.ml);

        if (!Number.isFinite(ml) || ml <= 0) {
            return total;
        }

        return total + ml;
    }, 0);
};

export const calculateProgress = (current, goal) => {
    const safeCurrent = Math.max(0, Number(current) || 0);

    const safeGoal = Math.max(1, Number(goal) || 1);

    return Math.min(100, Math.round((safeCurrent / safeGoal) * 100));
};
