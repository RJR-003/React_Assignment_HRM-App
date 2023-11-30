import { StyledErrorPage } from "./ErrorPage.styled";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const nav = useNavigate();
  function handleClick() {
    nav("/?offset=0&page=1");
  }
  return (
    <>
      <StyledErrorPage>
        <h1>Error...!!!</h1>
        <p>There appears to be a slight problem</p>
        <Button content="To Home" onClick={handleClick} />
      </StyledErrorPage>
    </>
  );
}

export default ErrorPage;
