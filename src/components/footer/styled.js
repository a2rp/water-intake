import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;

        padding: 50px 24px 24px;

        background: #030303;

        border-top: 1px solid #1e1e1e;

        @media (max-width: 768px) {
            padding: 42px 18px 22px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,

    Container: styled.div`
        width: min(1120px, 100%);

        margin: 0 auto;
    `,

    Top: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;

        padding-bottom: 34px;

        @media (max-width: 760px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 26px;
        }
    `,

    Brand: styled.div`
        display: flex;
        align-items: center;
        gap: 14px;

        max-width: 500px;
    `,

    Logo: styled.img`
        flex-shrink: 0;

        width: 54px;
        height: 54px;

        padding: 4px;

        object-fit: contain;

        background: #080808;

        border: 1px solid #292929;
        border-radius: 13px;
    `,

    Title: styled.h2`
        margin: 0;

        color: #e8e8e8;

        font-size: 1rem;
        font-weight: 700;
    `,

    Text: styled.p`
        max-width: 430px;

        margin: 6px 0 0;

        color: #717171;

        font-size: 0.76rem;
        line-height: 1.65;
    `,

    Links: styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 7px;

        @media (max-width: 760px) {
            justify-content: flex-start;
        }
    `,

    IconLink: styled.a`
        display: grid;
        place-items: center;

        width: 39px;
        height: 39px;

        color: #a8a8a8;

        border: 1px solid #292929;
        border-radius: 10px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 14px;
            height: 14px;
        }

        &:hover {
            border-color: #575757;

            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.15);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,

    Bottom: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        padding-top: 22px;

        border-top: 1px solid #1b1b1b;

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
        }
    `,

    Copyright: styled.p`
        margin: 0;

        color: #616161;

        font-size: 0.72rem;
        line-height: 1.6;

        a {
            color: #9b9b9b;

            border-bottom: 1px solid transparent;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        a:hover {
            border-color: #666666;

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.13);
        }

        a:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,

    Note: styled.p`
        margin: 0;

        color: #525252;

        font-size: 0.7rem;
    `,
};
