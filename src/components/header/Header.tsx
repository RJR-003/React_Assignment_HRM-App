import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";
export default function Header() {
  const defaultParams = "/?offset=0&page=1";
  return (
    <StyledHeader>
      <div>
        <Link to={defaultParams}>
          <h1>HRM APP</h1>
        </Link>
      </div>
    </StyledHeader>
  );
}
