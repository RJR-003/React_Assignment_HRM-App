import { StyledSkillChip } from "./SkillChip.style";
import closeImg from "../../assets/images/close-button.svg";

function SkillChip({
  onClick,
  label,
  isView,
}: {
  onClick?: () => void;
  label: string;
  isView: boolean;
}) {
  return (
    <StyledSkillChip onClick={onClick}>
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
