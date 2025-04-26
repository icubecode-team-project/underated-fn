import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import Login from "./pages/Login";
import ErrorBoundary from "./components/ErrorBoundary";
import FallBackUI from "./components/FallBackUI.jsx";


function App() {
  return (
    <ErrorBoundary fallback={<FallBackUI />}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Add more nested routes here like about, contact etc...*/}
      </Route>
      {/* Add more Routes here like login, logout etc..*/}
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
    </ErrorBoundary>
  );
}

export default App;
