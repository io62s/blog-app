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

  .burger {
    display: none;
  }

  @media (max-width: 850px) {
    .burger {
      display: block;
      cursor: pointer;
      font-size: 1.8rem;
    }
  }
  @media (max-width: 450px) {
    margin: 0.5rem auto;
  }
`;

const NavLinks = styled.ul`
  ${flex("row", "space-evenly")}
  list-style-type: none;

  li {
    padding: 0 1rem;
  }

  @media (max-width: 850px) {
    position: absolute;
    ${flex("column", "center")};
    padding: 1rem;
    right: 1rem;
    bottom: -11.5rem;
    background-color: ${main};
    border-radius: 5px;
    box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.4);
    z-index: 1000;
    display: none;

    &.open {
      display: block;
    }

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export { NavBar, NavWrapper, NavLinks };
