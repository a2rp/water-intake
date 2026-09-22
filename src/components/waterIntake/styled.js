import styled from "styled-components";

export const Styled = {
    Wrapper: styled.main`
        width: 100%;

        padding: 56px 24px 82px;

        background:
            radial-gradient(
                circle at 50% -240px,
                rgba(82, 154, 220, 0.08),
                transparent 480px
            ),
            #000000;

        scroll-margin-top: 80px;

        @media (max-width: 768px) {
            padding: 42px 18px 68px;
        }

        @media (max-width: 480px) {
            padding-inline: 14px;
        }
    `,

    Container: styled.div`
        width: min(1120px, 100%);

        margin: 0 auto;
    `,

    Hero: styled.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 40px;

        margin-bottom: 28px;

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
        }
    `,

    HeroContent: styled.div`
        max-width: 720px;
    `,

    Label: styled.p`
        margin: 0 0 9px;

        color: #66809a;

        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1.4;
        text-transform: uppercase;
    `,

    Title: styled.h1`
        margin: 0;

        color: #f1f1f1;

        font-size: clamp(3rem, 8vw, 5.8rem);
        font-weight: 700;
        letter-spacing: -0.055em;
        line-height: 0.92;
    `,

    Description: styled.p`
        max-width: 620px;

        margin: 20px 0 0;

        color: #7f7f7f;

        font-size: 0.9rem;
        line-height: 1.8;
    `,

    Summary: styled.div`
        min-width: 180px;

        padding: 17px;

        text-align: right;

        border: 1px solid #252525;
        border-radius: 14px;

        @media (max-width: 700px) {
            min-width: 0;

            text-align: left;
        }
    `,

    SummaryValue: styled.div`
        color: #dcecff;

        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: -0.025em;
    `,

    SummaryLabel: styled.div`
        margin-top: 4px;

        color: #616161;

        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
    `,

    SummaryText: styled.div`
        margin-top: 9px;

        color: #737373;

        font-size: 0.7rem;
    `,

    ErrorNotice: styled.div`
        margin-bottom: 14px;
        padding: 13px 15px;

        color: #d0aaaa;

        border: 1px solid #593737;
        border-radius: 11px;

        font-size: 0.73rem;
        line-height: 1.6;
    `,

    Content: styled.div`
        display: grid;
        gap: 14px;
    `,

    StorageNote: styled.p`
        margin: 5px 0 0;

        color: #515151;

        text-align: center;

        font-size: 0.67rem;
        line-height: 1.6;
    `,
};
