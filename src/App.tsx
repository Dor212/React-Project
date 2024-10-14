import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Profile from "./Pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";
import { TRootState } from "./Store/BigPie";
import RoutGuard from "./components/Shared/RoutGuard";
import Footer from "./components/Layout/Footer/Footer";
import CardDetails from "./Pages/CardDetails/CardDetails";
import Favorites from "./Pages/FavoritesPage/Favorites";
import MyCardPage from "./Pages/MyCard/MyCard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CreateCardPage from "./Pages/CreateCardPage/CreateCardPage";

function App() {
  const user = useSelector((state: TRootState) => state.UserSlice.user)

  return (
    <div className="dark:bg-gray-700 " >
    <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<RoutGuard user={user!}> <Profile /> </RoutGuard>} />
        <Route path="/createCard" element={<RoutGuard user={user!}> <CreateCardPage /> </RoutGuard>} />
        <Route path="/favorites" element={<RoutGuard user={user!}> <Favorites /> </RoutGuard>} />
        <Route path="/myCard" element={<RoutGuard user={user!}> <MyCardPage /> </RoutGuard>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
