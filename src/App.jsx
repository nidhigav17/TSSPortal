import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
