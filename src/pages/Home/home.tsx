import SideContent from "../../components/SideContent/sideContent";
import TableContent from "../../components/TableContent/tableContent";
import { StyledHome } from "./home.styled";

export default function Home() {
  return (
    <StyledHome>
      <SideContent />
      <TableContent />
    </StyledHome>
  );
}
