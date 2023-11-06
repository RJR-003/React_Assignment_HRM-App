import styled from "styled-components";

export const StyledEntryForm = styled.div`
  max-width: 700px;
  margin: 20px auto;
  height: auto;
  padding: 30px;
  background-color: var(--text-color);
  border-radius: 15px;
  box-shadow: 1px 1px 10px var(--box-shadow);

  & > img {
    cursor: pointer;
    width: 13px;
    height: auto;
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  form label {
    display: block;
    padding-left: 10px;
  }

  form input {
    border-radius: 10px;
    background-color: var(--text-color);
    border: 1px solid var(--box-shadow);
    /* border: 1px solid #999; */
    padding: 7px;
    /* border: none; */
  }

  .entry-form-row {
    display: flex;
    justify-content: space-between;
  }

  .form-entry {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  form select {
    padding: 7px;
    border-radius: 10px;
    width: 200px;
    /* max-width: 70px; */
  }

  .form-location-profile {
    display: flex;
    gap: 190px;
  }

  #data-entry-submit {
    align-self: center;
    padding: 10px 30px;
    cursor: pointer;
  }

  #data-entry-submit:hover {
    background-color: var(--submit-button);
    color: var(--text-color);
  }

  .form-skill {
    display: flex;
    gap: 10px;
    /* justify-content: space-between; */
  }

  .added-skills {
    padding: 20px;
    background-color: var(--secondary-accent);
    border-radius: 15px;
    width: 300px;
    min-height: 150px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  .each-skill-added {
    padding: 10px 20px;
    background-color: var(--skillbox);
    border-radius: 5px;
    align-self: flex-start;
    cursor: pointer;
  }

  .each-skill-added:hover {
    background-color: var(--skillbox-hover);
  }

  .form-skill select {
    align-self: flex-start;
    margin-top: 50px;
  }

  .form-skill p {
    margin-left: 10px;
  }
`;