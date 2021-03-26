import React from "react";
import styled from "styled-components";
import Product from "./Products";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product
          text="
        New Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Space Gray (Latest Model,
        4th Generation)"
          price="&#36; 1200"
          rating="⭐⭐⭐⭐⭐"
          images="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg"
        />
        <Product
          text="
        Samsung Electronics Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone"
          price="&#36; 1099"
          rating="⭐⭐⭐⭐⭐"
          images="https://images-na.ssl-images-amazon.com/images/I/81AT%2BFlc%2BEL._AC_SL1500_.jpg"
        />
        <Product
          text="
        Samsung Electronics Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone"
          price="&#36; 699"
          rating="⭐⭐⭐⭐⭐"
          images="https://images-na.ssl-images-amazon.com/images/I/61m1Dot5KCL._AC_SL1000_.jpg"
        />
      </Content>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  background-color: #febd69;
`;
const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -317px;
  display: flex;
`;
