import styled from "styled-components";

export const StyledFilterSectionContent = styled.div`
  margin-top: 60px;

  .search-box {
    position: relative;
  }

  .search-box > div > input {
    width: 98%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 10px var(--box-shadow);
    padding-right: 50px;
  }

  .search-box > div > img {
    position: absolute;
    right: 15px;
    top: 4px;
  }

  .filter-section {
    background-color: var(--primary-color);
    border-radius: 10px;
    margin-top: 65px;
    padding-bottom: 20px;
    box-shadow: 1px 1px 10px var(--box-shadow);
  }

  .filter-section-heading {
    display: flex;
    background-color: var(--heading-background);
    color: var(--text-color);
    border-radius: 10px 10px 0 0;
    padding: 12px;
    justify-content: space-between;
  }

  .filter-section-heading > p {
    margin: 0;
    padding-top: 13px;
    font-weight: 600;
  }

  .filter-search {
    display: flex;
    margin-top: 10px;
    padding: 0 5px;
  }

  .filter-search input {
    padding: 10px;
    border-radius: 10px;
    /* border: none; */
    border: 1px solid var(--border-accent);
    width: 85%;
  }

  .filter-search button {
    border: none;
    border-radius: 10px;
    background-color: var(--heading-background-light);
    cursor: pointer;
  }
  .filter-search button:hover {
    transform: scale(0.9);
  }
  .skill-list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: scroll;
    max-height: 460px;
  }

  .skill-element {
    background-color: var(--primary-color);
    margin: 0 20px;
    padding: 20px;
    border: 3px solid var(--border-accent);
    border-radius: 10px;
    box-shadow: 1px 1px 10px var(--box-shadow);
    max-width: 210px;
    display: flex;
    align-items: center;
  }
  .skill-element:hover {
    background-color: var(--hover-accent);
  }

  .skill-element label {
    margin-left: 25px;
    color: var(--text-color-dark);
  }

  .skill-element input[type="checkbox"] {
    min-width: 20px;
    min-height: 20px;
  }
  .skill-loader-container {
    margin: 0 20px;
    padding: 20px;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
