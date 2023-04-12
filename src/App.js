import About from "./components/About/About";
import Container from "./components/Container/Container";
import Favorite from "./components/Favorite/Favorite";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <Favorite />
        <About />
      </Container>
    </main>
  );
};

export default App;
