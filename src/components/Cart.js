import React from "react";
import styled from "styled-components";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";
const Cart = ({ cartItems }) => {
    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.product.price * item.product.quantity;
        });
        return total;
    };
    const CartCounter = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
        });
        return count;
    };
    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal
                CartCounter={CartCounter}
                getTotalPrice={getTotalPrice}
            />
        </Container>
    );
};

export default Cart;

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0px 18px;
    align-items: flex-start;
`;
