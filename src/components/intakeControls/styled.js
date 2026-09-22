import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,

    Section: styled.section`
        padding: 22px;

        background: #080808;

        border: 1px solid #252525;
        border-radius: 17px;

        box-shadow: 0 7px 22px rgba(0, 0, 0, 0.14);
    `,

    SectionHeader: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;

        margin-bottom: 18px;

        > svg {
            width: 16px;
            height: 16px;

            color: #646464;
        }
    `,

    Label: styled.p`
        margin: 0 0 4px;

        color: #606060;

        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,

    Title: styled.h2`
        margin: 0;

        color: #dcdcdc;

        font-size: 1rem;
        font-weight: 700;
    `,

    QuickActions: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    `,

    DateControls: styled.div`
        display: grid;
        grid-template-columns:
            auto
            minmax(150px, 1fr)
            auto
            auto;
        gap: 8px;

        @media (max-width: 520px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    Button: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 13px;

        color: #9d9d9d;
        background: #080808;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.74rem;
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
            border-color: #5b5b5b;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);

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

    PrimaryButton: styled.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 13px;

        color: #dcecff;
        background: #08111b;

        border: 1px solid #355474;
        border-radius: 10px;

        font: inherit;
        font-size: 0.74rem;
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

        &:hover {
            border-color: #5c83aa;

            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.22);

            text-shadow: 0 0 9px rgba(174, 215, 255, 0.18);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `,

    NumberInput: styled.input`
        width: 80px;
        min-height: 42px;

        padding: 9px 11px;

        color: #dddddd;
        background: #070707;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.78rem;

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

    DateInput: styled.input`
        width: 100%;
        min-height: 42px;

        padding: 9px 11px;

        color: #c8c8c8;
        background: #070707;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.74rem;

        outline: none;

        color-scheme: dark;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:focus {
            border-color: #5c83aa;

            box-shadow: 0 0 0 3px rgba(85, 139, 192, 0.08);
        }
    `,
};
