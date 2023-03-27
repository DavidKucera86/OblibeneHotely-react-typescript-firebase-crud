import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flexbox;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ivory;
  max-width: 100%;

  .links {
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ivory;
  }

  a {
    padding: 0 1rem;
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    &:link,
    &:visited {
      color: gray;
      font-weight: 900;
      font-size: 1.2rem;
      text-decoration: none;
    }

    &:hover,
    &:active {
      background-color: honeydew;
      font-style: italic;
    }
    svg {
      margin-right: 1rem;
      &:hover {
        color: darkblue;
      }
    }
  }
`;
