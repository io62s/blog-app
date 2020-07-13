import styled from "styled-components";
import { flex } from "./common";
import { darkerGrey, main, white } from "./colors";

const MsgContainer = styled.div`
  ${flex("column", "flex-start")};
  padding: 2rem 2rem 2rem 0;
  grid-area: message;

  .app-msg {
    width: 100%;
    margin: 1rem auto;
    padding: 1.5rem;
    background-color: ${darkerGrey};
    font-weight: 700;
    box-shadow: 0 5px 20px -14px rgba(0, 0, 0, 0.3);
  }

  h1 {
    align-self: flex-start;
  }

  button {
    padding: 0.5rem 1.8rem;
    align-self: flex-end;
    background-color: ${main};
    color: ${white};
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    padding: 1rem;
  }
`;

export { MsgContainer };
