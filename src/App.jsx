import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Currency from "./components/Currency";
import { Route, Routes } from "react-router-dom";
import Course from "./components/Course";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/currency" element={<Currency/>} />
      <Route path="/course" element={<Course/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
