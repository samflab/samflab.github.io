import React from "react";
import "../../styles/Project.scss";

export const projectDetails = [
  {
    image: "images/lorem_ipsum.jpg",
    title: "Not Lorem Ipsum",
    body: "Are you bored of a sample text for your development like Lorem Ipsum? Here's a random lorem ipsum paragraph generator that generates sample paragraphs for your development phase.",
    demourl: "https://randomoremipsum.netlify.app/",
    codeurl: "https://github.com/samflab/random-lorem-ipsum",
  },
  {
    image: "images/minions.jpg",
    title: "Banana Talk",
    body: "Are you a minion fan? Ever wanted to talk in their language? Here, I have the banana talk app that converts your English into the banana language. Enjoy ! ",
    demourl: "https://talkinginbanana.netlify.app/",
    codeurl: "https://github.com/samflab/banana-speak",
  },
  {
    image: "images/notesflix.jpg",
    title: "Notesflix",
    body: "An online radio show that aims to bring people from different professional backgrounds on a single platform to share their career roadmap and also a platform for sharing college notes.",
    demourl: "https://notesflix.in",
    codeurl: "https://github.com/samflab/Notesflix",
  },
  {
    image: "images/emoji.jpg",
    title: "Emoji Interpreter",
    body: "Have you ever had trouble with the meaning of the food based emojis? Have you ever wondered what dish is this? No worries. Food Emoji Interpreter will help you!",
    demourl: "https://samflab.github.io/food-emoji-interpreter/",
    codeurl: "https://github.com/samflab/food-emoji-interpreter/tree/master",
  },
  {
    image: "images/diary.jpg",
    title: "Palindrome Birthday",
    body: "Palindromes are strings or numbers which are read the same from front and back. Check to see if your birthday is a palindrome. If not, get to know what is the nearest palindromic date.",
    demourl: "https://pali-bday.netlify.app/",
    codeurl: "https://github.com/samflab/palindrome-birthday",
  },
  {
    image: "images/weather.jpg",
    title: "Weather App",
    body: "A simple Weather App where you enter the city and it will tell how's the weather along with maximum and minimum temperature and humidity. Built with Vanilla JS and weather API.",
    demourl: "https://whatsthetemp.netlify.app/",
    codeurl: "https://github.com/samflab/Weather-App",
  },
  {
    image: "images/todo.jpg",
    title: "Todo App with React",
    body: "A todo app that is integrated with a backend. You can use it by signing into your Google account. Minimalistic design which adds the pending work, mark it as read and you can also delete it.",
    demourl: "https://samflab.github.io/react-todo/",
    codeurl: "https://github.com/samflab/react-todo",
  },
  {
    image: "images/fitility.jpg",
    title: "Fitility",
    body: "An android application for dance, fitness workout videos and diet plans along with user authentication, admin role management, CRUD functionalities with Firebase.",
    demourl:
      "https://drive.google.com/file/d/1tLN9jPti7u0u_-q9T4L70Hpz9q_gwXeS/view?usp=sharing",
    codeurl: "https://github.com/samflab/Fitility-OpenSource",
  },{
    image:"images/azure.png",
    title:"Azure UI",
    body:"A CSS based component library which makes development really easy. Focus more on the functionality and less on the UI. Azure UI is customizable, fast and user friendly.",
    demourl:"https://azure-ui.netlify.app/",
    codeurl:"https://github.com/samflab/azure-ui",
  },{
    image:"images/manga.png",
    title:"MangaNotComics",
    body:"MangaNotComics is a online manga store for otakus. Features: explore, wishlist, cart, authentication. This is an ongoing project at the moment.",
    demourl:"https://react-manganotcomics.netlify.app",
    codeurl:"https://github.com/samflab/mnc-react",

  },{
    image:"images/anime.png",
    title:"Animotion",
    body:"A video library web app for anime lovers. In short, this one's a youtube for otakus. We'll get a lot of anime related videos be it music videos, anime art tutorials, AMVs, OSTs, and the list continues.",
    demourl:"https://animotion.netlify.app/",
    codeurl:"https://github.com/samflab/animotion"
  }
];
function urlClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function Maz() {
  return (
    <div className="project-container ">
      {projectDetails.map((project) => {
        return (
          <div className="card-content project-card">
            <img
              variant="top"
              src={project.image}
              height="150"
              width="150"
              alt="project icon"
              className="project-icons"
            />
            <h3 className="project-title">{project.title}</h3>
            
            <p className="project-body">{project.body}</p>
            <p style={{ textAlign: "center", left: "0", marginTop: "10px" }}>
              <button
                className="urls"
                onClick={() => {
                  urlClick(project.demourl);
                }}
              >
                Demo
              </button>
              <button
                className="urls"
                onClick={() => {
                  urlClick(project.codeurl);
                }}
              >
                Code
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Maz;
