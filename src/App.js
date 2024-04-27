import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
