import TypeIt from "typeit-react";

const IntroScroll = () => {
  return (
    <TypeIt
      speed="10"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Frontend Developer.")
          .pause(750)
          .delete(19)
          .pause(500)
          .type("Flutter Developer.")
          .pause(750)
          .delete(18)
          .pause(500)
          .type("ReactJS Developer.");
        return instance;
      }}
      options={{ loop: true }}
    />
  );
};

export default IntroScroll;
