// import './App.css'
<<<<<<< HEAD
import {Navbar} from "./components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Contacts} from "./pages/Contacts.tsx";
import {About} from "./pages/About.tsx";
import {Store} from "./pages/Store.tsx";
import {Container} from "react-bootstrap";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";

=======
import { Navbar } from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Contacts } from "./pages/Contacts.tsx";
import { About } from "./pages/About.tsx";
import { Store } from "./pages/Store.tsx";
import { Container } from "react-bootstrap";
>>>>>>> 21dafd14d557665c756ab625272095249305c14f

function App() {
  return (
<<<<<<< HEAD
    <ShoppingCartProvider>
        <Navbar/>

        <Container className="mb-3">
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/store" element={<Store />}
                />

            </Routes>

        </Container>

    </ShoppingCartProvider>
  )
=======
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
>>>>>>> 21dafd14d557665c756ab625272095249305c14f
}

export default App;
