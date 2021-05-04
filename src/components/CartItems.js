import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemContainer>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} item={item.product} />;
                })}
            </ItemContainer>
        </Container>
    );
};

export default CartItems;
const Container = styled.div`
    background-color: #ffff;
    border-radius: 8px;
    padding: 20px;
    margin-right: 3rem;
    flex: 0.7;
    min-height: 300px;
    overflow: hidden;
`;
const Title = styled.h1`
    padding-bottom: 10px;
`;
const ItemContainer = styled.div``;
