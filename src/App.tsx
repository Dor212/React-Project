import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CardPage from "./Pages/CardPage/CardPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Login from "./components/Login/Login";
import Profile from "./Pages/ProfilePage/ProfilePage";

function App() {
  
  return (
    <main className="main">
    <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
</Routes>
    </main>
  );
}

export default App;
