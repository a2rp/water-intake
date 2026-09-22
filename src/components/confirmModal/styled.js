import styled from "styled-components";

export const Styled = {
    Overlay: styled.div`
        position: fixed;
        inset: 0;
        z-index: 1200;

        display: grid;
        place-items: center;

        padding: 20px;

        background: rgba(0, 0, 0, 0.78);

        backdrop-filter: blur(8px);
    `,

    Card: styled.div`
        width: min(450px, 100%);

        padding: 28px;

        background: #0c0c0c;

        border: 1px solid #333333;
        border-radius: 20px;

        box-shadow: 0 26px 80px rgba(0, 0, 0, 0.58);

        @media (max-width: 480px) {
            padding: 22px 18px;
        }
    `,

    IconBox: styled.div`
        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        margin-bottom: 20px;

        color: ${({ $tone }) => ($tone === "danger" ? "#ff9b9b" : "#ddecff")};

        border: 1px solid
            ${({ $tone }) => ($tone === "danger" ? "#693333" : "#30475f")};

        border-radius: 12px;

        svg {
            width: 17px;
            height: 17px;
        }
    `,

    Content: styled.div``,

    Title: styled.h2`
        margin: 0;

        color: #f2f2f2;

        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        line-height: 1.3;
    `,

    Message: styled.p`
        margin: 12px 0 0;

        color: #8d8d8d;

        font-size: 0.86rem;
        line-height: 1.7;
    `,

    Actions: styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 9px;

        margin-top: 28px;

        @media (max-width: 420px) {
            flex-direction: column-reverse;
        }
    `,

    CancelButton: styled.button`
        min-height: 42px;

        padding: 9px 15px;

        color: #a5a5a5;
        background: #0b0b0b;

        border: 1px solid #303030;
        border-radius: 10px;

        font: inherit;
        font-size: 0.76rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #575757;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.24);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (max-width: 420px) {
            width: 100%;
        }
    `,

    ConfirmButton: styled.button`
        min-height: 42px;

        padding: 9px 15px;

        color: ${({ $tone }) => ($tone === "danger" ? "#ffb0b0" : "#ddecff")};

        background: #0b0b0b;

        border: 1px solid
            ${({ $tone }) => ($tone === "danger" ? "#703737" : "#395675")};

        border-radius: 10px;

        font: inherit;
        font-size: 0.76rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: ${({ $tone }) =>
                $tone === "danger" ? "#a64e4e" : "#5c82a9"};

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.24);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (max-width: 420px) {
            width: 100%;
        }
    `,
};
