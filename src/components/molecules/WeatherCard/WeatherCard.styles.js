import styled from "styled-components";

const StyledWeatherCard = styled.div`
  width: 120px;
  max-width: 320px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: orange;
  padding: 18px;
  background-color: ${(props) => props.theme.colors.darkBgSecondary};
  color: ${(props) => props.theme.colors.lightTxtPrimary};
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  border-bottom: 3px solid #ffec65;

  @media screen and (max-width: 1285px) {
    width: 100%;
  }

  img {
    width: 106px;
    height: 106px;
  }

  .temperature {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .second {
      color: #a09fb1;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 1285px) {
    flex-wrap: wrap;
  }
`;

export { StyledWeatherCard, CardWrapper };
