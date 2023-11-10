import { StyeledOverlay, StyledDeleteModal } from "./DeleteModal.style";
import { constants } from "../../core/config/constants";

function DeleteModal({
  onDelete,
  onCancel,
}: {
  onDelete: () => void;
  onCancel: () => void;
}) {
  return (
    <>
      <StyeledOverlay></StyeledOverlay>
      <StyledDeleteModal>
        <div className="del-conf-msg">
          <p>{constants.delMsg}</p>
        </div>
        <div className="del-conf-buttons">
          <button className="confirm-button" onClick={onDelete}>
            Confirm
          </button>
          <button className="cancel-del-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </StyledDeleteModal>
    </>
  );
}
export default DeleteModal;
