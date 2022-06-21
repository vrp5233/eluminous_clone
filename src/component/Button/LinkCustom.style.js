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
    padding: 10px 40px;
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
