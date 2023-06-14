import styled from "styled-components";

const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkBgPrimary};
`;

export { LoadingPage };
