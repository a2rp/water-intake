import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 22px;

        background: #070707;

        border: 1px solid #252525;
        border-radius: 18px;

        box-shadow: 0 7px 22px rgba(0, 0, 0, 0.14);
    `,

    Header: styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 18px;

        @media (max-width: 480px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 9px;
        }
    `,

    Label: styled.p`
        margin: 0 0 5px;

        color: #616161;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,

    Title: styled.h2`
        margin: 0;

        color: #dddddd;

        font-size: 1rem;
        font-weight: 700;
    `,

    Count: styled.span`
        color: #626262;

        font-size: 0.68rem;
        font-weight: 700;
    `,

    Empty: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        min-height: 190px;

        padding: 30px;

        text-align: center;

        border: 1px dashed #292929;
        border-radius: 13px;

        svg {
            width: 21px;
            height: 21px;

            margin-bottom: 12px;

            color: #425970;
        }

        strong {
            color: #999999;

            font-size: 0.82rem;
        }

        span {
            max-width: 390px;

            margin-top: 7px;

            color: #5e5e5e;

            font-size: 0.72rem;
            line-height: 1.6;
        }
    `,

    List: styled.div`
        display: grid;
        gap: 8px;
    `,

    Item: styled.article`
        display: flex;
        align-items: center;
        gap: 13px;

        min-height: 64px;

        padding: 11px 12px;

        border: 1px solid #242424;
        border-radius: 11px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #3f3f3f;

            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.18);
        }
    `,

    ItemNumber: styled.div`
        flex-shrink: 0;

        color: #4f4f4f;

        font-size: 0.67rem;
        font-weight: 700;
    `,

    ItemContent: styled.div`
        flex: 1;

        min-width: 0;
    `,

    ItemTitle: styled.div`
        color: #bcbcbc;

        font-size: 0.78rem;
        font-weight: 700;
    `,

    ItemMeta: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 5px 14px;

        margin-top: 4px;

        color: #666666;

        font-size: 0.68rem;
    `,

    DeleteButton: styled.button`
        display: grid;
        place-items: center;

        flex-shrink: 0;

        width: 38px;
        height: 38px;

        padding: 0;

        color: #d08a8a;
        background: transparent;

        border: 1px solid #3c2b2b;
        border-radius: 9px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 13px;
            height: 13px;
        }

        &:hover {
            border-color: #754242;

            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

            text-shadow: 0 0 8px rgba(255, 140, 140, 0.16);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `,
};
