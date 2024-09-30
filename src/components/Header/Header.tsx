import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";


const Header =()=>{
  const location = useLocation().pathname;

    return(
        <Navbar fluid rounded className="">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold ">REFAEL</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/home" to="/home" active={location === "/home" || location ==="/"}className="text-2xl">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/cards" to="/cards" active={location === "/cards" || location ==="/"}className="text-2xl">
          Cards
        </Navbar.Link>
        <Navbar.Link as={Link} href="/register" to="/register" active={location === "/register" || location ==="/"}className="text-2xl">
          Register
        </Navbar.Link>
        <Navbar.Link as={Link} href="/login" to="/login" active={location === "/login" || location ==="/"}className="text-2xl">
          Login
        </Navbar.Link>
          <Navbar.Link as={Link} href="/profile" to="/profile" active={location === "/profile" || location === "/"} className="text-2xl">
            Profile
          </Navbar.Link>
        <Navbar.Brand>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header;