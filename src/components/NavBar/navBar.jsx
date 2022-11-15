import React from 'react';
import CartWidget from './CartWidget';
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
        <ul className="nav-lista">
            <li>
             <h2> Retrostore </h2>
            </li>
            <li>
             <Link to = "/categoria/PS4"> Juegos Playstation 4 </Link>
            </li>
            <li>
             <Link to = "/categoria/PS5"> Juegos Playstation 5 </Link>
            </li>
            <li>
             <Link to = "/categoria/Xbox One"> Juegos Xbox One</Link>
            </li>
            <li>
             <Link to = "/categoria/Xbox Series"> Juegos Xbox Series</Link>
            </li>
            <li>
          <CartWidget />
        </li>
        </ul>
    </nav>
  )
}

export default NavBar;