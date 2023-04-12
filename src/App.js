import About from "./components/About/About";
import Container from "./components/Container/Container";
import Favorite from "./components/Favorite/Favorite";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NoMatch from "./components/NoMatch/NoMatch";
import List from "./components/List/List";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
