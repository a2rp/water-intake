import { FaTint } from "react-icons/fa";
import { Styled } from "./styled";

const ProgressRing = ({ value, max, size = 156, stroke = 10 }) => {
    const safeMax = Math.max(1, Number(max) || 1);

    const safeValue = Math.max(0, Math.min(Number(value) || 0, safeMax));

    const radius = (size - stroke) / 2;

    const circumference = 2 * Math.PI * radius;

    const progress = circumference * (safeValue / safeMax);

    const offset = circumference - progress;

    return (
        <Styled.Ring aria-label={`Progress ${safeValue} of ${safeMax} glasses`}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                aria-hidden="true"
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#202020"
                    strokeWidth={stroke}
                />

                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#8ac5ff"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
        </Styled.Ring>
    );
};

const ProgressCard = ({ count, goal, percentage, consumedMl, glassMl }) => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <div>
                    <Styled.Label>Daily Progress</Styled.Label>

                    <Styled.Title>Hydration overview</Styled.Title>
                </div>

                <Styled.Status>
                    <FaTint aria-hidden="true" />
                    {percentage}% complete
                </Styled.Status>
            </Styled.Header>

            <Styled.Content>
                <Styled.RingArea>
                    <ProgressRing value={count} max={goal} />

                    <Styled.RingText>
                        <strong>
                            {count}/{goal}
                        </strong>

                        <span>glasses</span>
                    </Styled.RingText>
                </Styled.RingArea>

                <Styled.Stats>
                    <Styled.Stat>
                        <Styled.StatValue>{consumedMl}</Styled.StatValue>

                        <Styled.StatLabel>ml consumed</Styled.StatLabel>
                    </Styled.Stat>

                    <Styled.Stat>
                        <Styled.StatValue>{goal}</Styled.StatValue>

                        <Styled.StatLabel>daily goal</Styled.StatLabel>
                    </Styled.Stat>

                    <Styled.Stat>
                        <Styled.StatValue>{glassMl}</Styled.StatValue>

                        <Styled.StatLabel>current ml / glass</Styled.StatLabel>
                    </Styled.Stat>
                </Styled.Stats>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default ProgressCard;
