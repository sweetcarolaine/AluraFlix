import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import FormPage from "./pages/FormPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
