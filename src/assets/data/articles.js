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

const template2 = {
  id: null,
  title: "",
  icons: [],
  pic: "",
  topic: "",
  link: "",
  header: "",
  abstract: "",
  abstractLG: "",
  abstractSM: "",
  created: "",
  updated: "",
  readTime: "",
  headers: [],
  paragraphs: [],
  pictures: [],
  picCaption: [],
  videos: [],
  code: [],
  comments: [],
  mapper: [0, 1, 2, 3, 4, 5],
  feature: "",
};

const articles = [
  {
    id: 0,
    title: "reactcontext",
    icons: [],
    pic: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "Educational",
    link: "",
    header: "User information using Context Provider and Axios",
    abstract: "Asynchronous user data using React Context Provider ",
    abstractLG:
      "How to use React Context Provider and Axios to fetch and store user information",
    abstractSM: "User information using Context Provider and Axios",
    created: "October 2022",
    updated: "October 2022",
    readTime: "4",
    headers: [
      ``,
      `What's the Purpose?`,
      `Management of data in react context-provider`,
      `While this is all nice to have, the question that matters is how does this work when connecting to a server and fetching data?`,
      `Fetching data in a context- provider`,
      ` `,
      ``,
    ],
    paragraphs: [
      `Today I wanted to dive into a few concepts involving React user authentication via context provider. This is something I have not seen in any tutorial I am aware of. Much of that has to do with react-redux being the go-to for most online tutorials when it comes to authentication. Ben Awad from youtube has done a video explaining it on a basic level. To see that, check out the featured video for this blog`,
      `Before I go any further lets Unpack this whole concept of authentication via a context provider. Why look into this concept? There are a few reasons but the main one being that it is much simpler and involves less dependencies than using react-redux. But the question then is how would React context provider manage user information when it is coming from a server?`,
      `React context is a built-in tool inside react that just needs to be imported. It allows data to be stored on the top of the hierarchy. This allows all components access to  hooks, constant variables, and functions.  You can also have a useEffect hook inside the Context provider. This is very handy when you are dealing with multi-layered data that is constantly being updated. To initiate it, all you do is create a Context.js file and paste the following code. `,
      `Fetching data in the Context folder is easy. Fetching the data immediately on load on the other hand is a little trickier. To Fetch data all you have to do is install axios and write up a basic fetch function. Then export that function from the Context Provider. If you want it to load up immediately, put it inside a useEffect hook.`,
      `However there is a problem you will run up to When you generate a user on the top level. That is that the rendering of the hook that contains the user might not load up in time. Take for instance  you declare this hook to store a user`,
      `You then create this function to fetch the user on first render`,
      `you then place the function inside a useEffect hook like this`,
      `Now your context should look like this`,
      `And this is the component that fetches the user`,
      `You will eventually realize that this leads to an error because useEffect does not take in asynchronous functions directly, to overcome this define the function inside the useEffect hook and call it immediately`,
      `To overcome this, you simply redefine the function inside the useEffect hook like this`,
      `This will solve the issue and allow you to fetch your use (or any data) from the context without having to use any react library. This is ideal for small projects that don't need sophisticated data management. For medium size projects(that require authentication) you can you something like custom hooks to add an extra layer of organization to your app. But that will be something I will get into on another blog. Hopefully this was helpful.`,
    ],
    pictures: [],
    picCaption: [],
    videos: [`https://www.youtube.com/watch?v=lhMKvyLRWo0&t=433s`],
    code: [
      null,
      null,
      `import { createContext, useState } from "react";

    export const SiteContext = createContext({});
       
    export const SiteContextProvider = ({ children }) => {
    
    
     <SiteContext.Provider
          value={{
     data
          }}
        >
          {children}
        </SiteContext.Provider>
    };
    `,
      null,
      ` const [user, setUser] = useState(null);`,
      `   const fetchUser = async () => {
        try {
          const res = await axios.get(
            "https://link-to-my-app/api/user"
          );
           setUser(res.data);
        } catch (error) {
          console.log(error);
        }
      };`,
      `  useEffect(() => {
         fetchUser();
      }, []);`,

      `import { createContext, useState } from "react";

      export const SiteContext = createContext({});
      
      export const SiteContextProvider = ({ children }) => {
        useEffect(() => {
          const fetchUser = async () => {
            try {
              const res = await axios.get("https://link-to-my-app/api/user");
      
              setUser(res.data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchUser();
        }, []);
      
        <SiteContext.Provider
          value={{
            user,
            setUser,
          }}
        >
          {children}
        </SiteContext.Provider>;
      };
      `,
      `import { useContext, useState } from "react";
      import { SiteContext } from "../../context/Context";


      const { user } = useContext(SiteContext);
      export const HelloUser = () => {
        return (
          <div>Hello {user}</div>
        )
      }
      
      `,
      `  useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get(
              "https://link-to-my-app/api/user"
            );
           setUser(res.data);
          } catch (error) {
            console.log(error);
          }};
    
        fetchUser();
      }, []);`,
    ],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    feature: "https://www.youtube.com/watch?v=lhMKvyLRWo0&t=433s",
  },
  {
    id: 1,
    title: "lessons-from-first-interview",
    icons: [],
    pic: "",
    topic: "General",
    link: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "What I learned from my first interview",
    abstract: "My first interview was stressful, but a good learning lesson.",
    abstractLG:
      "Things I learned from my first interview. Avoid making the mistakes I made",
    abstractSM: "4 Lessons from my first Interview",
    created: "October 2022",
    updated: "October 2022",
    readTime: "3",
    headers: [
      ``,
      `Portfolio website is major`,
      `Junior developers are expected to be good`,
      `Prepare for the unexpected`,
      `Do research on the company, extensive research `,
      ``,
    ],
    paragraphs: [
      `
      So a couple of weeks back, I finally had my first interview after a few months of applying and here is what Iearnt.`,
      `The main praise that I got from the interviewer was about my portfolio website. He asked me questions about how I built it, what I used and how I came up with the design. Good design always sticks out and gives you an edge when it comes to recruitment. But make sure everything is up and running.  Sometimes your website might have few blemishes here or there. In my case, there was a bug in the contact form that caused it to omit the actual message (but not the email luckily). So be sure to clear up any bugs that may stick out.`,
      `Junior developers are expected to be job ready to a large degree. While this may vary from company to company, it is mostly prevalent in smaller companies. So the ability to work with different technologies, services and platforms is crucial. It is good to have projects that demonstrate that you can learn to use different services. Being a Junior developer for a lot of companies means no prior work experience, not no prior experience at all.
      `,
      `Interviews don’t follow any template. Mine was on a conference video call with the manager and the lead engineer. I was notified 2 hours beforehand about the interview and since I did not have anything going on for that day, I agreed. In hindsight it would have been better to ask for a little more time to prepare. During the interview, I was not asked any overly technical questions. I was mainly asked general questions. One of them was about a software I had limited experience with. I wish I had looked it up more. Now keep in mind I was not expecting this interview so I did not have time to prepare. But this goes to show the unpredictable nature of job interviews and how you have to be mentally ready for anything. 
      `,
      `When you are applying for junior developer jobs, it can be easy to forget the job descriptions of the companies you apply for. The odds of getting an interview from any single company is small so you tend to not focus much on each company. But when you get an interview, that has to change. Granted I did do research the first time around but after not getting a callback for two weeks, much of the information faded from my memory. It also could have been the stress of the interview which made me forget a lot of the things I should have remembered. But that’s why you should do the research rigorously. It is true many companies don’t give juniors heavy responsibilities early on. But you still have to show that you are knowledgeable of what they do and are able to articulate that.
      `,
      `
      Ultimately it was a good experience. Hopefully there will be more to come. In the meantime, make sure to not make the same mistakes I did.  
      `,
    ],
    pictures: [],
    picCaption: [],
    videos: [],
    code: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5],
    feature: "https://www.youtube.com/watch?v=cTatCDnvGBY",
  },
  {
    id: 2,
    title: "3-reasons-self-taught-fail",
    icons: [],
    pic: "",
    topic: "Advice",
    link: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "3 Common Reasons Self Taught Developers fail.",
    abstract:
      "If you want to maximize your chances of success, avoid these 3 common pitfalls",
    abstractLG:
      "Being a self-taught developer is very difficult. Here is my take on the biggest reasons most fail",
    abstractSM: "3 Common Pitfalls new developers should avoid",
    created: "September 2022",
    updated: "September 2022",
    readTime: "3",
    headers: [
      "",
      `1.Lack of discipline`,
      `2.Poor Time management`,
      `3.Lack of long term Planning`,
      `Final Conclusion`,
    ],
    paragraphs: [
      `Being a self taught developer is a tedious journey for most. Most people who start this path will fail. If you want to maximise your chances of success, avoid these 3 common pitfalls.
`,
      `This will come sooner or later. Frustration is normal when learning anything new. But everyone has a different threshold for how much they can put up with before quitting. At first, It is due to not understanding concepts. Then it is the frustration of spending hours looking for answers on stackoverflow.com  to debug something minor. And finally the frustration of not being able to build the projects you want without hours and hours of more learning and stackoverflow. Humans tend to gravitate towards the path of least resistance. So your mind will give you more and more reasons to abandon coding and take on something less rigorous. Remember, if it were easy, it would not be worth it. There is a reason developers get paid high salaries.
To overcome this frustration, try to build a love for coding. Focus more on a programming language you like. Spend more time on design if you are a creative person, or on functionality if you are a more technical individual.
If you can't find the passion, find strong motivation(beyond just the money). Frustration will start to break down your discipline. Motivation and passion are the only remedies to build it back up.`,
      `Poor Time management is probably the biggest pitfall most developers fall into. Either not spending the adequate time to code, or just not using the time effectively. New developers will convince themselves that a half hour here or there is enough to make progress. Or that they can constantly delay coding to later and later parts of the day or week. This all stems from poor time management skills.
To get on the right track, make sure to set deadlines for each task. Before coding or watching a tutorial, grab a pen and paper and write down what you want to achieve and by when. Plan out tasks in accordance with their priority level. Cross out a task after it's done. This helps you have a more focused approach to getting things done.
Most importantly though, stay consistent. Don't go multiple days without coding. This will kill any rhythm you had and will make it hard to get back on track.`,
      `There is the saying "if you fail to plan, you plan to fail". So if you don't have any goals beyond watching the next tutorial or doing the next project, you have no plan. You have to have a long term vision of what you want to learn and when you want to land a job.
Many developers dabble with different tutorials and different projects. They have no sense of direction. As a result, they are not aware of where they are at in their development.
To address this, do some research. Find out what you would like to learn. Then find out what languages and skills are in demand in your area. If they are very different, find a compromise. Another thing you can do as well is to get a mentor. In person or online. Someone in the industry who can give you a general overview of what you need to do to become a developer.`,
      `Ultimately, there is no easy way to learn coding or land a job. It's a tough competitive field and you will meet a lot of resistance. But if you can avoid these 3 problems, you can navigate much easier and give yourself a better shot of landing a job in this industry.`,
    ],
    pictures: [],
    picCaption: [],
    videos: [],
    code: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4],
    feature: "https://www.youtube.com/watch?v=ueXjGMrmn8k&t=4s",
  },
  {
    id: 3,
    title: "crypto-boom",
    icons: [],
    pic: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "Economy",
    link: "",
    header: "Is the Crypto Boom Dead?",
    abstract: "What is the long term prognosis for this sector?",
    abstractLG: "What is the long term prognosis for this sector?",
    abstractSM: "Is the crypto sector Job boom over?",
    created: "September 2022",
    updated: "September 2022",
    readTime: "3",
    headers: [
      "",
      "The crypto rise ",
      "More digital currencies, more developer jobs",
      "Boom Bust Cycle ",
      "Should new developers get into this industry? ",
      "What about long term?",
    ],
    paragraphs: [
      "In recent months the price of cryptocurrencies has dramatically fallen. This has resulted in mass layoffs for developers in this segment of the industry. This raises the question, what is the future for jobs in this industry? What is the long term prognosis for this sector?",
      "Since their inception, cryptocurrencies have had a massive impact in society as a whole. It has changed the nature of payments,investing, and speculation. The  market share as a result has exploded to around 1 trillion dollars US. This has attracted billions of dollars worth of investment money.",
      "As more investors flocked to crypto startups, demand in developers surged. This created tens of thousands of jobs for developers experienced in block chain management. Demand in senior developers grew as these new cash rich startups bid up salaries in an attempt to snatch up talent quickly. For them it was about getting their companies running as soon as possible.",
      "This created a segment of the developer job market that was both highly lucrative and highly volatile. An industry that can grow rapidly in the amount of job opportunities but can also collapse on a dime. Obviously this is not ideal for everyone, but for people willing to navigate the cycle, it can play out to their advantage.",
      "If you are new to the web development space, this may or may not be for you. If you are someone with a family,mortgage, or any other financial commitments,steer away. I would suggest entering broader sectors of the industry. Once you build enough experience and expertise, you can definitely give the crypto space a try. The crypto sector is suited more for new developers with more flexibility. It may require time, savings, discipline, and a willingness to relocate. This is because not every location has Crypto startups or companies. Not every crypto company can pay juniors enough to overcome their cost of living. None can guarantee any short or medium term stability either. If you are fine with this, then it may be worthwhile for you.",
      "From my research, the crypto job industry requires a different approach for developers. Jobs are much fewer than the web design market. However, the applicant to job ratio is much better. Not many juniors want to get into the crypto industry. So you have less overall competition. As long as you perfect your skills and build a solid portfolio, you will get a job much quicker than in web development.",
      "The crypto market will eventually stabilize in the long run. On top of that, there will always be investors who want to take risks. There is money to be made as a developer in this field. Is it stable money? No. But as long as you build up skills and experiences that apply outside of crypto development, you always have the option of switching industries. As long as you don't put yourself in a situation where you need constant job stability(lack of savings, mortgage, dependents), this industry can work out well for you.So ultimately it depends on your situation.",
    ],
    pictures: [],
    picCaption: [],
    videos: [],
    code: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5, 6],
    feature: "https://www.youtube.com/watch?v=P87pLayUD8c",
  },
  {
    id: 4,
    title: "4-css-techniques",
    icons: [],
    pic: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    topic: "Educational",
    link: "",
    header: "4 Important CSS concepts explained with buttons",
    abstract: "4 important CSS concepts that I a am always using",
    abstractLG:
      "These are my 5 go-to CSS techniques when I am working on design or recreating websites",
    abstractSM: "5 CSS Techniques",
    created: "August 2022",
    updated: "August 2022",
    readTime: "3",
    headers: [
      null,
      "1.Transition property",
      null,
      null,
      null,
      "2.Calc() function",
      null,
      "3.Shadow property",

      null,
      "4.Translate method (2D)",
      null,
      null,
      null,
    ],
    paragraphs: [
      "I am a firm believer in showing the practical use of something before explaining it. Unfortunately, so many new developers are used to learning theoretical or non-applicable concepts that they don’t learn web design effectively. This has to do with so many tutorials showing to-do lists or calculator apps. These videos show a lot of good concepts but in a manner you will never use them for. No client  is going to pay you to design or build a to-do list. No employer will ask you to build a JavasScript calculator. In today’s blog I will explain my top 4 most used CSS properties and methods in a component everyone uses: buttons. So here are the top 4.",
      "This is an essential property in every design. The transition property controls the time it takes for a component or div to animate from one state to another. This is the difference between a glitchy animation versus a smooth one. You have the ability to control any aspect of the animation. You can set the transition time to anything you consider fit. You can also give different animations their own timing. I generally advise however, that you set the same transition time for all animations on a specific component or html tag",
      "The syntax for transition is as follows:",
      "To see in action, copy and try out this hover effect on a button,",
      `The 400ms refers to the total time of the transition. The ‘ease-in-out' refers to the rate of change. ‘Ease-in-out’ is my most used rate-of-change control. 'Ease-in-out" just dictates that the animation start and end slow but speed up in the middle.`,
      `This is a really handy function for developers who want smooth mobile responsiveness in their design. Sometimes adjusting height, width, or font-size for all devices  is very daunting. You will end up with a solution that is less than ideal by relying simply on media queries. The CSS calc() function allows you to dynamically adjust the size of anything using viewport width(vw) or viewport-height(vh). Working with it is easy. Just start with the lowest pixel sizes you want for any given item in your html. You then add an appropriate dynamic variable (usually vw) to expand the size when it's viewed on higher devices. 
      `,
      "Here is an example below with the same button, copy and paste this and then shrink your browser or rotate your mobile device to see the difference. ",
      `Shadows are a very under-appreciated aspect of web design. Adding a shadow can be the difference between looking professional or bland.  Just make sure you add the proper amount of it. Also make sure to be consistent with shadows. To add a shadow to your design simply type the following`,
      `The numbers and color are applied the same way margins and paddings are. Experiment with them to see what works for your design but I would strongly suggest looking into already existing designs if you want to see what works.`,
      `This is something to go with a hover effect. Of course you could use it for other purposes but I mainly use it for hovers. The property is ‘transform 'but the method  is' translate’. When you apply a  translation in any direction it moves your html component in that specific direction. I use this most when I am applying hover effects to buttons. But I also use it for general divs as well.`,
      `The syntax is as follows`,
      `to see it in action apply the hover effect on the button`,
    ],
    pictures: [],
    code: [
      null,
      null,
      `button {
        transition:all 400ms ease-in-out;
        }
        `,
      `button:hover{
        background: gray;
        }
        `,
      null,
      null,
      `button {
        font-size: calc(8px + 1vw);
        }
        `,
      `button{
        box-shadow:0px 8px 15px rgba(0, 0, 0, 0.1);
        }
        `,
      null,
      null,
      `button{
        transform:translateX(-5px)
        }
        `,
      `button:hover{
      transform:translateX(-10px)
      }
      `,
    ],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    feature: "https://www.youtube.com/watch?v=1PnVor36_40",
    status: true,
  },
  {
    id: 5,
    title: "css-tips",
    icons: [],
    pic: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    topic: "Advice",
    link: "",
    header: "CSS tips for beginners",
    abstract: "A few things I wish I knew when I was first learning CSS",
    abstractLG:
      "Learning CSS can be tricky for new developers. This is because knowing CSS and understanding how to use it are two different things. Getting over-confident or developing bad habits is a pitfall for most new learners. I am going to share some tips I have to help you avoid some of the mistakes I made",
    abstractSM: "Tips to help you avoid the mistakes I made",
    created: "August 2022",
    updated: "August 2022",
    readTime: "3",
    headers: [
      null,
      "1.Don’t get obsessed with CSS animations.",
      "2.Look Into existing Designs ",
      "3.Spacing is very important",
      "4.Mobile first approach.",
      "5.Practice Practice and Practice",
      null,
    ],
    paragraphs: [
      "There are a few things I wish I knew when I was first learning CSS.  CSS is easily learned but rarely ever mastered. Truly understanding CSS takes time and practice. Because there are infinite ways of implementing CSS to achieve a specific design, it is easy to develop bad habits or overconfidence. For me I developed (and had to get rid of) tons of those bad habits. Here are some tips I have from my own personal experience.",
      `It's very tempting when you are new to have animations in your web designs. Animations look nice and can add to the quality of a website. But this applies only if they are done right. When you are new , chances are you are not going to know how to get animations right. Your attempt will create either something glitchy, excessive, or just downright ugly. Now don’t get it wrong, Animations in your own personal projects for learning purposes are fine. However, animations on your portfolio need a certain quality to validate their presence`,
      `You are not a designer, you're a coder. A new coder at that. Look into pre-existing designs for inspiration.  Go to websites like uidesigndaily.com or dribbble.com. Cloning established websites  is also very helpful. But you need to constantly see dozens of well made websites before you understand what is good design. So until then, don’t design from scratch.`,
      `When you analyze a good website design you don’t look at the spacing. But when you analyze the spacing, you understand why the design works. Now you don’t have to be a master of using space to enhance designs. You just need to master the basics. Always have a consistent container for all your sections including the navigation menu. Make sure images are properly aligned and spaced away from text. And most importantly, avoid excessive margins between sections or components. Just have enough space to visually show the sections are separated, and not thing more.`,
      `Always go mobile first. It will save you a lot of headaches down the line. Even if the designs you are basing your website off are 1080px+ mockups.  Now going mobile first does not mean you don’t have to watch your components as they scale up. It is just a more fluid way of building a responsive design. `,
      `You will never get good at CSS if you do it sparingly.  Practicing more often allows you to develop your own style. It also helps you learn more concepts within CSS. You understand  when to use different tools like Grid and Flexbox. Most importantly, you become a faster and more efficient coder. This is crucial if you want to be a front end developer because you get paid based on your productivity.`,
      `These are just some of the main tips I have for beginners. I will post another Blog detailing more technical details I think beginners should understand. In the meantime, make sure you don’t make the same mistakes I did.`,
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5, 6],
    feature: "https://www.youtube.com/watch?v=1PnVor36_40",
    status: true,
  },
  {
    id: 6,
    title: "mass-layoffs",
    icons: [],
    pic: "https://images.pexels.com/photos/7277906/pexels-photo-7277906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "Economy",
    link: "",
    header: "My thoughts on the recent round of layoffs",
    abstract: "The Layoffs are growing and there is still a lot more to come",
    abstractLG:
      "The current round of layoffs were expected. But the sheer number of workers being let go within a few months is concerning. Despite this, most reports show that those developers are immediately finding new work as the demand for talent is still high. The sting will be felt mostly by junior developers.",
    abstractSM: "The layoffs are concerning, but the sector remains strong",
    created: "August 2022",
    updated: "August 2022",
    readTime: "3",
    headers: [
      null,
      "The numbers are staggering",
      "Its not just the Hype companies",
      "The developers losing work are finding jobs",
      "When will the bleeding stop?",
      null,
    ],
    paragraphs: [
      "This recession is coming at no surprise to anyone. Everyone knew about it. Federal banks were going to start raising interest rates after lowering them during the pandemic. This was going to affect many companies including (and especially) those in the tech sector. Tech was highly susceptible due to the sheer number of startups and companies reliant on low interest rates and a growing economy. So as soon as interest rates started rising, and the GDP started shrinking, layoffs were coming ",
      "The actual numbers themselves are staggering on all fronts. More than 32,000 people in the US alone have been fired since the beginning of the year.  To be clear, that is 32,000 people in the tech sector alone. Other sectors were hit hard too, with Amazon shrinking its workforce by 100,000. And to make matters worse, there are still planned layoffs in the pipeline.",
      "Contrary to popular belief, this is not entirely contained to the more riskier companies. While it is true that companies in the cryptocurrencies and NFT sector are getting hit the hardest, the traditional giants are also taking a beating. Google, Microsoft, Meta and now Shopify are all either laying off workers or putting in hiring freezes. New companies are holding back from hiring and established companies are bracing for a large reduction in demand",
      "Despite all the doom and gloom, the laid off workers are finding jobs right away. Senior developers are in such high demand that they are getting contacted by recruiters almost immediately. Some are lining up multiple interviews the same week. Mid level developers are also finding work albeit not as easily as the seniors. This will mean that companies normally settling for juniors will now find a fresh pool of mid level developers to recruit. So yes, Juniors will lose in the short run. New developers have benefited from the high demand for experienced developers because it meant smaller companies were getting desperate for workers. That dynamic is going to cool down for the next few months",
      "The question now is ; when will things settle? We can’t keep losing jobs at this rate indefinitely. If this goes on for too long, it could get to a point where there is a glut of laid-off mid level developers. That is when things could get really scary for new graduates or students enrolling in computer sciences. It could very well lead to a drop in enrollment for new students in this field",
      "Despite the concerns, developers getting into the industry should not worry. The tech sector is not going away as the demand for technology and digitization is always growing. So while  the short term may mean a lot of layoffs, we are nowhere near a point to start worrying about the sector as a whole. The demand for skilled developers is still greater than the supply. And so as long as that is the case, this industry will go on strong",
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5],
    feature: "https://www.youtube.com/watch?v=gCg47n_TlFc&t=499s",
    status: true,
  },
  {
    id: 7,
    title: "codingjourney",
    icons: [],
    pic: "https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "General",
    link: "",
    header: "My journey into the world of programming",
    abstract:
      "Learning to code has been quite a journey the past couple of years. I figured its time to share my thoughts on it.",
    abstractLG:
      "Learning ro code started in 2020 for me. Since then I went from barely knowing how to code hello world to building entire websites. Here are some of my thoughts on this journey",
    abstractSM: "Some of my thoughts on my journey into learning how to code",
    created: "August 2022",
    updated: "August 2022",
    readTime: "4",
    headers: [null, "The start", "Change of routine", "Results", null, null],
    paragraphs: [
      'In 2020 I started to learn code, it was a decision to try out something new and see if it worked for me. I was stuck in a job I did not particularly like and wondered if there was something better for me out there. I remembered a coding introductory course I took back in college. It focused on C++ and I had a lot of fun with it. After the course ended, I started doing little side projects with C++. At first it was minor todo lists but slowly grew in complexity. I started running into more and more bugs however, and eventually, I lost enthusiasm. I was not planning to become a developer at the time so it was purely a hobby. The difficulties I encountered painted a belief that I was not built for a career in programming. All I knew in the programming world was C++. I falsely assumed other programming languages were equally as challenging. I would go back to C++ periodically for the next decade or so to build simple little projects here and there. But nothing more. Eventually, during 2020, in the early stages of the pandemic, I began to wonder about what other programming languages are like. So I started doing some research.  I searched "coding tutorial for beginners" and stumbled upon a video by Brad Traversy. It was a pretty informative video that showed me all the different coding languages and their uses. I Immediately decided I wanted to get into web development. My journey began.',
      "Learning to code was not a linear process. Getting started was the hardest part. At first, I had a lot of enthusiasm but very little discipline. It took me 2 weeks to actually sit down and go through a CSS and HTML tutorial. I was at a job that never challenged me intellectually so this was something my brain was not use to. It was when I started learning an actual coding language in JavaScript(CSS and HTML are not coding languages) that everything changed. Javascript to me was the friendlier version of C++. It could do all the things I tried to in C++, but much quicker and more easily. Tt also already had a visual interface via the browser. Everything fell in place at that point. I found a skill which I genuinely enjoyed learning and plenty of online resources to help me.",
      "When you find a skill you enjoy learning, it absolutely changes how you manage your time. Instead of letting weeks and months go by aimlessly, I set goals to either learn new skills or complete new projects. I sold my gaming console and canceled my Netflix subscription. I was more conscious about the time I was wasting.  The beginning of my days starts with me planning out my schedule to accommodate as much coding as possible. The first 4 hours of my day are generally reserved for coding unless I have work. If I cannot code, I watch YouTube tutorials. If I cannot watch tutorials, I surf websites to find design themes. Everything I do revolves around one simple goal; becoming a better developer",
      "With all that being said, this new routine has both its benefits and downsides. There have been a few key things I have improved on and other areas where I have certainly regressed. The biggest improvement is in time management and focus. With coding, the goals you can set are endless. The key is understanding how to break down each goal into smaller goals and allocating enough time for each. This carries on to other areas of your life as well. The more you manage your code-allocated time, the better you organize your time in general.",
      "The areas that I declined in are generally exercise and diet. Coding for 3-4 hours on most days got me into a habit of neglecting to exercise. This has been somewhat mitigated in recent months as I do allocate time to take breaks and go for a walk. However, Working a full time job and learning to program on the side is a recipe for a sedentary lifestyle. This at times causes cramps for both my back area as well as my neck. I do plan to solve these issues in the near future with a standing desk and a more defined exercise routine. But for now, it is an area where I struggle. As far as diet is concerned, the biggest issue is adjusting my calories to my activity level. If you are not going to be active, better to lower your calories in general. The days I am more active require more meals. Getting this balance right is tough but crucial if you want to maintain a healthy weight.",
      "Becoming successful in anything will come with sacrifice. Programming is no different.  Despite some of the hurdles, this has overall been a positive journey that I plan to continue. The key factor in all of this is having a genuine love for what you are doing. Once you have that, everything else falls into place",
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5],
    feature: "https://www.youtube.com/watch?v=H_pBvUFPceA",
    status: true,
  },

  {
    id: 8,
    title: "upcoming-recession",
    pic: "https://images.pexels.com/photos/5717791/pexels-photo-5717791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icons: [],
    topic: "Economy",
    link: "",
    header: "How this recession will impact the tech industry",
    abstract:
      "The upcoming recession is a hurdle, but it will provide an opportunity for many developers",
    abstractLG:
      "Senior developers should be fine. Mid-level developers should be a little concerned but will weather the storm. Junior developers should use this time to update and sharpen their skills and prepare for the rebound. ",
    abstractSM: "The upcoming recession is both a hurdle and an opportunity",
    created: "July 2022",
    updated: "August 2022",
    readTime: "3",
    headers: [],
    paragraphs: [
      "So if you have been keeping tabs on the economy, chances are you have been hearing of a possible if not probable recession. Many YouTubers in the web development community are already talking about it. YouTuber and 170 year old developer Stefan Mischook made his second video on this topic recently. The general advice from him was the same as what you would hear from other senior developers. If you are working in a company that operates on thin margins or negative margins, you may be in trouble. For those working in companies with more solid foundations, you should be fine.",
      "After speaking with a few businesses in my local area, I can confirm that web design companies are feeling the pinch. Some even laid off developers. When I asked why (to see if it was for other reasons), they told me it came down to business slowing. They are not getting the steady supply of clients they normally would. Despite that, both companies did state that they would still consider hiring if they found the right talent. This tells me they probably don’t believe the recession will last long. Another possibility is that they want talented developers so that when the recession is eventually over, they can meet the uptick in demand. This falls inline with what happened in the 2008 recession where the downturn led to many layoffs initially. But the ensuing turnaround and uptick meant there was a major shortage in developers for a brief period.",
      "Will there be a repeat this time around? Only time will tell. However, one thing is certain, developers that keep improving are always In a better position when the jobs return. Junior developers should look at this as an opportunity to bolster their skills. In times of a boom, there is a tendency to focus more on trying to get work as oppose to more learning. But now that the job market has cooled off, there is a lot less pressure to get a position right away. Ultimately, this is a gold opportunity for the developers who are willing to put the extra effort to separate themselves from the rest.",
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2],
    feature: "https://www.youtube.com/watch?v=UmnRxymgtJs",
    status: true,
  },
  {
    id: 9,
    title: "webflow",
    icons: [],
    pic: "https://images.unsplash.com/photo-1629195968955-e1a2a92b0c5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    topic: "General",
    link: "",
    header: "My first impression of Webflow",
    abstract:
      "Webflow seems like a builder that is geared mainly towards animation-rich designs.",
    abstractLG:
      "Webflow is amazing at creating a visual-effect rich websites, but can lack in other areas",
    abstractSM:
      "So I tried out WebFlow for the first time, here are the results. ",
    created: "June 2022",
    updated: "August 2022",
    readTime: "3",
    headers: [],
    paragraphs: [
      "I recently decided to try out Webflow and see what it’s like to build a website with it. Webflow is an online builder that I seen on ads when I browse YouTube via devices outside of my own (I’m on premium so I don’t see any ads). Its free to start using. But if you want your own custom domain and hosting, you must sign up with Webflow(and Webflow only). This is not ideal, but you get to see all of their features and build a website before you decide on signing up or not. So, I gave it a try. Keep in mind, this is my FIRST impression of Webflow and likely will change with more use. So don't take this as a full-on review of the platform",
      "For designers with CSS and JavaScript experience it’s very easy to learn and intuitive. The features make a whole host of things that require large amounts of CSS and JavaScript to be done quite easily. On the other hand, if your experience with CSS and JavaScript is limited, you will face a steep learning curve. The UI can be very intimidating and if you don’t have good organizational skills, you will have a hard time managing all the different sections, states, and classes.",
      "The navigation menu drove me crazy. Every new div block is dragged and dropped into a narrow navigation section. So you must make sure you do not insert anything in the wrong container as it can be visually confusing. Especially in larger multi-layered projects. In fact, it would be a major nightmare to manage complex pages if it weren’t for all the ready-made features and components.",
      "Another thing is that the responsiveness cascades downward for screens sizes under 600px. This means that trying to design the website mobile first is impossible. At first, I though I though It was just me who could not figure it out. But after looking into their YouTube tutorial and searching for answers online, it seems like the answer is no, you can’t. Granted, Webflow is structured to make responsiveness easier to manage. Nonetheless, I do find it bizarre to have this design choice given how many developers nowadays start with a mobile first approach",
      "Overall Webflow feels like a combination of WordPress and Tailwind. It allows a lot of customization with a library of pre-made templates and effects. It is geared more towards dynamic features like animations and scroll effects than it is towards static design aesthetics. However, managing all these effects can be confusing and will take some time to learn. Even if you know how to set up the effects you are going for.",
      "Webflow ultimately is suited for developers coming from platforms like WordPress who dislike having to constantly download plugins and pay for premium features, but at the same time don't want to start coding websites from scratch. It may or may not suit people beyond that, but for that group its a powerful tool. Like I said, this is just my initial impression of Webflow and will change with more use.  ",
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5],
    feature: "https://www.youtube.com/watch?v=OI5M9lRiNI4",
    status: true,
  },
  {
    id: 10,
    title: "design-skills",
    icons: [],
    pic: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "Design",
    link: "",
    header: "Web Design as a distinct skill within front-end development",
    abstract:
      "Developers need to understand that design is its own discipline and neglecting it could undermine your progress as a programmer",
    abstractLG:
      "Developers need to understand that design is its own discipline, and neglecting it could undermine your progress as a programmer. Because ultimately, it does not matter how good your coding skills are if you package them in websites from the early 2000s. ",
    abstractSM: "Understanding the design and visual aspect of the websites ",
    created: "June 2022",
    updated: "August 2022",
    readTime: "2",
    headers: [],
    paragraphs: [
      "One of the most important things I learned in this industry, is the importance of separating different facets of web development. It may be easy to think that front-end development is just one skill. However, that is not true, far from it. in fact, front-end development should be separated into 2 disciplines; Design and structure (or code if you will). This is important because one of the biggest problems with new developers, is that they focus too much on the coding aspect of a website and neglect the design. You will see graduates or new developers with sub-par looking websites built on well structured code. Many of these developers falsely believe that recruiters will mainly look at their code and not be concerned about the overall look of their projects. They assume that companies have a specific position for the design and that it will not be something a front-end developer has to focus on. This is just not the case.",
      "While it is true that you don’t have to be a good designer to be a front-end developer, you must have an understanding on what is and is'nt good design. Design is not like code; it is not a hard science but rather something more intuitive. A junior programmer may not be able to tell you if a website is well-coded, but they can tell you if it looks good. Translating this intuition into a technical understanding of design is difficult. Most juniors probably understand that things like organization, hierarchy, and symmetry look good. But beyond that, their grasp of design is very limited. Therefore, it is very important for new developers to investigate websites like dribbble.com and frontendmentors.io to get a glimpse of what is good design.",
      "For me, I spend at least 15 minutes a day looking into different websites to find inspiration for my next project. In fact, I never start a website unless I have a design inspiration bookmarked on my browser. For any new developer out there, I strongly suggest you do the same. Because ultimately, it does not matter how good your coding skills are if you package them in websites from the early 2000s.",
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2],
    feature: "https://www.youtube.com/watch?v=fyaBtRiqUWI&t=1010s",
    status: true,
  },
  {
    id: 11,
    title: "importance-progress",
    icons: [],
    pic: "https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "General",
    link: "",
    header: "Why tracking progress is important for new web developers",
    abstract:
      "Keeping tabs on your achievements is an easy way to boost motivation when you are learning to code.",
    abstractLG: "",
    abstractSM: "Tracking your progress is a great tool for motivation",
    created: "May 2022",
    updated: "August 2022",
    readTime: "2",
    headers: [],
    paragraphs: [
      "For many aspiring web developers, the learning curve is friendly at first, but get’s steeper as they go along.  Once you learn the basics, learning new concepts becomes more challenging. As humans, we often require validation of our efforts to fuel motivation. The problem is that in many areas of life, the validation dwindles the more we achieve. Take for instance lifting weights, there is a concept known as 'newbie gains' to highlight the faster muscle growth in the early stages of a workout routine. The rate of muscle gain slowly diminishes as you continue workout. So many people who try to body build quit early on. The same concept is true in web development. Once those early victories come by, Newer ones are hard to come by. Learning new things becomes more cumbersome and the drive turns into frustration.",
      "This is why documenting your progress over long periods of time is very important. My suggestion would be to make a new portfolio website every 3 months or so. It establishes a sense of achievement that gives you the drive to go forward. ",
      " Stagnation is the greatest contributor to apathy. Once you feel like you are stuck, the goal starts to feel less achievable and ultimately less meaningful. When new developers get stuck on a certain concept, the tendency is to not go forward until that problem is overcome. But this in many cases hinders the learning curve greatly for most. It is always better to move on and come back later if you stumble. Sadly, most developers fall into the all-or-nothing mindset and quit shortly after.",
      "My biggest suggestion would be to write down the things you get stuck on in a list and spend an hour a day searching for answers on either stackoverflow.com or reddit's developer threads. Another advice is to improve your early projects as soon as you learn new concepts.  Your first and second projects don’t have to be the worst on your portfolio. Constantly build on them and improve the code and UI. But make sure to keep the old versions saved in some fashion for you to look back on.  This will help you see your progress and visualize how much closer you are in getting to your goal.",
    ],
    pictures: [1, 0, 2],
    code: [],
    picCaption: [
      "My first Portfolio website",
      "My Second Portfolio website",
      "My Current Portfolio website",
    ],
    videos: [],
    comments: [],
    mapper: [0, 1, 2],
    feature: "https://www.youtube.com/watch?v=ueXjGMrmn8k",
    status: true,
  },

  {
    id: 12,
    title: "programming-buddies",
    icons: [],
    pic: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    topic: "Educational",
    link: "",
    header: "Maximizing the benefits of programming buddies",
    abstract:
      "Partnerships can be a useful way to speed up your learning if done right, but a waste of time if done wrong",
    abstractLG:
      "Partnerships can be a useful way to speed up your learning if done right, but a waste of time if done wrong, Partnerships can be a useful way to speed up your learning if done right, but a waste of time if done wrong",
    abstractSM: "Programming buddies are a powerful tool when done right",
    created: "April 2022",
    updated: "August 2022",
    readTime: "4",
    headers: [
      "",
      "1. Get on the same page early on",
      "2. Be willing to leave if your partner is not serious.",
      "3. Understand that joint projects are good for learning but bad for a portfolio.",
      "4. Outline your objectives.",
    ],
    paragraphs: [
      "One of the things most new developers hear about is the idea of finding a coding partner. Another new developer to help with accountability and learning. This is a good idea in theory but often tends to fall well short of expectations. So, if you are interested in finding a coding partner here are some things I think you should take into consideration if you want to maximize the benefits.",
      "This is a partnership, not a mentor/mentee situation (which is a separate thing on its own). While you guys can certainly help each other out, the purpose is an equal partnership to achieve both of your goals.",
      "This is something most new learners don’t understand (or struggle to accept). Most people are not serious about learning to program. The vast majority will quit within the first few weeks and never type another line of code again. If your partner is slacking off, not responding to messages, or constantly delaying tasks, it’s a sign they fall into this category. It’s not your job to motivate them. Cut your losses and move on.",
      "This is another common misconception. Joint projects are sometimes seen as killing two birds with one stone. They allow you to finish a project quicker, while at the same time displaying you can work in a team environment. While this is true to some extent, the reality Is most recruiters don’t know how much of a project you did personally. Even if you write down what you did specifically, there will always be some skepticism. To mitigate this possibility, have your own copy of the repository and make sure you can duplicate anything your partner did.",
      "Make sure you write down a list of both your long and short-term goals when it comes to this partnership. Having quantifiable, time-limited, objectives is the only way to measure whether this is helping you improve or not. Do not settle for vague or general goals as there no way to evaluate your progress in that case.",
      "Ultimately partnerships are a useful tool when done properly. But being in a situation that does not foster improvement will hinder your growth in the long term. So, make sure you do it right to avoid wasting time",
    ],
    pictures: [],
    code: [],
    picCaption: [],
    videos: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4, 5],
    feature: "https://www.youtube.com/watch?v=EqzUcMzfV1w&t=2624s",
    status: true,
  },
  {
    id: 13,
    title: "PHP-undervalued",
    icons: [],
    pic: "https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg",
    topic: "General",
    link: "",
    header: "Why PHP and WordPress are neglected by many developers",
    abstract:
      "Mastering PHP opens up so many opportunities in the small business and freelance space. Yet so many new developers ignore it",
    abstractLG: "",
    abstractSM: "Learning PHP opens many doors that are often overlooked",
    created: "April 2022",
    updated: "August 2022",
    readTime: "3",
    headers: [],
    paragraphs: [
      "I recently started learning PHP to add as a second language to my set of skills. Part of it had to do with my frustrations of dealing with WordPress and the limitations it imposes on developers. This includes all the paid themes, builder tools, and plugins. I knew that with my programming experience, I should be able to easily customize much of the things without having to be charged for simple features. As I delve into PHP, I realized that it should have been the first language I learned.",
      "This proposition may not be ideal for everyone. But for me at least, I wish I got into PHP before learning Express or React. The way I approached Express when I first learned it was to try and do things it was not really meant for. After understanding the basics, instead of heading on to learn React and the MERN stack, I decided to use Express to render the front-end pages of my website on top of acting as the server. It was fun and I learned a lot about server-side rendering and authentication.",
      "But what I was doing in Express was much easier within a MERN stack setup. And it was already done and perfected in the WordPress/Laravel paradigm. If I had spent that time teaching myself server-side rendering using any other language, it would have been much more beneficial. At least in the context of small business freelancing. Most businesses want a WordPress website, so most web design companies cater to that. If you have PHP/Laravel experience that adds to the WordPress capability, NodeJS and Express do not(Generally speaking). Despite this, there is a tendency within th developer community to look down on PHP",
      "PHP and Laravel are like an ace when you go to small web design companies. Not only can you work within the WordPress ecosystem, you can create and build your own custom themes and plugins. This can save many companies both time and money in the long run. Many new developers never see this reality because most WebDev YouTubers encourage them to learn the MERN stack and insinuate PHP as a dying tech. That is not to say the Express and NodeJS have no value, far from it in fact. It’s just that their use without a front-end framework like ReactJS, Vue, or Angular is rare in the industry.",
      "Newcomers should focus more on learning PHP and Laravel unless they are certain that the demand for the MERN stack is high where they live. Ultimately everyone’s situation is unique, but in my case I would have loved to learn PHP much sooner.",
    ],
    pictures: [null, null, 6],
    picCaption: [],
    videos: [],
    code: [],
    comments: [],
    mapper: [0, 1, 2, 3, 4],
    feature: "https://www.youtube.com/watch?v=GeJDaXuc5NY",
    status: true,
  },
];

module.exports = { articles };
