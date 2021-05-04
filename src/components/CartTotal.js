import React from "react";
import styled from "styled-components";
const CartTotal = ({ getTotalPrice, CartCounter }) => {
    return (
        <Container>
            <SubTotal>
                SubTotal({CartCounter()} items): ${getTotalPrice()}
            </SubTotal>
            <CheckOutButton>Proceed to checkout</CheckOutButton>
        </Container>
    );
};

export default CartTotal;
const Container = styled.div`
    background-color: #ffff;
    border-radius: 8px;
    padding: 20px;
    flex: 0.3;
`;
const SubTotal = styled.h2`
    margin-bottom: 20px;
`;
const CheckOutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: none;
    border: 1px solid #a88734;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #ddb347;
    }
`;
