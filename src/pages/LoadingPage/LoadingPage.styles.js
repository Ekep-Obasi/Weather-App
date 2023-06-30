import styled from "styled-components";

const StyledLoadingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkBgPrimary};
  color: white;
  font-family: "Courgette", cursive;
  font-size: 1.5rem;
  color: #4fa94d;
  gap: 15px;

  .icon,
  .weather {
    color: #fdb813;
  }
  p {
    color: white;
  }
`;

export { StyledLoadingPage };
