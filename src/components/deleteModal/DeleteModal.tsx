import { StyledDeleteModal } from "./DeleteModal.style";

function DeleteModal() {
  return (
    <StyledDeleteModal>
      <div className="del-conf-msg">
        <p>Are you sure you want to proceed with the action?</p>
      </div>
      <div className="del-conf-buttons">
        <button className="confirm-button">Confirm</button>
        <button className="cancel-del-button">Cancel</button>
      </div>
    </StyledDeleteModal>
  );
}
export default DeleteModal;
