import React from "react";
import styled from "styled-components";
const CartItem = ({ id, item }) => {
    let options = [];
    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}>Qty:{i}</option>);
    }
    return (
        <Container>
            <ImageItemContainer>
                <img src={item.image} alt="Product" />
            </ImageItemContainer>
            <InfoItemContainer>
                <TopInfoContainer>
                    <h2>{item.name}</h2>
                </TopInfoContainer>
                <BottomInfoContainer>
                    <CartItemQuantity>
                        <select
                            name="quantity"
                            id="quantity"
                            value={item.quantity}
                        >
                            {options}
                        </select>
                    </CartItemQuantity>
                    <CartItemDeletButton>Delete</CartItemDeletButton>
                </BottomInfoContainer>
            </InfoItemContainer>
            <CartItemPrice>${item.price}</CartItemPrice>
        </Container>
    );
};

export default CartItem;
const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    border-bottom: 1px solid #ddd;
`;
const ImageItemContainer = styled.div`
    height: 180px;
    width: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
const InfoItemContainer = styled.div``;
const TopInfoContainer = styled.div`
    color: #007185;
    max-width: 40.4rem;
    h2 {
        font-size: 18px;
    }
`;
const BottomInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;
const CartItemQuantity = styled.div`
    select {
        border-radius: 7px;
        background-color: #f0f2f2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
        &:focus {
            outline: none;
        }
    }
`;

const CartItemDeletButton = styled.div`
    margin-left: 16px;
    color: #007185;
    cursor: pointer;
`;

const CartItemPrice = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-left: 70px;
`;
