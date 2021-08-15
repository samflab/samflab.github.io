import React from "react";
import "../../styles/Project.scss";
function Maz() {
  return (
    <div className="project-card-details">
      <ProjectCard
        image="images/fitility.jpg"
        title="Fitility"
        body="An android application for dance, fitness workout videos and diet plans along with user authentication, admin role management, CRUD functionalities with Firebase."
        demourl="https://drive.google.com/file/d/1tLN9jPti7u0u_-q9T4L70Hpz9q_gwXeS/view?usp=sharing"
        codeurl="https://github.com/samflab/Fitility-OpenSource"
      />

      <ProjectCard
        image="images/cli.PNG"
        title="CLI: Todo App"
        body="A todo app with a command line interface to you give a cool programmer or a hacker look. You can add in your stuffs and remove it. No complicated interface."
        demourl="https://replit.com/@samflab/ToDo-app?embed=1&output=1#index.js"
        codeurl="https://github.com/samflab/CLI-Todo-app"
      />

      <ProjectCard
        image="images/cli-quiz.PNG"
        title="CLI: Lucifer Quiz"
        body="Here's another cool CLI game from my favourite show Lucifer. Its quite a popular show, I thought of making a fun quiz about it. Don't forget to click the play button at bottom right."
        demourl="https://replit.com/@samflab/quiz-game?embed=1&output=1#index.js"
        codeurl="https://github.com/samflab/CLI-quiz-game"
      />
      <ProjectCard
        image="images/minions.jpg"
        title="Banana Talk"
        body="Are you a minion fan? Ever wanted to talk in their language? Here, I have the banana talk app that converts your English into the banana language. Enjoy ! "
        demourl="https://talkinginbanana.netlify.app/"
        codeurl="https://github.com/samflab/banana-speak"
      />

      <ProjectCard
        image="images/dothraki.jpg"
        title="Dothraki Talk"
        body="I had a huge craze for GOT. It was an amazing show. I was curious about Dothraki. Hence, I made a fun translator to test my Dothraki. You can also try it for fun !"
        demourl="https://dothraki-speak.netlify.app/"
        codeurl="https://github.com/samflab/dothraki-speak"
      />
      <ProjectCard
        image="images/notesflix.jpg"
        title="Notesflix"
        body="An online radio show that aims to bring people from different professional backgrounds on a single platform to share their career roadmap and also a platform for sharing college notes."
        demourl="https://notesflix.in"
        codeurl="https://github.com/samflab/Notesflix"
      />

      <ProjectCard
        image="images/emoji.jpg"
        title="Emoji Interpreter"
        body="Have you ever had trouble with the meaning of the food based emojis? Have you ever wondered what dish is this? No worries. Food Emoji Interpreter will help you!"
        demourl="https://samflab.github.io/food-emoji-interpreter/"
        codeurl="https://github.com/samflab/food-emoji-interpreter/tree/master"
      />

      <ProjectCard
        image="images/anime.jpg"
        title="Anime Recommendation"
        body="This one is a simple anime recommendation app made with React JS. Some of my favourite shows and favourite genres lined up. Hope you all will enjoy these shows. The shows are self-rated."
        demourl="https://wldp9.csb.app/"
        codeurl="https://github.com/samflab/food-emoji-interpreter/tree/master"
      />
      <ProjectCard
        image="images/cash-register.jpg"
        title="Cash Register"
        body="Cash Register App that takes in two inputs, cash given in by the customer, the bill amount and as a result it returns the number of currency notes the cashier has to give back to the customer. "
        demourl="https://cashx.netlify.app/"
        codeurl="https://github.com/samflab/cash-register"
      />

      <ProjectCard
        image="images/cake.jpg"
        title="Lucky Birthday"
        body="Check to see if your birthday is lucky or not. It takes your birthday as an input and your lukcy number and lets you know if the birthdate is lucky or not. Chill ! I am not saving any of your data."
        demourl="https://lucky-birthdayx.netlify.app/"
        codeurl="https://github.com/samflab/lucky-birthday"
      />

      <ProjectCard
        image="images/triangles.jpg"
        title="Fun with Triangles"
        body="Its a little fun app around triangles. It comes in handy when you have to find the area, check for hypotenuse, check its a triangle or not along with a quiz revolving around triangles."
        demourl="https://triangles-f.netlify.app/"
        codeurl="https://github.com/samflab/triangles"
      />

      <ProjectCard
        image="images/diary.jpg"
        title="Palindrome Birthday"
        body="Palindromes are strings or numbers which are read the same from front and back. Check to see if your birthday is a palindrome. If not, get to know what is the nearest palindromic date."
        demourl="https://pali-bday.netlify.app/"
        codeurl="https://github.com/samflab/palindrome-birthday"
      />

      <ProjectCard
        image="images/stocks.jpg"
        title="Profit & Loss on Stocks"
        body="Just to check if you made a profit or a loss on the stocks you invested in. Enter the purchase price, the current price and units of stocks purchased and the result it will do it for you."
        demourl="https://stokcs.netlify.app/"
        codeurl="https://github.com/samflab/stock-profit-loss"
      />

      <ProjectCard
        image="images/lorem_ipsum.jpg"
        title="Not Lorem Ipsum"
        body="Are you bored of a sample text for your development like Lorem Ipsum? Here's a random lorem ipsum paragraph generator that generates sample paragraphs for your development phase."
        demourl="https://randomoremipsum.netlify.app/"
        codeurl="https://github.com/samflab/random-lorem-ipsum"
      />

      <ProjectCard
        image="images/weather.jpg"
        title="Weather App"
        body="A simple Weather App where you enter the city and it will tell how's the weather along with maximum and minimum temperature and humidity. Built with Vanilla JS and weather API."
        demourl="https://whatsthetemp.netlify.app/"
        codeurl="https://github.com/samflab/Weather-App"
      />

      <ProjectCard
        image="images/todo.jpg"
        title="React Todo"
        body="A todo app that is integrated with a backend. You can use it by signing into your Google account. Minimalistic design which adds the pending work, mark it as read and you can also delete it."
        demourl="https://samflab.github.io/react-todo/"
        codeurl="https://github.com/samflab/react-todo"
      />
    </div>
  );
}
function urlClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function ProjectCard(props) {
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div style={{ width: "25rem" }} className="project-card">
          <img
            variant="top"
            src={props.image}
            height="300"
            width="300"
            className="project-icons"
          />
          <div className="card-content">
            <h3 className="project-title">{props.title}</h3>
            <p className="project-body">{props.body}</p>
            <p style={{ textAlign: "center", left: "0", marginTop: "10px" }}>
              <button
                className="urls"
                onClick={() => {
                  urlClick(props.demourl);
                }}
              >
                {" "}
                Demo{" "}
              </button>{" "}
              <button
                className="urls"
                onClick={() => {
                  urlClick(props.codeurl);
                }}
              >
                {" "}
                Code{" "}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maz;
