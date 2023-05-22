import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBgPrimary};
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100vh;
  padding: 75px;
  display: flex;

  .container1 {
    display: flex;
    flex-direction: column;
    padding: 22px;
    gap: 22px;

    .graph {
      flex: 2;
      width: 100%;
      height: 100%;
      display: flex;
      border: 1px solid black;
      background-color: #1e213a;
    }
  }
`;

export { HomeWrapper, HomeContent };
