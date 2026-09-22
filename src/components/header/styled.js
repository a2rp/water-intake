import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        width: 100%;

        background: rgba(4, 4, 4, 0.96);

        border-bottom: 1px solid #202020;

        box-shadow: 0 7px 28px rgba(0, 0, 0, 0.22);

        transform: ${({ $hidden }) =>
            $hidden ? "translateY(-100%)" : "translateY(0)"};

        transition:
            transform 220ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
    `,

    Container: styled.div`
        display: flex;
        align-items: center;
        gap: 24px;

        width: min(1120px, calc(100% - 40px));
        min-height: 72px;

        margin: 0 auto;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1120px);
            min-height: 68px;
        }
    `,

    Brand: styled.a`
        display: flex;
        align-items: center;
        gap: 11px;

        flex-shrink: 0;

        margin-right: auto;

        color: inherit;

        border: 1px solid transparent;
        border-radius: 12px;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #303030;

            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.25);

            text-shadow: 0 0 9px rgba(255, 255, 255, 0.1);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,

    Logo: styled.img`
        width: 46px;
        height: 46px;

        padding: 3px;

        object-fit: contain;

        background: #090909;

        border: 1px solid #2c2c2c;
        border-radius: 11px;
    `,

    BrandText: styled.div`
        min-width: 0;
    `,

    BrandName: styled.div`
        color: #eeeeee;

        font-size: 0.92rem;
        font-weight: 700;
        line-height: 1.2;
    `,

    BrandLabel: styled.div`
        margin-top: 3px;

        color: #686868;

        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        line-height: 1.2;
        text-transform: uppercase;
    `,

    Navigation: styled.nav`
        display: flex;
        align-items: center;
        gap: 5px;

        @media (max-width: 760px) {
            display: none;
        }
    `,

    NavLink: styled.a`
        min-height: 38px;

        padding: 9px 11px;

        color: #929292;

        border: 1px solid transparent;
        border-radius: 9px;

        font-size: 0.74rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #343434;

            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.13);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `,

    Status: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 7px;

        min-height: 36px;

        padding: 7px 10px;

        color: #737373;

        border: 1px solid #272727;
        border-radius: 999px;

        font-size: 0.68rem;
        font-weight: 700;

        svg {
            width: 12px;
            height: 12px;
        }

        @media (max-width: 920px) {
            display: none;
        }
    `,

    MenuButton: styled.button`
        display: none;
        place-items: center;

        width: 42px;
        height: 42px;

        padding: 0;

        color: #d5d5d5;
        background: transparent;

        border: 1px solid #313131;
        border-radius: 10px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        svg {
            width: 15px;
            height: 15px;
        }

        &:hover {
            border-color: #626262;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.25);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.16);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }

        @media (max-width: 760px) {
            display: grid;
        }
    `,

    MobileNavigation: styled.nav`
        display: none;

        width: 100%;

        background: #050505;

        border-top: 1px solid #202020;

        @media (max-width: 760px) {
            display: block;
        }
    `,

    MobileInner: styled.div`
        display: grid;
        gap: 5px;

        width: min(1120px, calc(100% - 28px));

        margin: 0 auto;
        padding: 10px 0 14px;
    `,

    MobileLink: styled.a`
        display: flex;
        align-items: center;

        min-height: 44px;

        padding: 10px 12px;

        color: #9a9a9a;

        border: 1px solid #252525;
        border-radius: 9px;

        font-size: 0.78rem;
        font-weight: 700;

        text-decoration: none;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            text-shadow 180ms ease;

        &:hover {
            border-color: #505050;

            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.22);

            text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 2px;
        }
    `,
};
