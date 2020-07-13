import styled from "styled-components";
import { grey, darkerGrey, borderColor, red, main, white } from "./colors";
import { flex } from "./common";

const PostContainer = styled.div`
  width: 100%;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.2);

  .post-header {
    width: 100%;
    ${flex("row", "space-between", "flex-start")};
    background-color: ${grey};
    padding: 0.5rem;
    border-radius: 5px 5px 0 0;

    .buttons {
      padding: 0.5rem;

      button {
        padding: 0.3rem 1.2rem;
        border: none;
        border-radius: 5px;
        margin-left: 1rem;
        background-color: ${darkerGrey};
        cursor: pointer;

        &:nth-child(2) {
          background-color: ${red};
          color: ${white};
        }
      }
    }

    .title-wrapper {
      ${flex("row", "space-between", "flex-start")};

      h3 {
        color: ${main};
      }
      p {
        font-size: 0.8rem;
      }
      img {
        padding-right: 0.5rem;
      }
    }
  }

  .post-body {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .images {
    ${flex("row", "center")};
    margin-bottom: 1rem;

    img {
      max-width: 100%;
      padding: 0 1rem;
    }
  }
`;

export { PostContainer };
