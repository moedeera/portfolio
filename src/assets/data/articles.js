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
    date: "June 2022",
    summary:
      "So if you have been keeping tabs on the economy, chances are you have been hearing of a possible if not probable recession. Many youtubers in the web development community are already talking about it.  Youtuber and senior developer Stefan Mischook made his second video on the topic recently.  The general advice from him was the same as what you would hear from other senior developers. If you are working in a company that operates on thin margins, you are in trouble. For those working for companies with more solid foundations, you should be fine.\n After speaking with a few companies in my own local area, I can confirm that web design companies are feeling the pinch. Some even stated they did lay off some developers. When I asked why (to see if it was for other reasons), they told me it came down to business slowing. They are not getting the steady supply of clients they normally would. Despite that, both companies did state that they would still consider hiring if they found the right talent. This tells me they probably don’t believe the recession will last long. Another possibility is that they want talented developers so that when the recession is over, they can meet the uptick in demand.  This falls inline with what happened in the 2008 recession where the downturn led to many layoffs initially. But the ensuing turnaround and demand uptick meant there was a major shortage in developers for a brief period.\n  Will there be a repeat of that this time around? Only time will tell. However, one thing that is for certain is that developers that keep improving are always In a better position when the jobs return. So in that sense, junior developers should look at this as an opportunity to bolster their knowledge. In times of a boom, there is a tendency to focus more on trying to get work as oppose to working on skills. But now that the job market has cooled off a little,  there is a lot less pressure to get a position right away.  So ultimately this is a gold opportunity for the developers who are willing to put the extra effort to separate themselves from the rest.",
  },
  {
    id: 1,

    title: "design-skills",
    icons: [],
    pic1: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "",
    pic3: "",
    topic: "Design",
    link: "",
    header: "Web Design as a skill on its own",
    abstract:
      "Developers need to understand that knowing design is not a bonus but an essential tool of front end web development",
    date: "May 2022",
    summary:
      "One of the most important things I learned in this industry, is the importance of separating different facets of web development. It may be easy to think that front end development is just one skill. However, that is not true, far from it in fact. Front end development must be separated into 2 disciplines; Design and structure (or code if you will). This is important because one of the biggest problems with new developers is that they focus too much on the coding aspect of a website and neglect the design or aesthetic portion of it. You will see graduates or new developers with sub-par looking websites built on well structured code. Many of these developers falsely believe that recruiters will look at their code and not be concerned about the overall look of their projects. They assume that companies have a specific position for the design aspect and that it will not be something a front-end developer has to focus on. This is just not the case.\n While it is true that you don’t have to be a designer to be a front-end developer, you must have an understanding on what is good design.  Design is not like code; it is not a hard science but rather something more intuitive. A junior programmer may not be able to tell you if a website is well-coded, but they can tell you if it looks good. Translating this intuition into a technical understanding of design is difficult. Most junior developers probably understand that things like organization and symmetry look good. But beyond that, their grasp of design is very limited.  Therefore, it is very important for new developers to investigate websites like dribble.com and frontendmentors.io to get a glimpse of what is (and isn’t) good design.\n For me, I spend at least 15 minutes a day looking into different websites to find inspiration for my next project. In fact, I never start a website unless I have a design inspiration bookmarked on my browser.  For any new developer out there, I strongly suggest you do the same. Because ultimately, it does not matter how good your coding skills are if you package them in websites from the early 2000s.",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
  },
  {
    id: 2,

    title: "importance-progress",
    icons: [],
    pic1: "https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "",
    pic3: "",
    topic: "learning",
    link: "",
    header: "Why tracking progress is important for new web developers",
    abstract:
      "Keeping tabs on your achievements is an easy way to boost motivation when you are learning to code or design.",
    date: "April 2022",
    summary:
      "For many aspiring web developers, the learning curve is friendly at first, but get’s steeper as they go along.  Once you learn the basics, learning new concepts becomes more challenging. As humans we at many times require validation of our efforts to drive our ambition. The problem is in many areas of life the validation dwindles the more we achieve. Take for instance working out, there is a concept known as newbie gains to highlight the faster muscle growth in the early stages of a workout routine. The rate of muscle gain slowly diminishes as you continue to build it. Therefore, so many people who try to body build quit early on. The same concept is true in web development. Once those early victories come by, learning new things becomes more of a challenge and the motivation turns into frustration. /n This is why documenting your progress over long periods of time is very important. My suggestion would be to make a new portfolio website every 3 months or so. It establishes a sense achievement that gives you the drive to go forward.  Stagnation is the greatest contributor to apathy. Once you feel like you are stuck, the goal starts to feel less achievable. When new developers get stuck on a certain concept, the tendency is to not go forward until that problem is overcome. But this hinders the learning curve greatly for most new learners. It is always better to move on and come back later if you get stuck. Sadly, most developers fall into the all or nothing mindset. /n My biggest suggestion would be to write down the things you get stuck on in a list and spend an hour a day searching for answers on either stackoverflow.com or reddit. Another major advice is to improve your early projects as soon as you learn new concepts.  Your first and second projects don’t have to be the worst on your portfolio. Constantly build on them and improve the code and UI. But make sure to keep the old versions saved in some fashion for you to look back on.  This will help you see your progress and visualize how much closer you are in getting to your goal.",
  },
];

module.exports = { articles };
