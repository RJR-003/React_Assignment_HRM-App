import styled from "styled-components";

export const StyledViewPage = styled.div`
  position: fixed;
  /* position: absolute; */
  max-width: max-content;
  /* top: 30%;
    left: 30%; */
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  height: auto;
  padding: 30px;
  z-index: 2;
  background-color: var(--text-color);
  border-radius: 15px;
  box-shadow: 1px 1px 10px var(--box-shadow);

  & > figure {
    width: fit-content;
    height: auto;
    margin-left: 0;
  }

  & > img {
    cursor: pointer;
    width: 13px;
    height: auto;
  }

  .data-view-content {
    display: flex;
    /* justify-content: space-between; */
    gap: 100px;
  }

  .left-view-content,
  .right-content {
    display: flex;
    gap: 30px;
  }

  .view-skill-sec {
    display: flex;
    gap: 50px;
  }

  .view-skill-box {
    width: 300px;
    min-height: 150px;
    background-color: var(--secondary-accent);
    border-radius: 15px;
    display: flex;
    padding: 15px;
    flex-wrap: wrap;
    overflow: scroll;
    gap: 10px;
  }

  .each-skill-view {
    padding: 10px 20px;
    background-color: var(--skillbox);
    border-radius: 5px;
    align-self: flex-start;
  }
  .view-labels {
    width: max-content;
    font-weight: 600;
  }

  .each-skill-view {
    margin: 2px;
  }

  .view-skill-box {
    overflow-y: scroll;
  }
`;
