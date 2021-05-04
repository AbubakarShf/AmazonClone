import React from "react";
import styled from "styled-components";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";
const Cart = ({ cartItems }) => {
    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal />
        </Container>
    );
};

export default Cart;

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0px 18px;
`;
