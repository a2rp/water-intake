import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 900;

        display: grid;
        place-items: center;

        width: 46px;
        height: 46px;

        padding: 0;

        color: #f5f5f5;
        background: #0b0b0b;

        border: 1px solid #383838;
        border-radius: 13px;

        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.34);

        opacity: ${({ $visible }) => ($visible ? 1 : 0)};

        visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};

        pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

        cursor: pointer;

        transition:
            opacity 180ms ease,
            visibility 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 14px;
            height: 14px;
        }

        &:hover {
            border-color: #686868;

            box-shadow:
                0 12px 30px rgba(0, 0, 0, 0.42),
                0 0 0 2px rgba(255, 255, 255, 0.035);

            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;

            width: 44px;
            height: 44px;
        }
    `,
};
