import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Add more nested routes here like about, contact etc...*/}
      </Route>
      {/* Add more Routes here like login, logout etc..*/}
    </Routes>
  );
}

export default App;
