import styled from "styled-components";
import { white, main } from "./colors";
import { flex } from "./common";

const NavBar = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  ${flex("row", "space-between")}
  padding: 1rem 2rem;
  background-color: ${main};
  color: ${white};

  .link {
    text-decoration: none;
    color: ${white};
    cursor: pointer;
  }

  @media (max-width: 850px) {
    height: auto;
  }
`;

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;

  .search {
    margin-right: 1rem;

    input {
      width: 200px;
      padding: 0.2rem 0.5rem;
      border: none;
      border-radius: 5px;
    }
  }
`;

const NavLinks = styled.ul`
  ${flex("row", "space-evenly")}
  list-style-type: none;

  li {
    padding: 0 1rem;
  }
`;

export { NavBar, NavWrapper, NavLinks };
