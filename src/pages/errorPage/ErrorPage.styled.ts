import styled from "styled-components";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #b5b5b5;
  padding: 40px 250px;
  border-radius: 25px;

  & > h1 {
    font-size: 100px;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 20px;
    margin-bottom: 50px;
  }
  & > button {
    font-size: 25px;
    padding: 20px 30px;
    border-radius: 15px;
    border: none;
    background-color: #e3e346;
  }
  & > button:hover {
    background-color: #ffff43;
    cursor: pointer;
  }
`;
