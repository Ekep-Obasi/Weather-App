import Typewriter from "typewriter-effect";

const TypeEffect = ({ string }) => {
  return (
    <Typewriter
      options={{
        strings: string,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeEffect;
