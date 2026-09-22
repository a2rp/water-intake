import {
    FaCalendarAlt,
    FaChevronLeft,
    FaChevronRight,
    FaPlus,
    FaUndo,
} from "react-icons/fa";

import { Styled } from "./styled";

const IntakeControls = ({
    selectedDate,
    addCount,
    setAddCount,
    onDateChange,
    onPreviousDay,
    onNextDay,
    onToday,
    onAddGlasses,
    onUndo,
    canUndo,
}) => {
    return (
        <Styled.Wrapper>
            <Styled.Section>
                <Styled.SectionHeader>
                    <div>
                        <Styled.Label>Log Water</Styled.Label>

                        <Styled.Title>Add glasses</Styled.Title>
                    </div>
                </Styled.SectionHeader>

                <Styled.QuickActions>
                    <Styled.PrimaryButton
                        type="button"
                        onClick={() => onAddGlasses(1)}
                    >
                        +1
                    </Styled.PrimaryButton>

                    <Styled.Button
                        type="button"
                        onClick={() => onAddGlasses(2)}
                    >
                        +2
                    </Styled.Button>

                    <Styled.Button
                        type="button"
                        onClick={() => onAddGlasses(3)}
                    >
                        +3
                    </Styled.Button>

                    <Styled.NumberInput
                        type="number"
                        inputMode="numeric"
                        min="1"
                        step="1"
                        value={addCount}
                        onChange={(event) => setAddCount(event.target.value)}
                        aria-label="Custom number of glasses"
                    />

                    <Styled.PrimaryButton
                        type="button"
                        onClick={() => onAddGlasses(addCount)}
                    >
                        <FaPlus aria-hidden="true" />
                        Add
                    </Styled.PrimaryButton>

                    <Styled.Button
                        type="button"
                        onClick={onUndo}
                        disabled={!canUndo}
                    >
                        <FaUndo aria-hidden="true" />
                        Undo
                    </Styled.Button>
                </Styled.QuickActions>
            </Styled.Section>

            <Styled.Section>
                <Styled.SectionHeader>
                    <div>
                        <Styled.Label>Selected Day</Styled.Label>

                        <Styled.Title>Browse records</Styled.Title>
                    </div>

                    <FaCalendarAlt aria-hidden="true" />
                </Styled.SectionHeader>

                <Styled.DateControls>
                    <Styled.Button
                        type="button"
                        onClick={onPreviousDay}
                        aria-label="Previous day"
                    >
                        <FaChevronLeft aria-hidden="true" />
                        Prev
                    </Styled.Button>

                    <Styled.DateInput
                        type="date"
                        value={selectedDate}
                        onChange={(event) => onDateChange(event.target.value)}
                        aria-label="Selected date"
                    />

                    <Styled.Button type="button" onClick={onToday}>
                        Today
                    </Styled.Button>

                    <Styled.Button
                        type="button"
                        onClick={onNextDay}
                        aria-label="Next day"
                    >
                        Next
                        <FaChevronRight aria-hidden="true" />
                    </Styled.Button>
                </Styled.DateControls>
            </Styled.Section>
        </Styled.Wrapper>
    );
};

export default IntakeControls;
