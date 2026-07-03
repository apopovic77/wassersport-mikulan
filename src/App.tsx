import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { LegalPage } from "./pages/Legal";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<LegalPage kind="impressum" />} />
          <Route path="/datenschutz" element={<LegalPage kind="datenschutz" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
