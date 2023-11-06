import styled from "styled-components";

export const StyledTableContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 90px;
  flex: 1;

  & > a > button {
    background-color: var(--text-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 15px;
    box-shadow: 1px 1px 10px var(--box-shadow);
  }
  & > a > button:hover {
    transform: scale(0.9);
  }

  table {
    width: 100%;
    --border: 3px solid var(--border-accent);
    border-radius: 15px 15px 0 0;
    border-spacing: 0;
    border-collapse: separate;
    border: var(--border);
    overflow: hidden;
    box-shadow: 1px 1px 10px var(--box-shadow);
  }

  table th {
    background-color: var(--heading-background);
    color: var(--text-color);
  }

  table tr {
    background-color: var(--primary-color);
  }

  table td,
  table th {
    text-align: center;
    vertical-align: center;
    height: 70px;
    /* padding-left: 4px; */
  }

  table td:not(:last-child) {
    text-align: left;
    padding-left: 5px;
  }

  table th:not(:last-child),
  table td:not(:last-child) {
    border-right: var(--border);
  }

  table > thead > tr:not(:last-child) > th,
  table > thead > tr:not(:last-child) > td,
  table > tbody > tr:not(:last-child) > th,
  table > tbody > tr:not(:last-child) > td,
  table > tfoot > tr:not(:last-child) > th,
  table > tfoot > tr:not(:last-child) > td,
  table > tr:not(:last-child) > td,
  table > tr:not(:last-child) > th,
  table > thead:not(:last-child),
  table > tbody:not(:last-child),
  table > tfoot:not(:last-child) {
    border-bottom: var(--border);
  }

  tr:hover {
    background-color: var(--hover-accent);
    /* background-color: #f86969; */
    /* background-color: #e84a4a; */
  }

  #action-button-cell button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 10px;
  }
  #action-button-cell button:hover {
    transform: scale(1.2);
  }

  .sort-button {
    cursor: pointer;
    margin-left: 5px;
  }

  .sort-button:hover {
    transform: scale(1.2);
  }
`;
