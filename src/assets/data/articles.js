const template = {
  id: null,

  title: "",
  icons: [],
  pic1: "",
  pic2: "",
  pic3: "",
  topic: "",
  link: "",
  header: "",
  abstract: "",
  date: "",
  summary: "",
  paragraph1: "",
  paragraph2: "",
  paragraph3: "",
  picture1: null,
  picture01: 1,
  picture2: null,
  picture02: 0,
  picture3: null,
  picture03: 2,
  img1Title: "",
  img2Title: "",
  img3Title: "",
};

const articles = [
  {
    id: 0,
    title: "upcoming-recession",
    icons: [],
    pic1: "https://images.pexels.com/photos/5717791/pexels-photo-5717791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "",
    pic3: "",
    topic: "Economy",
    link: "",
    header: "How this recession will impact the tech industry",
    abstract:
      "The upcoming recession is a hurdle, but it will provide an opportunity for many developers",
    date: "July 2022",
    summary:
      "So if you have been keeping tabs on the economy, chances are you have been hearing of a possible if not probable recession. Many youtubers in the web development community are already talking about it.  Youtuber and senior developer Stefan Mischook made his second video on the topic recently.  The general advice from him was the same as what you would hear from other senior developers. If you are working in a company that operates on thin margins, you are in trouble. For those working for companies with more solid foundations, you should be fine.\n After speaking with a few companies in my own local area, I can confirm that web design companies are feeling the pinch. Some even stated they did lay off some developers. When I asked why (to see if it was for other reasons), they told me it came down to business slowing. They are not getting the steady supply of clients they normally would. Despite that, both companies did state that they would still consider hiring if they found the right talent. This tells me they probably don’t believe the recession will last long. Another possibility is that they want talented developers so that when the recession is over, they can meet the uptick in demand.  This falls inline with what happened in the 2008 recession where the downturn led to many layoffs initially. But the ensuing turnaround and demand uptick meant there was a major shortage in developers for a brief period.\n  Will there be a repeat of that this time around? Only time will tell. However, one thing that is for certain is that developers that keep improving are always In a better position when the jobs return. So in that sense, junior developers should look at this as an opportunity to bolster their knowledge. In times of a boom, there is a tendency to focus more on trying to get work as oppose to working on skills. But now that the job market has cooled off a little,  there is a lot less pressure to get a position right away.  So ultimately this is a gold opportunity for the developers who are willing to put the extra effort to separate themselves from the rest.",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    picture1: null,
    picture01: null,
    picture2: null,
    picture02: null,
    picture3: null,
    picture03: null,
    img1Title: "",
    img2Title: "",
    img3Title: "",
  },
  {
    id: 1,

    title: "webflow",
    icons: [],
    pic1: "",
    pic2: "",
    pic3: "",
    topic: "Trends",
    link: "https://assets-global.website-files.com/615b6910fed3ab29278f1893/6213ade4e74351a6e1d71823_open-graph-webflow.png",
    header: "My first impression of Webflow",
    abstract:
      "Webflow seems like a builder that is geared mainly towards dynamic designs....and not much else  ",
    date: "June 2022",
    summary:
      "So recently I decided to try out webflow and see what it’s like to design a website with it.  Webflow is an online builder that I saw on ads when I browse YouTube via devices outside of my own (I’m on premium so I don’t see any ads). Its free to start using, but if you want your own custom domain and hosting you must sign up with webflow(and webflow only). This is not ideal, but you get to see all of their features and build a website before you decide on signing up or not.  So, I gave it a try.\n For designers with CSS and JavaScript experience it’s very easy to learn and intuitive. The features make a whole host of things that require large amounts of CSS and JavaScript to be done quite easily. On the other hand, if your experience with CSS and JavaScript is limited, you will face a steep learning curve. The UI can be very intimidating and if you don’t have good organizational skills, you will have a hard time managing all the different sections, states, and classes. \n The navigation menu can drive one crazy, everything is drag and drop and you must make sure you do not insert a component or a div in the wrong container as it can be visually confusing, especially in larger multi-layered projects. In fact, it would be a major headache to manage complex pages if it weren’t for all the ready-made features and components. \n Another thing is that the responsiveness cascades downward for screens sizes under 600px. This means that trying to design the website mobile first is impossible.  At first, I though I though It was just me who could not figure it out. But after looking into their YouTube tutorial and searching for answers online, it seems like the answer is no, you can’t. Granted, Webflow is structured to make responsiveness easier to mange. Nonetheless, I do find it bizarre to have this design choice given how many developers nowadays start with a mobile first approach \n Overall Webflow feels like a combination of WordPress and tailwind. It allows a lot of customization with a library of pre-made templates and effects. It is geared more towards dynamic features like animations and scroll effects than it is towards design aesthetics. However, managing all these dynamic visuals can be confusing and will take some time to learn, even if you know how to set up the effects you are going for.",
    paragraph1:
      "Webflow ultimately is suited for developers coming from platforms like WordPress who dislike having to constantly download plugins and pay for premium features, but at the same time don’t want to start coding websites from scratch.  It may not suite people beyond that, but for that group, it’s a powerful tool.",
    picture1: null,
    paragraph2: "",
    paragraph3: "",
  },
  {
    id: 2,

    title: "design-skills",
    icons: [],
    pic1: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "",
    pic3: "",
    topic: "Design",
    link: "",
    header: "Web Design as a distinct skill within front-end development",
    abstract:
      "Developers need to understand that design is its own discipline and neglecting it could undermine your progress as a developer ",
    date: "June 2022",
    summary:
      "One of the most important things I learned in this industry, is the importance of separating different facets of web development. It may be easy to think that front end development is just one skill. However, that is not true, far from it in fact. Front end development must be separated into 2 disciplines; Design and structure (or code if you will). This is important because one of the biggest problems with new developers is that they focus too much on the coding aspect of a website and neglect the design or aesthetic portion of it. You will see graduates or new developers with sub-par looking websites built on well structured code. Many of these developers falsely believe that recruiters will look at their code and not be concerned about the overall look of their projects. They assume that companies have a specific position for the design aspect and that it will not be something a front-end developer has to focus on. This is just not the case.\n While it is true that you don’t have to be a designer to be a front-end developer, you must have an understanding on what is good design.  Design is not like code; it is not a hard science but rather something more intuitive. A junior programmer may not be able to tell you if a website is well-coded, but they can tell you if it looks good. Translating this intuition into a technical understanding of design is difficult. Most junior developers probably understand that things like organization and symmetry look good. But beyond that, their grasp of design is very limited.  Therefore, it is very important for new developers to investigate websites like dribble.com and frontendmentors.io to get a glimpse of what is (and isn’t) good design.\n For me, I spend at least 15 minutes a day looking into different websites to find inspiration for my next project. In fact, I never start a website unless I have a design inspiration bookmarked on my browser.  For any new developer out there, I strongly suggest you do the same. Because ultimately, it does not matter how good your coding skills are if you package them in websites from the early 2000s.",
    paragraph1: "",
    picture1: null,
    paragraph2: "",
    paragraph3: "",
  },
  {
    id: 3,

    title: "importance-progress",
    icons: [],
    pic1: "https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "",
    pic3: "",
    topic: "General",
    link: "",
    header: "Why tracking progress is important for new web developers",
    abstract:
      "Keeping tabs on your achievements is an easy way to boost motivation when you are learning to code or design.",
    date: "May 2022",
    summary:
      "For many aspiring web developers, the learning curve is friendly at first, but get’s steeper as they go along.  Once you learn the basics, learning new concepts becomes more challenging. As humans, we often require validation of our efforts to drive our ambition. The problem is that in many areas of life, the validation dwindles the more we achieve. Take for instance lifting weights, there is a concept known as 'newbie gains' to highlight the faster muscle growth in the early stages of a workout routine. The rate of muscle gain slowly diminishes as you continue to build it. Therefore, so many people who try to body build quit early on. The same concept is true in web development. Once those early victories come by, learning new things becomes more cumbersome and the motivation turns into frustration.",
    paragraph1:
      "This is why documenting your progress over long periods of time is very important. My suggestion would be to make a new portfolio website every 3 months or so. It establishes a sense of achievement that gives you the drive to go forward. ",
    paragraph2:
      " Stagnation is the greatest contributor to apathy. Once you feel like you are stuck, the goal starts to feel less achievable. When new developers get stuck on a certain concept, the tendency is to not go forward until that problem is overcome. But this hinders the learning curve greatly for most newcomers. It is always better to move on and come back later if you stumble. Sadly, most developers fall into the all-or-nothing mindset and quit shortly after.",
    paragraph3:
      "My biggest suggestion would be to write down the things you get stuck on in a list and spend an hour a day searching for answers on either stackoverflow.com or reddit's developer threads. Another advice is to improve your early projects as soon as you learn new concepts.  Your first and second projects don’t have to be the worst on your portfolio. Constantly build on them and improve the code and UI. But make sure to keep the old versions saved in some fashion for you to look back on.  This will help you see your progress and visualize how much closer you are in getting to your goal.",
    picture1: null,
    picture01: 1,
    picture2: null,
    picture02: 0,
    picture3: null,
    picture03: 2,
    img1Title: "My first Portfolio website",
    img2Title: "My Second Portfolio website",
    img3Title: "My Current Portfolio website",
  },
  {
    id: 4,

    title: "programming-buddies",
    icons: [],
    pic1: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "",
    pic3: "",
    topic: "Educational",
    link: "",
    header: "Maximizing the benefits of programming buddies",
    abstract:
      "Partnerships can be a useful way to speed up your learning if done right, but a waste of time if done wrong",
    date: "April 2022",
    summary:
      "One of the things most new developers hear about is the idea of finding a coding partner to help with accountability and learning. This is a good idea in theory but often tends to fall well short of expectations. So, if you are interested in finding a coding partner here are some things I think you should take into considering if you want to maximize the benefits.\n \n \n 1. Get on the same page early on. \n \n This is a partnership, not a mentor/mentee situation (which is a separate thing on its own). While you guys can certainly help each other out, the purpose is an equal partnership to achieve both of your goals. \n \n \n 2. Be willing to leave if your partner is not serious. \n \n This is something most new learners don’t understand. Most people are not serious about learning to program. The vast majority will quit within the first few weeks and never type another line of code again. If your partner is slacking off, not responding to messages, or constantly delaying tasks, it’s a sign they fall into this category. It’s not your job to motivate them. Cut your losses and move on. \n \n \n 3. Understand that joint projects are good for learning but bad for a portfolio. \n \n This is another common misconception. Joint tasks are sometimes seen as killing two birds with one stone. They allow you to finish a project quicker, while at the same time displaying you can work in a team environment. While this is true to some extent, the reality Is most recruiters don’t know how much of a project you did personally. Even if you write down what you did specifically, there will always be an eye of skepticism. To mitigate this possibility, have your own copy of the repository and make sure you can duplicate anything your partner did. \n \n \n 4. Outline your objectives early on. \n \n Make sure you write down a list of both your long and short-term goals when it comes to this partnership. Having quantifiable, time-limited objectives is the only way to measure whether this is helping you improve or not. Do not settle for vague or general goals as there no way to evaluate your progress. \n \n Ultimately partnerships are a useful tool when done properly but being in a situation that does not foster improvement will hinder your growth in the long term. So, make sure you do it right to avoid wasting time.",
    paragraph1: "",
    picture1: null,
    paragraph2: "",
    paragraph3: "",
  },
  {
    id: 5,

    title: "PHP-undervalued",
    icons: [],
    pic1: "https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg",
    pic2: "",
    pic3: "",
    topic: "General",
    link: "",
    header: "Why PHP and WordPress are neglected by many developers",
    abstract:
      "Mastering PHP opens up so many opportunities in the small business and freelance space. Yet so many new developers ignore it",
    date: "April 2022",
    summary:
      "I recently started learning PHP to add as a second language to my set of skills. Part of it had to do with my frustrations of dealing with WordPress and the limitations it imposes on developers by all these paid themes, builder tools, and plugins.  I knew that with my programming experience, I should be able to easily customize much of the things without having to be charged for simple features. As I delve into PHP, I realized that it should have been the first language I learned. \n  Now that is not to say that is the case for everyone, but for me at least, I wish I got into PHP before learning Express or React.  The way I approached Express when I first learned it was to try and do things it was not really meant for.  After understanding the basics, instead of heading on to learn React and the MERN stack, I decided to use Express to render the front-end pages of my website on top of acting as the server.  It was fun and I learned a lot about server-side rendering and authentication. ",
    paragraph1:
      "But what I was doing in Express was much easier within a MERN stack setup. And it was already done and perfected in the WordPress/Laravel paradigm.  If I had spent that time teaching myself server-side rendering using any other language, it would have been much more helpful. At least in the context of small business freelancing. Most businesses want a WordPress website, so most web design companies cater to that. If you have PHP/Laravel experience that adds to the WordPress capability, NodeJS and Express do not. Despite this, there is a tendency within th developer community to look down on PHP",
    picture1:
      "https://novikov.com.ua/wp-content/uploads/2020/11/mishenev-6598-9926231.jpg",
    paragraph2:
      "PHP and Laravel are like an ace card when you go to small web design companies. Not only can you work within the WordPress ecosystem, you can create and build your own custom themes and plugins. This can save many companies both time and money in the long run. Many new developers never see this reality because most social media posts encourage them to learn the MERN stack and insinuate PHP as outdated tech. That is not to say the Express and NodeJS have no value, far from it in fact. It’s just that their use without a front-end framework like ReactJS, Vue, or Angular is rare in the industry.",
    paragraph3:
      "Newcomers should focus more on learning PHP and Laravel unless they are certain that the demand for the MERN stack is high where they live. Ultimately everyone’s situation is unique, but in my case I would have loved to learn PHP much sooner.",
  },
  // {
  //   id: 6,

  //   title: "MERN-application-Heroku",
  //   icons: [],
  //   pic1: "https://crowdbotics.ghost.io/content/images/2019/05/MERN.png",
  //   pic2: "",
  //   pic3: "",
  //   topic: "Education",
  //   link: "",
  //   header: "How to deploy a MERN application to heroku",
  //   abstract:
  //     "A quick step by step guide on how to set up a MERN on Heroku servers",
  //   date: "April 2022",
  //   summary:
  //     "This little guide is meant to act as a quick little cheat sheet for developers who already have experience doing this. If you want a more detailed version I would suggest you watch the MERN stack tutorial on youtube by Brad Traversy",
  //   paragraph1:
  //     "The first things you need to do involve setting up the files and getting the server runner. Here is the order you do them in.\n 1-Set up Source folder \n 2- Set up backend folder \n 3-Initiate backend folder. \n 4-Set up the '.env' and then the '.gitignore files'. Put PORT=(choose a number) in the .env file and then place the .env file in the '.gitignore' file \n 5-Install Express, Nodemon, dotenv, and mongoose by entering 'npm i express dotenv mongoose + npm i -D nodemon' in the terminal. \n 6- Start a git repository by opening a bash terminal on VS code and entering 'git init + git add . + git commit -m ‘text’'. \n 7-Setup a basic server ",
  //   paragraph2:
  //     "8-Create the front end folder by typing 'npm create-react-app frontend-folder-name' in the VS code terminal. \n 9- Paste this into the .env file 'NODE_ENV = development'. \n 10-Copy this code below into the server.  ",
  //   paragraph3: "",
  //   picture1: null,
  //   picture01: 3,
  //   picture2: null,
  //   picture02: 4,
  //   picture3: null,
  //   picture03: null,
  //   img1Title: "Basic server template",
  //   img2Title: "",
  //   img3Title: "",
  // },
];

module.exports = { articles };
