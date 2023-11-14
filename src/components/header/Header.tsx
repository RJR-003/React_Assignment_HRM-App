import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>HRM APP</h1>
        </Link>
      </div>
    </StyledHeader>
  );
}
