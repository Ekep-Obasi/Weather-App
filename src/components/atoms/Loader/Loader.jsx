import React, { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { StyledLoader } from "./loader.styles";
import { AppContext } from "../../../context/app";

const Loader = () => {
  const { loading } = useContext(AppContext);
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        color="rgb(255, 236, 101)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading}
      />
    </StyledLoader>
  );
};

export default Loader;
