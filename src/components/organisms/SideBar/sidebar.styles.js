import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  background-color: ${(props) => props.theme.colors.darkBgSecondary};
  height: 100vh;
  width: 25%;
  overflow: hidden;
  font-family: "Raleway";
  padding: 40px;

  @media screen and (max-width: 1285px) {
    width: 100%;
    height: fit-content;
    padding: 40px 15px;
  }

  .image_wrapper {
    img {
      height: 200px;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 144px;
    line-height: 169px;
    color: ${(props) => props.theme.colors.lightTxtPrimary};
    padding: 5px 0;

    span {
      font-size: 62px;
      color: ${(props) => props.theme.colors.lightTxtSecondary};
    }
  }

  .info {
    color: ${(props) => props.theme.colors.lightTxtSecondary};
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }

  .date {
    width: 175px;
    display: flex;
    justify-content: space-between;
    vertical-align: center;
    align-items: center;
    color: ${(props) => props.theme.colors.lightTxtSecondary};
    font-family: Raleway;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin: auto;
  }

  .location {
    font-size: 18px;
    margin: auto;
    color: ${(props) => props.theme.colors.lightTxtSecondary};
  }

  .weather_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    height: 50%;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;

    button {
      cursor: pointer;
      font-size: 22px;
      color: #e7e7eb;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-style: none;
      background-color: #6e707a;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    input {
      background-color: #6e707a;
      height: 40px;
      border-style: none;
      padding: 0 0.5rem;
      font-size: 16px;
      color: #e7e7eb;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &::placeholder {
        color: #e7e7eb;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

const StyledOpenDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  background-color: ${(props) => props.theme.colors.darkBgSecondary};
  height: 100vh;
  width: 370px;
  padding: 35px 42px;
  position: absolute;
  font-family: Raleway;
  z-index: 2;
  transition: 0.45s left linear;
  left: ${({ state }) => (state ? `0px` : `-1200px`)};

  @media screen and (max-width: 1285px) {
    width: 100vw;
    height: 100%;
  }

  .close-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button.close {
      font-size: 32px;
      background-color: transparent;
      color: #e7e7eb;
      border-style: none;
    }
  }
`;

export { SidebarWrapper, StyledOpenDrawer };
