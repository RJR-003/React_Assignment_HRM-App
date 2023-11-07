import { StyledDeleteModal } from "./DeleteModal.style";
import { constants } from "../../core/config/constants";

function DeleteModal() {
  return (
    <StyledDeleteModal>
      <div className="del-conf-msg">
        <p>{constants.delMsg}</p>
      </div>
      <div className="del-conf-buttons">
        <button className="confirm-button">Confirm</button>
        <button className="cancel-del-button">Cancel</button>
      </div>
    </StyledDeleteModal>
  );
}
export default DeleteModal;
