import React from "react";
import styled from "styled-components";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
const Cart = () => {
    return (
        <Container>
            <CartItem />
            <CartTotal />
        </Container>
    );
};

export default Cart;

const Container = styled.div`
    display: flex;
    margin: 14px 18px 0px 18px;
`;
