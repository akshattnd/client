import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="user" element={<></>}></Route>
          <Route path="search" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
