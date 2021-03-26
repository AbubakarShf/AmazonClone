import React from "react";
import "../style/index.css";
import styled from "styled-components";
const Products = ({ text, price, rating, images }) => {
  return (
    <Container>
      <Title>{text}</Title>
      <Price>{price}</Price>
      <Rating>{rating}</Rating>
      <Image src={images} />

      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  background-color: white;
  flex: 0.3;
  width: 300px;
  max-height: 400px;
  z-index: 100;
  padding: 20px;
  margin: 10px;
  margin-left:70px !important;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.7);
  }
`;
const Title = styled.span`
  font-weight: 800;
`;
const Rating = styled.span``;
const Price = styled.div`
  font-weight: 800;
  margin-top: 4px;
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
  padding: 10px;
`;
const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;
const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  outline: 0;
`;
