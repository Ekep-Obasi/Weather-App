import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBgPrimary};
  position: relative;

  @media screen and (max-width: 1285px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100vh;
  padding: 75px;
  display: flex;

  @media screen and (max-width: 1285px) {
    flex-direction: column;
  }

  .container1 {
    display: flex;
    flex-direction: column;
    padding: 22px;
    gap: 22px;

    @media screen and (max-width: 1285px) {
      width: 100%;
    }

    .graph {
      flex: 2;
      width: 100%;
      height: 100%;
      max-height: 440px;
      min-height: 320px;
      display: flex;
      background-color: ${(props) => props.theme.colors.darkBgSecondary};
    }
  }
`;

export { HomeWrapper, HomeContent };
