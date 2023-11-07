import { ReactNode } from "react";
import { StyledSkillChip } from "./SkillChip.style";

function SkillChip({ children }: { children: ReactNode }) {
  return <StyledSkillChip>{children}</StyledSkillChip>;
}
export default SkillChip;
