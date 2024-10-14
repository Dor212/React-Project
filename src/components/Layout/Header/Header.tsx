import { DarkThemeToggle, Navbar, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TRootState } from "../../../Store/BigPie";
import { userActions } from "../../../Store/UserSlice";
import { CiSearch } from "react-icons/ci";
import { searchAction } from "../../../Store/SearchSlice";



const Header = () => {
  const user = useSelector((state: TRootState) => state.UserSlice.user);
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const nav = useNavigate();

  const logout = () => {
    dispatch(userActions.logout());
    nav("/")
  }

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(searchAction.searchWord(value));
  }

  return (
    <Navbar fluid rounded className="dark:bg-gray-800">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-4xl font-semibold dark:text-white "><span className="text-sky-400">//</span>REFAEL</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <DarkThemeToggle />
      <TextInput rightIcon={CiSearch} onChange={search} />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/home" to="/home" active={location === "/home" || location === "/"} className="text-2xl">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" to="/about" active={location === "/about" || location === "/"} className="text-2xl">
          About
        </Navbar.Link>
        {!user && <Navbar.Link as={Link} href="/register" to="/register" active={location === "/register" || location === "/"} className="text-2xl">
          Register
        </Navbar.Link>}
        {!user && <Navbar.Link as={Link} href="/login" to="/login" active={location === "/login" || location === "/"} className="text-2xl">
          Login
        </Navbar.Link>}
        {user && <Navbar.Link className="text-2xl" onClick={logout}>
          Logout
        </Navbar.Link>}
        {user && <Navbar.Link as={Link} href="/profile" to="/profile" active={location === "/profile" || location === "/"} className="text-2xl">
          Profile
        </Navbar.Link>}
        {user && <Navbar.Link as={Link} href="/favorites" to="/favorites" active={location === "/favoriets" || location === "/"} className="text-2xl">
          Favorites
        </Navbar.Link>}
        {user?.isBusiness && <Navbar.Link as={Link} href="/favorites" to="/myCard" active={location === "/myCard" || location === "/"} className="text-2xl">
          My Card
        </Navbar.Link>}
        <Navbar.Brand>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;