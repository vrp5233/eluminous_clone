import styled from "styled-components";
export const FooterWrapper = styled.section``;
export const GreyWrapper = styled.div`
  background-color: rgb(var(--grey));
  padding: 105px 150px 90px;
`;
export const Wrap = styled.div``;
export const Heading = styled.h6`
  font-size: 16px;
  color: rgba(var(--black));
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 29px;
    background-color: #2166f3;
  }
`;
export const LinkList = styled.ul`
  li {
    a {
      display: inline-block;
      font-size: 14px;
      color: #000;
      line-height: 28px;
      text-decoration: none;
    }
  }
`;
