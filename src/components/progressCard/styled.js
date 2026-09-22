import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 24px;

        background: #070707;

        border: 1px solid #272727;
        border-radius: 20px;

        box-shadow: 0 10px 34px rgba(0, 0, 0, 0.18);

        @media (max-width: 520px) {
            padding: 19px;
        }
    `,

    Header: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 26px;

        @media (max-width: 500px) {
            flex-direction: column;
            gap: 12px;
        }
    `,

    Label: styled.p`
        margin: 0 0 5px;

        color: #626262;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,

    Title: styled.h2`
        margin: 0;

        color: #dfdfdf;

        font-size: 1.05rem;
        font-weight: 700;
    `,

    Status: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        padding: 7px 10px;

        color: #9ebeda;

        border: 1px solid #2d4358;
        border-radius: 999px;

        font-size: 0.67rem;
        font-weight: 700;

        svg {
            width: 11px;
            height: 11px;
        }
    `,

    Content: styled.div`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 42px;
        align-items: center;

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
            gap: 28px;
        }
    `,

    RingArea: styled.div`
        position: relative;

        display: grid;
        place-items: center;

        width: 156px;
        height: 156px;

        @media (max-width: 700px) {
            margin: 0 auto;
        }
    `,

    Ring: styled.div`
        display: grid;
        place-items: center;

        color: #8ac5ff;

        svg {
            display: block;
        }
    `,

    RingText: styled.div`
        position: absolute;

        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
            color: #e9e9e9;

            font-size: 1.7rem;
            font-weight: 700;
            letter-spacing: -0.035em;
            line-height: 1;
        }

        span {
            margin-top: 5px;

            color: #646464;

            font-size: 0.65rem;
            font-weight: 700;
        }
    `,

    Stats: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    Stat: styled.div`
        min-height: 92px;

        padding: 16px;

        border: 1px solid #232323;
        border-radius: 13px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #414141;

            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }
    `,

    StatValue: styled.div`
        color: #d8d8d8;

        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.03em;
    `,

    StatLabel: styled.div`
        margin-top: 7px;

        color: #5e5e5e;

        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    `,
};
