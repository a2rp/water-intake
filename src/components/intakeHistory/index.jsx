import { FaTint, FaTrashAlt } from "react-icons/fa";

import { Styled } from "./styled";

const IntakeHistory = ({ logs = [], formattedDate, onDelete }) => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <div>
                    <Styled.Label>Intake History</Styled.Label>

                    <Styled.Title>{formattedDate}</Styled.Title>
                </div>

                <Styled.Count>
                    {logs.length} {logs.length === 1 ? "entry" : "entries"}
                </Styled.Count>
            </Styled.Header>

            {logs.length === 0 ? (
                <Styled.Empty>
                    <FaTint aria-hidden="true" />

                    <strong>No water logged</strong>

                    <span>
                        Add your first glass for this day using the controls
                        above.
                    </span>
                </Styled.Empty>
            ) : (
                <Styled.List>
                    {logs.map((log, index) => (
                        <Styled.Item key={log.id}>
                            <Styled.ItemNumber>
                                {String(logs.length - index).padStart(2, "0")}
                            </Styled.ItemNumber>

                            <Styled.ItemContent>
                                <Styled.ItemTitle>
                                    Glass #{logs.length - index}
                                </Styled.ItemTitle>

                                <Styled.ItemMeta>
                                    <span>
                                        {new Date(
                                            log.createdAt,
                                        ).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </span>

                                    <span>{log.ml} ml</span>
                                </Styled.ItemMeta>
                            </Styled.ItemContent>

                            <Styled.DeleteButton
                                type="button"
                                onClick={() => onDelete(log)}
                                aria-label={`Delete glass ${logs.length - index}`}
                                title="Delete entry"
                            >
                                <FaTrashAlt aria-hidden="true" />
                            </Styled.DeleteButton>
                        </Styled.Item>
                    ))}
                </Styled.List>
            )}
        </Styled.Wrapper>
    );
};

export default IntakeHistory;
