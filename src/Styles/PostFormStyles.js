import styled from "styled-components";
import { flex } from "./common";
import { main, red, white, grey, darkerGrey } from "./colors";

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1100;
  top: 0;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
`;

const FormContainer = styled.div`
  ${flex("column", "center", "center")};
  background-color: ${white};

  .form-header {
    width: 100%;
    padding: 0.7rem;
    background-color: ${grey};
    ${flex("row", "space-between", "center")};

    .close-modal {
      cursor: pointer;
    }
  }
`;

const FormWrapper = styled.div`
  padding: 2rem;

  form {
    ${flex("column", "center", "center")};
    width: 400px;

    label {
      align-self: flex-start;
      font-weight: 700;

      span {
        color: ${red};
      }
    }

    input,
    textarea {
      margin-bottom: 1rem;
      width: 100%;
      padding: 0.5rem;
      border: 1px solid ${main};
      border-radius: 5px;
    }

    .buttons {
      width: 50%;
      ${flex("rox", "space-between", "center")}

      button {
        padding: 0.3rem 1.5rem;
        border: 1px solid ${darkerGrey};
        border-radius: 5px;
        cursor: pointer;

        &[type="submit"] {
          background-color: ${main};
          color: ${white};
          border: 1px solid ${main};
          border: none;
        }
      }
    }
  }
`;

export { ModalContainer, FormContainer, FormWrapper };
