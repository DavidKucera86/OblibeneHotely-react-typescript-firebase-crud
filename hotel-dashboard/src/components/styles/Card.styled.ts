import styled from "styled-components";

export const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75%;
  margin: 0 auto;

  select {
    width: 100%;
    padding: 0.25rem 0.75rem;
    border: none;
    border-bottom: 0.25rem solid darkblue;
    border-radius: 50%;
    background-color: honeydew;
    text-align: center;
  }

  .individual-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }
`;
