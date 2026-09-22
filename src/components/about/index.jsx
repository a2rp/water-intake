import { FaChartLine, FaDatabase, FaShieldAlt } from "react-icons/fa";

import { Styled } from "./styled";

const features = [
    {
        icon: <FaDatabase aria-hidden="true" />,
        title: "Local Storage",
        text: "Your water records stay in your browser and remain available after refresh.",
    },
    {
        icon: <FaChartLine aria-hidden="true" />,
        title: "Daily Progress",
        text: "Track glasses, milliliters, daily goals, and progress for the selected date.",
    },
    {
        icon: <FaShieldAlt aria-hidden="true" />,
        title: "Private by Design",
        text: "The tracker works locally without requiring an account or sending your intake data to a server.",
    },
];

const About = () => {
    return (
        <Styled.Wrapper id="about">
            <Styled.Container>
                <Styled.Header>
                    <Styled.Label>About The App</Styled.Label>

                    <Styled.Title>
                        A simple way to keep hydration visible
                    </Styled.Title>

                    <Styled.Text>
                        Water Intake is a lightweight daily hydration tracker
                        designed to make logging water quick and easy. Set a
                        daily target, choose your glass size, review previous
                        days, and keep a clear record of every entry.
                    </Styled.Text>
                </Styled.Header>

                <Styled.Grid>
                    {features.map(({ icon, title, text }) => (
                        <Styled.Card key={title}>
                            <Styled.IconBox>{icon}</Styled.IconBox>

                            <Styled.CardTitle>{title}</Styled.CardTitle>

                            <Styled.CardText>{text}</Styled.CardText>
                        </Styled.Card>
                    ))}
                </Styled.Grid>

                <Styled.Developer>
                    <Styled.DeveloperLabel>Developed by</Styled.DeveloperLabel>

                    <Styled.DeveloperName
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </Styled.DeveloperName>

                    <Styled.DeveloperText>
                        Full-Stack Web Developer building practical web
                        applications, developer tools, and useful digital
                        products.
                    </Styled.DeveloperText>
                </Styled.Developer>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default About;
