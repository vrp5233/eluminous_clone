import styled, { css } from "styled-components";

export const LinkCustom = styled.div`
  & > * {
    transition: var(--trans_a3);
    display: inline-flex;
    letter-spacing: 0.5px;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(var(--blackTurmeric));
    border-radius: 0;
    color: rgba(var(--white));
    background-color: rgba(var(--blackTurmeric));
    padding: 0;
    min-height: 60px;
    font-size: 20px;
    font-weight: 600;
    padding: 0 40px;
    & svg {
      margin: 0 0 0 15px;
      font-size: 22px;
    }
    &:hover {
      background-color: transparent;
      color: rgba(var(--blackTurmeric));
    }
    ${({ BtnTransparent }) =>
      BtnTransparent &&
      css`
        background-color: transparent;
        color: rgba(var(--blackTurmeric));
        &:hover {
          color: rgba(var(--white));
          background-color: rgba(var(--blackTurmeric));
        }
      `}
  }
`;
export const BtnCustom = styled.button`
  transition: var(--trans_a3);
  display: inline-flex;
  letter-spacing: 0.5px;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(var(--blackTurmeric));
  border-radius: 0;
  color: rgba(var(--white));
  background-color: rgba(var(--blackTurmeric));
  padding: 0;
  min-height: 60px;
  font-size: 20px;
  font-weight: 600;
  padding: 0 40px;
  ${({ BtnTransparent }) =>
    BtnTransparent &&
    css`
      background-color: transparent;
      color: rgba(var(--blackTurmeric));
    `}
`;
/* a,
button,
[type="button"] {
    outline: none;
    text-decoration: none;
}

button:focus {
    outline: none;
}

body .btn {
    min-width: 175px;
    height: 53px;
    font-size: var(--para_16);
    font-family: var(--barlow);
    color: rgb(var(--white));
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

body .GreenBtn {
    background-color: rgb(var(--green));
}

body .GreenBtn:hover {
    background-color: rgb(var(--lightGreen2));
    color: rgb(var(--white));
}

body .lightGreenBtn {
    background-color: rgb(var(--lightGreen2));
}

body .lightGreenBtn:hover {
    background-color: rgb(var(--green));
    color: rgb(var(--white));
} */
