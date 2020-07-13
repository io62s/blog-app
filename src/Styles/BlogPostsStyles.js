import styled from "styled-components";
import { grey } from "./colors";
import { flex } from "./common";

const MainSection = styled.div`
  min-height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 250px auto;
  grid-template-areas: ". message message" "sidebar posts posts";
  grid-gap: 2rem;

  aside {
    background-color: ${grey};
    padding: 2rem;
    grid-area: sidebar;

    h3 {
      margin-bottom: 2rem;
    }

    ul {
      list-style-type: none;
    }
  }

  .post-wrapper {
    ${flex("column", "flex-start")}
    padding: 0 2rem 2rem 0;
    grid-area: posts;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "message" "sidebar" "posts";

    aside {
      ul {
        ${flex("row", "flex-start")}

        li {
          margin-right: 1rem;
        }
      }
    }
    .post-wrapper {
      pading: 1rem;
    }
  }
`;

export { MainSection };
