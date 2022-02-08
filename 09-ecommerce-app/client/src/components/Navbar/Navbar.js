import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
import { useBasket } from "../../context/BasketContext";

const Navbar = () => {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Link to="/">eCommerce</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          {loggedIn ? (
            <ButtonGroup>
              {items.length > 0 && (
                <Link to="/basket">
                  <Button colorScheme="pink" variant="outline">
                    Basket ({items.length})
                  </Button>
                </Link>
              )}

              {user?.role === "admin" && (
                <Link to="/admin">
                  <Button colorScheme="red" variant="ghost">
                    Admin
                  </Button>
                </Link>
              )}

              <Link to="/profile">
                <Button colorScheme="blue">Profile</Button>
              </Link>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Link to="/signin">
                <Button colorScheme="blackAlpha">Login</Button>
              </Link>
              <Link to="/signup">
                <Button colorScheme="orange">Register</Button>
              </Link>
            </ButtonGroup>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
