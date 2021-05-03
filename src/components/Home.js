import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Products";
import { DataBase } from "./.firebase/Firebase";
const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        DataBase.collection("products").onSnapshot((snapshot) => {
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                Product: doc.data(),
            }));
            setProducts(tempProducts);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Container>
            <Banner></Banner>
            <Content>
                {products.map((data) => {
                    return (
                        <Product
                            title={data.Product.ProName}
                            price={data.Product.ProPrice}
                            rating={data.Product.ProRating}
                            image={data.Product.ProImage}
                            key={data.id}
                        />
                    );
                })}
            </Content>
        </Container>
    );
};

export default Home;
const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    /* background-color: #febd69; */
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
