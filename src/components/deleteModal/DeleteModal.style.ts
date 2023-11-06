import styled from "styled-components";

export const StyledDeleteModal = styled.div`
  /* display: none; */
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
