import styled from "styled-components";
import "../style/index.css";

export const Container = styled.div`
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
export const HeaderLogo = styled.div``;
export const HeaderOptionAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  margin-right: 20px;
  background-color: white !important;
  border-radius: 4px;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
    border-radius: 4px;
  }
`;
export const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border-radius: 4px;
  font-size: 26px;
  padding-left: 7px;
  border: none;
  :focus {
    outline: none;
  }
`;
export const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  height: 40px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .svg-search-icon {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const OptionLineOne = styled.div``;
export const OptionLineTwo = styled.div`
  font-weight: 600;
`;
export const HeaderNavItems = styled.div`
  display: flex;
`;
export const HeaderOption = styled.div`
  padding: 10px 9px;
  margin-right: 10px;
`;
export const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    color: white;
    align-items: center;
    margin-left: 30px;
    margin-right: 20px;
    text-decoration: none;
  }
  a:hover {
    color: #febd69;
    cursor: pointer;
  }
`;
export const CartCount = styled.div``;
