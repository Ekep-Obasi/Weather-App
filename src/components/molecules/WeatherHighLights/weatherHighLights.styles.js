import styled from "styled-components";

const StyledWeatherHigLightCard = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 0;
  background-color: #1e213a;
  font-family: Raleway;
  color: #e7e7eb;

  .title {
    font-size: 16px;
    font-weight: 500;
  }

  .data {
    font-size: 36px;
    font-weight: 700;
  }
`;

const HighLightsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 22px;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: Raleway;
    font-size: 24px;
    font-weight: 700;
    color: #e7e7eb;
  }
`;

export { StyledWeatherHigLightCard, HighLightsWrapper };
