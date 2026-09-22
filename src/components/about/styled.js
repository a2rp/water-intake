import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;

        padding: 84px 24px;

        background: #050505;

        border-top: 1px solid #1f1f1f;

        scroll-margin-top: 90px;

        @media (max-width: 768px) {
            padding: 64px 18px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,

    Container: styled.div`
        width: min(1120px, 100%);

        margin: 0 auto;
    `,

    Header: styled.div`
        max-width: 720px;

        margin-bottom: 40px;
    `,

    Label: styled.p`
        margin: 0 0 10px;

        color: #777777;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
    `,

    Title: styled.h2`
        margin: 0;

        color: #f5f5f5;

        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1.05;
    `,

    Text: styled.p`
        max-width: 670px;

        margin: 20px 0 0;

        color: #929292;

        font-size: 0.92rem;
        line-height: 1.8;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.article`
        padding: 24px;

        background: #090909;

        border: 1px solid #252525;
        border-radius: 18px;

        box-shadow: 0 8px 26px rgba(0, 0, 0, 0.16);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #414141;

            box-shadow:
                0 12px 32px rgba(0, 0, 0, 0.28),
                0 0 0 1px rgba(255, 255, 255, 0.025);
        }
    `,

    IconBox: styled.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        margin-bottom: 18px;

        color: #d8e9ff;

        border: 1px solid #2c3f55;
        border-radius: 11px;

        svg {
            width: 17px;
            height: 17px;
        }
    `,

    CardTitle: styled.h3`
        margin: 0 0 9px;

        color: #e8e8e8;

        font-size: 0.95rem;
        font-weight: 700;
        line-height: 1.4;
    `,

    CardText: styled.p`
        margin: 0;

        color: #818181;

        font-size: 0.8rem;
        line-height: 1.7;
    `,

    Developer: styled.div`
        margin-top: 46px;
        padding-top: 30px;

        border-top: 1px solid #1e1e1e;
    `,

    DeveloperLabel: styled.p`
        margin: 0 0 7px;

        color: #666666;

        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    `,

    DeveloperName: styled.a`
        display: inline-block;

        color: #eeeeee;

        border-bottom: 1px solid transparent;

        font-size: 1rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #6e6e6e;

            text-shadow: 0 1px 10px rgba(255, 255, 255, 0.16);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 4px;
        }
    `,

    DeveloperText: styled.p`
        max-width: 560px;

        margin: 9px 0 0;

        color: #747474;

        font-size: 0.78rem;
        line-height: 1.7;
    `,
};
