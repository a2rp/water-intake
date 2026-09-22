import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";

import { Styled } from "./styled";

const links = [
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
        icon: <FaGlobe aria-hidden="true" />,
    },
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
        icon: <FaGithub aria-hidden="true" />,
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
        icon: <FaCodepen aria-hidden="true" />,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: <FaLinkedinIn aria-hidden="true" />,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish",
        icon: <FaFacebookF aria-hidden="true" />,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",
        icon: <FaYoutube aria-hidden="true" />,
    },
    {
        label: "Email",
        href: "mailto:ash.ranjan09@gmail.com",
        icon: <FaEnvelope aria-hidden="true" />,
    },
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: <FaHeart aria-hidden="true" />,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: <FaCoffee aria-hidden="true" />,
    },
    {
        label: "Patreon",
        href: "https://www.patreon.com/a2rp",
        icon: <FaPatreon aria-hidden="true" />,
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Top>
                    <Styled.Brand>
                        <Styled.Logo
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Water Intake logo"
                        />

                        <div>
                            <Styled.Title>Water Intake</Styled.Title>

                            <Styled.Text>
                                A simple daily hydration tracker that keeps your
                                records in your browser.
                            </Styled.Text>
                        </div>
                    </Styled.Brand>

                    <Styled.Links aria-label="External links">
                        {links.map(({ label, href, icon }) => (
                            <Styled.IconLink
                                key={label}
                                href={href}
                                target={
                                    href.startsWith("mailto:")
                                        ? undefined
                                        : "_blank"
                                }
                                rel={
                                    href.startsWith("mailto:")
                                        ? undefined
                                        : "noopener noreferrer"
                                }
                                aria-label={label}
                                title={label}
                            >
                                {icon}
                            </Styled.IconLink>
                        ))}
                    </Styled.Links>
                </Styled.Top>

                <Styled.Bottom>
                    <Styled.Copyright>
                        Copyright &copy; {currentYear}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </Styled.Copyright>

                    <Styled.Note>Stay consistent. Stay hydrated.</Styled.Note>
                </Styled.Bottom>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Footer;
