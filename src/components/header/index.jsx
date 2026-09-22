import { useEffect, useRef, useState } from "react";

import { FaBars, FaTimes, FaTint } from "react-icons/fa";

import { Styled } from "./styled";

const Header = () => {
    const lastScrollPosition = useRef(0);

    const [isHidden, setIsHidden] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            if (currentPosition <= 20) {
                setIsHidden(false);
            } else if (
                currentPosition > lastScrollPosition.current &&
                currentPosition > 110
            ) {
                setIsHidden(true);
                setIsMenuOpen(false);
            } else if (currentPosition < lastScrollPosition.current) {
                setIsHidden(false);
            }

            lastScrollPosition.current = currentPosition;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleAnchorClick = () => {
        setIsMenuOpen(false);
        setIsHidden(false);
    };

    return (
        <Styled.Wrapper $hidden={isHidden}>
            <Styled.Container>
                <Styled.Brand
                    href="#tracker"
                    aria-label="Water Intake home"
                    onClick={handleAnchorClick}
                >
                    <Styled.Logo
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Water Intake logo"
                    />

                    <Styled.BrandText>
                        <Styled.BrandName>Water Intake</Styled.BrandName>

                        <Styled.BrandLabel>
                            Daily Hydration Tracker
                        </Styled.BrandLabel>
                    </Styled.BrandText>
                </Styled.Brand>

                <Styled.Navigation aria-label="Main navigation">
                    <Styled.NavLink href="#tracker">Tracker</Styled.NavLink>

                    <Styled.NavLink href="#about">About</Styled.NavLink>
                </Styled.Navigation>

                <Styled.Status>
                    <FaTint aria-hidden="true" />
                    Local data
                </Styled.Status>

                <Styled.MenuButton
                    type="button"
                    onClick={() => setIsMenuOpen((current) => !current)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    title={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <FaTimes aria-hidden="true" />
                    ) : (
                        <FaBars aria-hidden="true" />
                    )}
                </Styled.MenuButton>
            </Styled.Container>

            {isMenuOpen && (
                <Styled.MobileNavigation
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                >
                    <Styled.MobileInner>
                        <Styled.MobileLink
                            href="#tracker"
                            onClick={handleAnchorClick}
                        >
                            Tracker
                        </Styled.MobileLink>

                        <Styled.MobileLink
                            href="#about"
                            onClick={handleAnchorClick}
                        >
                            About
                        </Styled.MobileLink>
                    </Styled.MobileInner>
                </Styled.MobileNavigation>
            )}
        </Styled.Wrapper>
    );
};

export default Header;
