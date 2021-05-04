import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    HeaderLogo,
    HeaderOptionAddress,
    HeaderOption,
    OptionLineOne,
    OptionLineTwo,
    HeaderSearch,
    HeaderSearchInput,
    HeaderSearchIconContainer,
    HeaderNavItems,
    HeaderOptionCart,
    CartCount,
} from "../style/HeaderStyComp";
import "../style/index.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Header = ({ cartItems }) => {
    const CartCounter = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
        });
        return count;
    };
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img
                        id="imgLogo"
                        src="https://i.imgur.com/7I9Was5.png"
                        alt=""
                    />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon className="svg-search-icon" />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Abubakar</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>5</CartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    );
};

export default Header;
