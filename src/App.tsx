// import './App.css'
import { Navbar } from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Contacts } from "./pages/Contacts.tsx";
import { About } from "./pages/About.tsx";
import { Store } from "./pages/Store.tsx";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import { ItemDetails } from "./pages/ItemDetails.tsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />

      <Container className="mb-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />

          <Route path="/products/:id" element={<ItemDetails />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
