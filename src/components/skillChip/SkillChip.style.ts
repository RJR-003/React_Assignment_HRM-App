import styled from "styled-components";

export const StyledSkillChip = styled.div`
  padding: 10px 20px;
  background-color: var(--skillbox);
  border-radius: 5px;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    background-color: var(--skillbox-hover);
  }
`;
