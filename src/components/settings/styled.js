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
        margin-bottom: 18px;
    `,

    Label: styled.p`
        margin: 0 0 5px;

        color: #606060;

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

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 780px) {
            grid-template-columns: 1fr;
        }
    `,

    Setting: styled.article`
        display: flex;
        gap: 14px;

        padding: 18px;

        border: 1px solid #242424;
        border-radius: 13px;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #404040;

            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 450px) {
            flex-direction: column;
        }
    `,

    IconBox: styled.div`
        display: grid;
        place-items: center;

        flex-shrink: 0;

        width: 40px;
        height: 40px;

        color: #aaccee;

        border: 1px solid #30475d;
        border-radius: 10px;

        svg {
            width: 15px;
            height: 15px;
        }
    `,

    SettingContent: styled.div`
        flex: 1;

        min-width: 0;
    `,

    SettingTitle: styled.h3`
        margin: 0;

        color: #cfcfcf;

        font-size: 0.84rem;
        font-weight: 700;
    `,

    SettingText: styled.p`
        margin: 6px 0 14px;

        color: #686868;

        font-size: 0.7rem;
        line-height: 1.6;
    `,

    Controls: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 7px;
    `,

    Input: styled.input`
        width: 110px;
        min-height: 40px;

        padding: 8px 10px;

        color: #d0d0d0;
        background: #060606;

        border: 1px solid #303030;
        border-radius: 9px;

        font: inherit;
        font-size: 0.75rem;

        outline: none;

        appearance: textfield;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            appearance: none;
        }

        &:focus {
            border-color: #5c83aa;

            box-shadow: 0 0 0 3px rgba(85, 139, 192, 0.08);
        }
    `,

    Button: styled.button`
        min-height: 40px;

        padding: 8px 12px;

        color: #9c9c9c;
        background: transparent;

        border: 1px solid #303030;
        border-radius: 9px;

        font: inherit;
        font-size: 0.7rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover:not(:disabled) {
            border-color: #5b5b5b;

            box-shadow: 0 5px 14px rgba(0, 0, 0, 0.19);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    `,

    DangerButton: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 40px;

        padding: 8px 12px;

        color: #d58d8d;
        background: transparent;

        border: 1px solid #4b2d2d;
        border-radius: 9px;

        font: inherit;
        font-size: 0.7rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 12px;
            height: 12px;
        }

        &:hover:not(:disabled) {
            border-color: #7c4343;

            box-shadow: 0 5px 14px rgba(0, 0, 0, 0.19);

            text-shadow: 0 0 8px rgba(255, 140, 140, 0.13);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
    `,

    ClearSection: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;

        margin-top: 16px;
        padding-top: 18px;

        border-top: 1px solid #202020;

        @media (max-width: 560px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `,

    ClearTitle: styled.h3`
        margin: 0;

        color: #b9b9b9;

        font-size: 0.78rem;
    `,

    ClearText: styled.p`
        margin: 5px 0 0;

        color: #5e5e5e;

        font-size: 0.68rem;
        line-height: 1.6;
    `,
};
