import FilterSectionContent from "../../components/filterSectionContent/FilterSectionContent";
import TableContent from "../../components/tableContent/TableContent";
import { StyledHome } from "./Home.styled";

export default function Home() {
  return (
    <StyledHome>
      <FilterSectionContent />
      <TableContent />
    </StyledHome>
  );
}
