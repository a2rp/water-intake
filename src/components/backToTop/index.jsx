import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Styled } from "./styled";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 320);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Button
            type="button"
            $visible={isVisible}
            onClick={handleClick}
            aria-label="Back to top"
            title="Back to top"
        >
            <FaArrowUp aria-hidden="true" />
        </Styled.Button>
    );
};

export default BackToTop;
