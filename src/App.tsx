// import './App.css'
import { Navbar } from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Contacts } from "./pages/Contacts.tsx";
import { About } from "./pages/About.tsx";
import { Store } from "./pages/Store.tsx";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
