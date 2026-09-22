import About from "./components/about";
import BackToTop from "./components/backToTop";
import Footer from "./components/footer";
import Header from "./components/header";
import WaterIntake from "./components/waterIntake";

import { Styled } from "./App.styled";

const App = () => {
    return (
        <Styled.Wrapper>
            <Header />

            <Styled.Main>
                <WaterIntake />
                <About />
            </Styled.Main>

            <Footer />

            <BackToTop />
        </Styled.Wrapper>
    );
};

export default App;
