import { FaBullseye, FaTint, FaTrashAlt } from "react-icons/fa";

import { Styled } from "./styled";

const Settings = ({
    editingGoal,
    editingGlassMl,
    setEditingGoal,
    setEditingGlassMl,
    minGlassMl,
    onSaveGoal,
    onResetGoal,
    onSaveGlassMl,
    onResetGlassMl,
    onClearDay,
    hasLogs,
}) => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <div>
                    <Styled.Label>Settings</Styled.Label>

                    <Styled.Title>Daily preferences</Styled.Title>
                </div>
            </Styled.Header>

            <Styled.Grid>
                <Styled.Setting>
                    <Styled.IconBox>
                        <FaBullseye aria-hidden="true" />
                    </Styled.IconBox>

                    <Styled.SettingContent>
                        <Styled.SettingTitle>Daily goal</Styled.SettingTitle>

                        <Styled.SettingText>
                            Number of glasses you want to drink each day.
                        </Styled.SettingText>

                        <Styled.Controls>
                            <Styled.Input
                                type="number"
                                inputMode="numeric"
                                min="1"
                                step="1"
                                value={editingGoal}
                                onChange={(event) =>
                                    setEditingGoal(event.target.value)
                                }
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        onSaveGoal();
                                    }
                                }}
                                aria-label="Daily goal in glasses"
                            />

                            <Styled.Button type="button" onClick={onSaveGoal}>
                                Set goal
                            </Styled.Button>

                            <Styled.DangerButton
                                type="button"
                                onClick={onResetGoal}
                            >
                                Reset
                            </Styled.DangerButton>
                        </Styled.Controls>
                    </Styled.SettingContent>
                </Styled.Setting>

                <Styled.Setting>
                    <Styled.IconBox>
                        <FaTint aria-hidden="true" />
                    </Styled.IconBox>

                    <Styled.SettingContent>
                        <Styled.SettingTitle>Glass size</Styled.SettingTitle>

                        <Styled.SettingText>
                            Milliliters recorded for each new glass you log.
                        </Styled.SettingText>

                        <Styled.Controls>
                            <Styled.Input
                                type="number"
                                inputMode="numeric"
                                min={minGlassMl}
                                step="50"
                                value={editingGlassMl}
                                onChange={(event) =>
                                    setEditingGlassMl(event.target.value)
                                }
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        onSaveGlassMl();
                                    }
                                }}
                                aria-label="Glass size in milliliters"
                            />

                            <Styled.Button
                                type="button"
                                onClick={onSaveGlassMl}
                            >
                                Set ml
                            </Styled.Button>

                            <Styled.DangerButton
                                type="button"
                                onClick={onResetGlassMl}
                            >
                                Reset
                            </Styled.DangerButton>
                        </Styled.Controls>
                    </Styled.SettingContent>
                </Styled.Setting>
            </Styled.Grid>

            <Styled.ClearSection>
                <div>
                    <Styled.ClearTitle>Clear selected day</Styled.ClearTitle>

                    <Styled.ClearText>
                        Permanently remove every water entry for the selected
                        date.
                    </Styled.ClearText>
                </div>

                <Styled.DangerButton
                    type="button"
                    onClick={onClearDay}
                    disabled={!hasLogs}
                >
                    <FaTrashAlt aria-hidden="true" />
                    Clear day
                </Styled.DangerButton>
            </Styled.ClearSection>
        </Styled.Wrapper>
    );
};

export default Settings;
