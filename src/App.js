import Hero from "./pages/Hero";
import { AppContainer, BackgroundImage } from "./components/styled";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <>
            <AppContainer>
                <Navbar />
                <Hero />;
            </AppContainer>
        </>
    );
}

export default App;
