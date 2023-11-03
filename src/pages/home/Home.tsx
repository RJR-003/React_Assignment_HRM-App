import SideContent from "../../components/sideContent/SideContent";
import TableContent from "../../components/tableContent/TableContent";
import { StyledHome } from "./Home.styled";

export default function Home() {
  return (
    <StyledHome>
      <SideContent />
      <TableContent />
    </StyledHome>
  );
}
