import { useEffect, useMemo, useState } from "react";

import ConfirmModal from "../confirmModal";
import IntakeControls from "../intakeControls";
import IntakeHistory from "../intakeHistory";
import ProgressCard from "../progressCard";
import Settings from "../settings";

import {
    DEFAULT_GLASS_ML,
    DEFAULT_GOAL,
    GLASS_ML_KEY,
    GOAL_KEY,
    MIN_GLASS_ML,
    STORAGE_KEY,
} from "../../constants/waterConstants";

import useLocalStorage from "../../hooks/useLocalStorage";

import {
    calculateProgress,
    createWaterLogs,
    formatDateNice,
    getDayLogs,
    getTodayISO,
    normalizePositiveInteger,
    normalizeWaterLogs,
    shiftISODate,
    sumWaterMl,
} from "../../utils/waterUtils";

import { Styled } from "./styled";

const WaterIntake = () => {
    const {
        value: glassMl,
        setValue: setGlassMl,
        error: glassStorageError,
    } = useLocalStorage(GLASS_ML_KEY, DEFAULT_GLASS_ML, (value) =>
        normalizePositiveInteger(value, DEFAULT_GLASS_ML, MIN_GLASS_ML),
    );

    const {
        value: goal,
        setValue: setGoal,
        error: goalStorageError,
    } = useLocalStorage(GOAL_KEY, DEFAULT_GOAL, (value) =>
        normalizePositiveInteger(value, DEFAULT_GOAL, 1),
    );

    const {
        value: logs,
        setValue: setLogs,
        error: logsStorageError,
    } = useLocalStorage(STORAGE_KEY, [], (value) =>
        normalizeWaterLogs(value, glassMl),
    );

    const [selectedDate, setSelectedDate] = useState(getTodayISO);

    const [addCount, setAddCount] = useState("1");

    const [editingGoal, setEditingGoal] = useState(String(goal));

    const [editingGlassMl, setEditingGlassMl] = useState(String(glassMl));

    const [confirm, setConfirm] = useState(null);

    useEffect(() => {
        setEditingGoal(String(goal));
    }, [goal]);

    useEffect(() => {
        setEditingGlassMl(String(glassMl));
    }, [glassMl]);

    const logsForDay = useMemo(
        () => getDayLogs(logs, selectedDate),
        [logs, selectedDate],
    );

    const countForDay = logsForDay.length;

    const consumedMl = useMemo(() => sumWaterMl(logsForDay), [logsForDay]);

    const percentage = calculateProgress(countForDay, goal);

    const storageError =
        glassStorageError || goalStorageError || logsStorageError;

    const askConfirm = (options) => {
        setConfirm({
            title: "Are you sure?",
            message: "",
            confirmText: "Confirm",
            cancelText: "Cancel",
            tone: "default",
            ...options,
        });
    };

    const closeConfirm = () => {
        setConfirm(null);
    };

    const handleConfirm = () => {
        const action = confirm?.onConfirm;

        setConfirm(null);

        if (typeof action === "function") {
            action();
        }
    };

    const addGlasses = (count) => {
        const safeCount = normalizePositiveInteger(count, 1, 1);

        const newLogs = createWaterLogs({
            count: safeCount,
            date: selectedDate,
            ml: glassMl,
        });

        setLogs((current) => [...newLogs, ...current]);

        setAddCount("1");
    };

    const undoLast = () => {
        const lastLog = logsForDay[0];

        if (!lastLog) {
            return;
        }

        setLogs((current) => current.filter((log) => log.id !== lastLog.id));
    };

    const requestDelete = (log) => {
        askConfirm({
            title: "Delete water entry?",
            message: `Delete this ${log.ml} ml entry from ${formatDateNice(selectedDate)}?`,
            confirmText: "Delete",
            tone: "danger",
            onConfirm: () => {
                setLogs((current) =>
                    current.filter((item) => item.id !== log.id),
                );
            },
        });
    };

    const requestClearDay = () => {
        if (logsForDay.length === 0) {
            return;
        }

        askConfirm({
            title: "Clear selected day?",
            message: `Remove all ${logsForDay.length} water entries from ${formatDateNice(selectedDate)}?`,
            confirmText: "Clear day",
            tone: "danger",
            onConfirm: () => {
                setLogs((current) =>
                    current.filter((log) => log.date !== selectedDate),
                );
            },
        });
    };

    const requestGoalSave = () => {
        const nextGoal = normalizePositiveInteger(editingGoal, DEFAULT_GOAL, 1);

        setEditingGoal(String(nextGoal));

        if (nextGoal === goal) {
            return;
        }

        askConfirm({
            title: "Update daily goal?",
            message: `Set your daily goal to ${nextGoal} glasses?`,
            confirmText: "Set goal",
            onConfirm: () => setGoal(nextGoal),
        });
    };

    const requestGoalReset = () => {
        if (goal === DEFAULT_GOAL) {
            setEditingGoal(String(DEFAULT_GOAL));

            return;
        }

        askConfirm({
            title: "Reset daily goal?",
            message: `Reset the daily goal to ${DEFAULT_GOAL} glasses?`,
            confirmText: "Reset",
            tone: "danger",
            onConfirm: () => setGoal(DEFAULT_GOAL),
        });
    };

    const requestGlassMlSave = () => {
        const nextGlassMl = normalizePositiveInteger(
            editingGlassMl,
            DEFAULT_GLASS_ML,
            MIN_GLASS_ML,
        );

        setEditingGlassMl(String(nextGlassMl));

        if (nextGlassMl === glassMl) {
            return;
        }

        askConfirm({
            title: "Update glass size?",
            message: `New entries will use ${nextGlassMl} ml per glass. Existing entries will keep their original amounts.`,
            confirmText: "Set glass size",
            onConfirm: () => setGlassMl(nextGlassMl),
        });
    };

    const requestGlassMlReset = () => {
        if (glassMl === DEFAULT_GLASS_ML) {
            setEditingGlassMl(String(DEFAULT_GLASS_ML));

            return;
        }

        askConfirm({
            title: "Reset glass size?",
            message: `Reset new water entries to ${DEFAULT_GLASS_ML} ml per glass?`,
            confirmText: "Reset",
            tone: "danger",
            onConfirm: () => setGlassMl(DEFAULT_GLASS_ML),
        });
    };

    return (
        <Styled.Wrapper id="tracker">
            <Styled.Container>
                <Styled.Hero>
                    <Styled.HeroContent>
                        <Styled.Label>Daily Hydration</Styled.Label>

                        <Styled.Title>Water Intake</Styled.Title>

                        <Styled.Description>
                            Log your water, review previous days, and keep your
                            daily hydration goal visible without creating an
                            account.
                        </Styled.Description>
                    </Styled.HeroContent>

                    <Styled.Summary>
                        <Styled.SummaryValue>
                            {countForDay}/{goal}
                        </Styled.SummaryValue>

                        <Styled.SummaryLabel>
                            glasses logged
                        </Styled.SummaryLabel>

                        <Styled.SummaryText>
                            {consumedMl} ml recorded
                        </Styled.SummaryText>
                    </Styled.Summary>
                </Styled.Hero>

                {storageError && (
                    <Styled.ErrorNotice role="alert">
                        Browser storage could not be updated. Recent changes may
                        not remain after refresh.
                    </Styled.ErrorNotice>
                )}

                <Styled.Content>
                    <ProgressCard
                        count={countForDay}
                        goal={goal}
                        percentage={percentage}
                        consumedMl={consumedMl}
                        glassMl={glassMl}
                    />

                    <IntakeControls
                        selectedDate={selectedDate}
                        addCount={addCount}
                        setAddCount={setAddCount}
                        onDateChange={(value) =>
                            setSelectedDate(value || getTodayISO())
                        }
                        onPreviousDay={() =>
                            setSelectedDate(shiftISODate(selectedDate, -1))
                        }
                        onNextDay={() =>
                            setSelectedDate(shiftISODate(selectedDate, 1))
                        }
                        onToday={() => setSelectedDate(getTodayISO())}
                        onAddGlasses={addGlasses}
                        onUndo={undoLast}
                        canUndo={logsForDay.length > 0}
                    />

                    <Settings
                        editingGoal={editingGoal}
                        editingGlassMl={editingGlassMl}
                        setEditingGoal={setEditingGoal}
                        setEditingGlassMl={setEditingGlassMl}
                        minGlassMl={MIN_GLASS_ML}
                        onSaveGoal={requestGoalSave}
                        onResetGoal={requestGoalReset}
                        onSaveGlassMl={requestGlassMlSave}
                        onResetGlassMl={requestGlassMlReset}
                        onClearDay={requestClearDay}
                        hasLogs={logsForDay.length > 0}
                    />

                    <IntakeHistory
                        logs={logsForDay}
                        formattedDate={formatDateNice(selectedDate)}
                        onDelete={requestDelete}
                    />

                    <Styled.StorageNote>
                        Water records are stored locally in this browser. Each
                        entry keeps the glass size used when it was created.
                    </Styled.StorageNote>
                </Styled.Content>

                <ConfirmModal
                    isOpen={Boolean(confirm)}
                    title={confirm?.title}
                    message={confirm?.message}
                    confirmText={confirm?.confirmText}
                    cancelText={confirm?.cancelText}
                    tone={confirm?.tone}
                    onConfirm={handleConfirm}
                    onCancel={closeConfirm}
                />
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default WaterIntake;
