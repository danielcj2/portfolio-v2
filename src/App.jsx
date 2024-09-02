import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { ReactLenis } from "lenis/react";

import "./fonts.css";

function App() {
  return (
    <ReactLenis root>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
