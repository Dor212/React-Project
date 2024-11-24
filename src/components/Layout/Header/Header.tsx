import { DarkThemeToggle, Navbar, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TRootState } from "../../../Store/BigPie";
import { userActions } from "../../../Store/UserSlice";
import { CiSearch } from "react-icons/ci";
import { searchAction } from "../../../Store/SearchSlice";
import { useState } from "react";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: TRootState) => state.UserSlice.user);
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const nav = useNavigate();


  const logout = () => {
    dispatch(userActions.logout());
    nav("/") 
  }

  const toggleNavbar = () => {
    setIsOpen(prev => !prev);
  };


  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(searchAction.searchWord(value));
  };

  return (
    <Navbar fluid rounded className="dark:bg-gray-800">
      <Navbar.Brand as={Link} href="https://flowbite-react.com" to="/home">
        <span className="self-center text-4xl font-semibold dark:text-white "><span className="text-sky-400">//</span>REFAEL</span>
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNavbar} />
      <TextInput rightIcon={CiSearch} onChange={search} />
      <Navbar.Collapse className={`flex flex-col items-center md:flex-row space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        {!user && <Navbar.Link as={Link} href="/register" to="/register" active={location === "/register" || location === "/"} className="text-2xl">
          Register
        </Navbar.Link>}
        {!user && <Navbar.Link as={Link} href="/login" to="/login" active={location === "/login" || location === "/"} className="text-2xl">
          Login
        </Navbar.Link>}
        {user && <Navbar.Link as={Link} href="/favorites" to="/favorites" active={location === "/favoriets" || location === "/"} className="text-2xl">
          Favorites
        </Navbar.Link>}
        {user?.isBusiness && <Navbar.Link as={Link} href="/myCard" to="/myCard" active={location === "/myCard" || location === "/"} className="text-2xl">
          My Card
        </Navbar.Link>}
        {user?.isBusiness && <Navbar.Link as={Link} href="/updateUser" to="/updateUser" active={location === "/updateUser" || location === "/"} className="text-2xl">
          Porfile
        </Navbar.Link>}
        <Navbar.Link as={Link} href="/about" to="/about" active={location === "/about" || location === "/"} className="text-2xl">
          About
        </Navbar.Link>
        {user && <Navbar.Link as={Link} className="text-2xl" onClick={logout}>
          Logout
        </Navbar.Link>}
        <DarkThemeToggle />
        <Navbar.Brand>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;