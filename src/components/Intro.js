import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Frontend Developer.")
          .pause(750)
          .delete(19)
          .pause(500)
          .type("Flutter Developer.");

        // Remember to return it!
        return instance;
      }}
      options={{ loop: true }}
    />
  );
}

export default Intro;
