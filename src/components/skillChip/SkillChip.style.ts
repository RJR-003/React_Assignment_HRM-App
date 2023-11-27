import styled from "styled-components";

export const StyledSkillChip = styled.div`
  padding: 10px 20px;
  background-color: var(--skillbox);
  border-radius: 5px;
  align-self: flex-start;

  &.clickable:hover {
    background-color: var(--skillbox-hover);
    cursor: pointer;
  }
  .close-img {
    width: 10px;
    height: auto;
    margin-left: 20px;
  }
`;
