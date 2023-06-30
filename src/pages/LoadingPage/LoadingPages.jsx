import React from "react";
import { MutatingDots } from "react-loader-spinner";
import { StyledLoadingPage } from "./LoadingPage.styles";
import TypeEffect from "../../components/atoms/Loader/typeEffect";

const Spinner = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#fdb813"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <h1>
        <span className="weather">Weather</span> Forecast
      </h1>
      <Spinner />
      <p>
        <TypeEffect string={["Please wait a minute..."]} />
      </p>
    </StyledLoadingPage>
  );
};

export default LoadingPage;
