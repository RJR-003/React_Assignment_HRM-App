import styled from "styled-components";

export const StyeledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
`;

export const StyledDeleteModal = styled.div`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  flex-direction: column;

  width: 500px;
  height: auto;
  padding: 20px;
  background-color: var(--primary-color);
  border-radius: 15px;
  border: 1px solid var(--text-color-dark);
  box-shadow: 1px 1px 10px var(--box-shadow);

  .del-conf-msg {
    padding: 20px;
    background-color: var(--secondary-accent);
    color: var(--text-color);
    border-radius: 15px;
  }

  .del-conf-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
  }

  .del-conf-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
  }

  .confirm-button {
    background-color: var(--confirm-button);
  }

  .confirm-button:hover {
    background-color: var(--confirm-button-hover);
    color: var(--text-color);
  }

  .delete-button {
    background-color: var(--secondary-accent);
    color: var(--text-color);
  }

  .delete-button:hover {
    background-color: var(--delete-button-hover);
  }
`;
