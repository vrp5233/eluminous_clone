import styled from "styled-components";

export const HireDedicatedExpertiseWrapper = styled.section`
  padding: 120px 0;
  .row {
    margin: 0 0 60px;
  }
`;

export const TitleWrap = styled.h2`
  font: 700 46px / normal "Inter", sans-serif;
  margin-bottom: 30px;
`;

export const SmallTitleWrap = styled.h3`
  font: 400 20px / 34px "Inter", sans-serif;
  color: #000;
  max-width: 872px;
  margin-bottom: 90px;
`;

export const ExpertiseBox = styled.div`
  & span {
    margin-bottom: 20px;
    display: inline-block;
    & img {
      max-width: 80px;
      width: 100%;
    }
  }
`;

export const ExpertiseBoxTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 40px;
  max-width: 280px;
`;
export const ExpertiseBoxPara = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
  max-width: 370px;
`;
