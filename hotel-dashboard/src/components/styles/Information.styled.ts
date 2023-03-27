import styled from "styled-components";

export const StyledInformation = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(210, 105, 30, 0.25);
  margin: 2rem;
  padding: 1rem;
  transition: all 0.5s linear;
  &:hover {
    transform: scale(1.04);
  }
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 300px;
      border-radius: 1rem;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .description-text {
    max-width: 60rem;
    margin: 0.75rem 0;
    font-style: italic;
  }

  .edit-text {
    cursor: pointer;
    &:hover {
      color: rgb(251, 173, 18);
    }
  }
`;
