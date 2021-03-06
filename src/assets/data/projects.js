const template = {
  id: null,
  orientation: "",
  recent: false,
  completed: true,
  title: "",
  icons: [],
  pic1: "",
  pic2: "",
  pic3: "",
  purpose: "",
  repository: "",
  link: "",
  header: "",
  Intro: "",
  information: "",
  date: "",
};
const projectsList = [
  {
    id: 1,
    orientation: "UI/UX",
    tagline: "Coding bootcamp theme",
    recent: true,
    completed: true,
    title: "deercoded",
    icons: ["js", "css", "html"],
    brand: "fab fa-js-square fa-2x",
    date: "August 2021",
    pic1: 1,
    pic2: "",
    pic3: "",
    purpose: "Case Study",
    repository: "https://github.com/moedeera/FED-HT-website-design",
    link: "https://deercoded.com/",
    header: "DeerCoded.com",
    Intro: "UI Design for a coding bootcamp",
    information:
      "A Design oriented website built as a theme for a coding bootcamp. It was built using CSS, JavaScript and HTML.\n The focus of the website is to experiment with new design trends involving landing page lottie animations and bubbly 3d illustrations.\n It also uses a landing page countdown timer that visually channels urgency in a potential customer.",
  },
  {
    id: 2,
    orientation: "Client",
    tagline: "Website for local Diner",
    recent: true,
    completed: true,
    title: "super-donair",
    icons: ["js", "css", "html"],
    brand: "fas fa-hamburger fa-2x",
    date: "October 2021",
    pic1: 2,
    pic2: "",
    pic3: "",
    purpose: "Local Business",
    repository: "https://github.com/moedeera/SuperDoniar",
    link: "https://super-donair.com/",
    header: "Super-Donair.com",
    Intro: "Middle-eastern cuisine diner ",
    information:
      "A Website built for the Super-Donair diner in Saskatoon, This was built using CSS, HTML and JavaScript, The client insisted on a simple design without any advance features. The website is maintained and updated manually by me. ",
  },
  {
    id: 3,
    orientation: "Client",
    tagline: "Software launch website",
    recent: true,
    completed: true,
    title: "librumreader",
    icons: ["react", "css"],
    brand: "far fa-bookmark fa-2x",
    date: "May 2021",
    pic1: 3,
    pic2: "",
    pic3: "",
    purpose: "Client",
    repository: "https://github.com/moedeera/ereader",
    link: "https://librum-reader.com/",
    header: "Librum-Reader.com",
    Intro: "Pending software launch",
    information:
      " Created for a software launch by a group of university students in Berlin, Germany. It was built using React and hosted on Netlify. The design was meant to convey a theme of youth and imagination. \n The front end phase of the website was completed last month. Currently, I am waiting for more intel from the clients to start developing the backend server. ",
  },
  {
    id: 4,
    orientation: "Web Application",
    tagline: "Coding bootcamp theme",
    recent: false,
    completed: true,
    title: "bluebear",
    icons: ["react", "nodejs", "firebase"],
    brand: "fab fa-react fa-2x",
    date: "March 2022",
    pic1: 4,
    pic2: "",
    pic3: "",
    purpose: "Demo",
    repository:
      "https://github.com/moedeera/nclient/tree/main/src/projects/socialmedia",
    link: "https://deeracode.dev/socialmedia",
    header: "Blue Bear Social",
    Intro: "Social Media Website",
    information:
      "An Interaction oriented website built to serve as a social media platform. \n It was built using React, NodeJS, and FireBase. It's main purpose is to showcase the efficiency of front-end server platforms like FireBase against a well established frame-work like ExpressJS. It utilizes React Router V6 to manage the routes and uses React-Context-Provider to manage the states and information. \n It is preloaded with mock profiles, posts, and comments to showcase the various functions.",
  },
  {
    id: 5,
    orientation: "WordPress theme",
    tagline: "Interior Design",
    recent: false,
    completed: true,
    title: "greenframe",
    icons: ["wordpress", "elementor"],
    brand: "fa fa-wordpress fa-2x",
    date: "April 2022",
    pic1: 5,
    pic2: "",
    pic3: "",
    purpose: "Case Study",
    repository: "n/a",
    link: "https://greenframedesign.com/",
    header: "GreenFrame Designs",
    Intro: "Renovation company website",
    information:
      "Built using WordPress, It was meant to work as a professional website for a mock client in the renovation sector. It bolsters a sturdy professional look coupled with an easy-to-navigate interface. \n The structure was a standard corporate setup with various custom sections that were manually designed. It was built with Elementor using a theme from Astra as a starting point. Multiple custom blocks were used to finish up the final draft and a custom domain was bought to give a sense of realism.",
  },
  {
    id: 6,
    orientation: "WordPress theme",
    tagline: "WordPress theme",
    recent: false,
    completed: true,
    title: "deeracode",
    icons: ["wordpress", "elementor"],
    brand: "fa fa-wordpress fa-2x",
    date: "July 2022",
    pic1: 6,
    pic2: "",
    pic3: "",
    purpose: "Case Study",
    repository: "n/a",
    link: "https://deeracode.ca/",
    header: "Deeracode.ca",
    Intro: "Web Design community",
    information:
      "Built using WordPress, It was meant to work as a website to serve web design enthusiasts. It was build with wordpress using the elementor. \n The effects and layouts were built using mainly free plugins from Stratum and HappyAddons. The website was inspired by dribbble designs and follows a trend of using animations and a bright theme to convey a welcoming theme",
  },
];

module.exports = { projectsList };
