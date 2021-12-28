import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../utils/images/amazone.jpeg"
import { Link } from "react-router-dom"
function Header() {
    const basket = useSelector(state => state.basket)
    return (
        <div className="header">
            <Link to="/" >
            <img
                className="header_logo"
                src={ logo }
                alt="amazone logo"
            />
              </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text" placeholder="Search For Your Favourite Items...."
                />
                <SearchIcon
                    className="header_searchIcon"
                />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <Link to="/login" className="login">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                      Sign In  
                    </span>
                    </Link>
                   
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                      & Orders 
                    </span>  
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                      Prime  
                    </span>  
                </div>
                <div className="header_optionBasket">
                    <Link to="/checkout" >
                        <span className="header_optionBasket">
                        <ShoppingBasketIcon />
                        </span>
                    
                    </Link>
                    <span className="header_optionLineTwo header_basketCount">
                        { basket?.length }
                </span>
                </div>
                
            </div>
        </div>
    )
}

export default Header
