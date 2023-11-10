import { StyledSkillChip } from "./SkillChip.style";
import closeImg from "../../assets/images/close-button.svg";

function SkillChip({ label, isView }: { label: string; isView: boolean }) {
  return (
    <StyledSkillChip>
      {label}
      {!isView && (
        <span>
          <img className="close-img" src={closeImg} alt="close icon" />
        </span>
      )}
    </StyledSkillChip>
  );
}
export default SkillChip;
