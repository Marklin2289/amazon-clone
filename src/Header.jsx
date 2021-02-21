import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="header__logo"
          />
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          {/* logo */}
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">Returns & Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
