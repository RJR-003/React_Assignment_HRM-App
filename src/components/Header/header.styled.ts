import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #3d3d46;
  display: flex;
  align-items: center;

  height: 50px;
  div {
    width: 1440px;
    margin: 0 auto;
  }
  div > h1 {
    font-size: 15px;
    width: max-content;
    color: #fff;
    padding: 0 20px;
    margin: 0;
  }
`;
