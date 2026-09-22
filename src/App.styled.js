import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;

        color: #f2f2f2;
        background: #000000;
    `,

    Main: styled.div`
        width: 100%;
        min-height: calc(100vh - 72px);

        padding-top: 72px;

        @media (max-width: 600px) {
            min-height: calc(100vh - 68px);

            padding-top: 68px;
        }
    `,
};
