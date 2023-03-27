import styled from "styled-components";

export const StyledCreate = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;

    input {
      text-align: center;
      padding: 0.1rem;
      margin-bottom: 0.5rem;
    }

    select {
      text-align: center;
      padding: 0.1rem;
      margin-bottom: 0.5rem;
    }

    button {
      background-color: rgb(251, 173, 18);
      padding: 10px;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      border-radius: 8px;
      border-color: transparent;
      margin-top: 15px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
