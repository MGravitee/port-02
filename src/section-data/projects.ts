export const projects = {
    title: "Featured Work",
    featuredWorks: [
      {
        title: "Popcorn Movie DB",
        short:
          "Popcorn Movies is a fully responsive movie database web application created using React JS and SASS for CSS pre-processing. The content is dynamically generated by pulling individual movie data via the TMDB (The Movie Database) REST API.",
        description:
            "Movie data is pulled in via the TMDB API as JSON data using asynchronous fetch requests which is then parsed and displayed using several of React's Hooks and functions.",
        before_list:
            "Some hooks I used:",
        description_list: ["useState", "useEffect", "useContext", "useReducer", "Global State"],
        technologies: ["React.js", "SASS", "Adobe XD", "Adobe Photoshop"],
        github: "https://github.com/MGravitee/popcorn-movie-react-app",
        demo: "https://mattgravitee.com/popcorn-movie/",
      },
      {
        title: "Saje Useability Report",
        short:
          "A comprehensive audit of Saje's website to evaluate and improve the user's experience and boost conversion rates. As a team we conducted qualitative and quantitative research along with useability tests and think-aloud data on a group of based on members of our target audience.",
        description:
          "We then then analyzed the results using a combination of System Useability Scale (SUS) questions, and think-aloud observations to provide prioritized, data-driven recommendations and accompanying design suggestions.",
        before_list:
            "Some of the tests we ran:",
        description_list: ["First Click Test", "Preference Test", "Five Second Test", "Useability Tasks", "Think-Aloud Responses"],
        technologies: ["Figma", "Lyssna", "UXPressia", "MSOffice"],
        github: "https://www.saje.ca/",
        demo: "https://mattgravitee.com/saje/",
      },
      {
        title: "Who's That Pokémon?!?",
        short:
          "Who's That Pokémon?!? is a browser-based, vanilla JavaScript word guessing game similar to wheel of fortune (but without Pat Sajak or prizes) based on the popular Pokémon franchise (please don't sue me Nintendo). The object of the game is to guess as many Pokémon as you can correctly within the time limit.",
        description:
          "This game helped me further understand the distinction between functional and object-oriented programming as well as several of JavaScript's methods which I used to handle several different arrays, objects, classes and other types of mutable data.",
        before_list:
          "Some things I learned:",
        description_list: ["Objects", "Classes", "Array Destructuring"],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
        github: "https://github.com/MGravitee/game-js",
        demo: "https://mattgravitee.com/pokemon-game/",
      },
    ],
  };