import emoji from "react-easy-emoji";
import comfySloth from "./assets/imgs/comfy-sloth.png";
import centralAdmin from "./assets/imgs/central-admin.png";
import githubSearch from "./assets/imgs/github-search.png";
import chatApplication from "./assets/imgs/chat-application.png";
/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Damilare Oyedeji - Software Developer",
  // Note : consider leaving null if you dont have any head icon
  description:
    "Damilare Oyedeji is a talented, self-motivated and enthusiatic Frontend Developer who is passionate about writing clean and structured code. He is also committed to both personal and professional growth learning from an situation in which he find himself",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  github: "https://github.com/Fuglydami",
  linkden: "https://www.linkedin.com/in/DamilareOyedeji/",
  twitter: "https://twitter.com/blackkolanut",
};

const bannerSection = {
  username: "< D.O />",
  bannerHeading: "Damilare.",
  bannerTagLine: emoji(
    "A Front-End Developer😀, Who loves to play with different stacks and love to give breath to Ui/Ux designs."
  ),

  bannerAvatar: "avatar.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1QG0kBjln0DpdudTpe91oUvtAd-s7VKPp/view?usp=sharing",
};

const aboutSection = {
  admin: "@Damilare",
  firstCommand: " node about.js",
  about: `Damilare is a talented, self-motivated and enthusiatic Front-End Developer who is passionate about writing clean and structured code. I am also committed to both personal and professional growth learning from any situation in which i find myself. Backend and AI technology are stacks i'm very interested in learning. I am currently getting acquainted with more backend technologies while strengthening my ReactJs library skills.

  Research, where i can apply my skills and work with enthusiastic team members, is what i want. As long as i collaborate with people who build on my interest in the field of technology, I can overcome every hurdle
    
    Cheers, you now know about me`,
};

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html5 / CSS3, Styled-Components, ReactJs and tailwindCSS.",
    "Love to Build Scalable web and native application using ReactJS with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like Back-End development (Node, expressJs and MongoDB)",
  ],

  // Recommended : don't add more than 12 skills.
  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      fontAwesomeClassname: "fab fa-github",
    },
    {
      fontAwesomeClassname: "fab fa-git",
    },
    {
      fontAwesomeClassname: "fab fa-windows",
    },
    {
      fontAwesomeClassname: "fas fa-database",
    },
    {
      fontAwesomeClassname: "fas fa-server",
    },
  ],
};

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Software Developer",
      experienceDesc: `Built an Admin dashboard for the subsidiaries of First Bank of Nigeria to provide support for it mobile app.
      Portal was entirely built with Reactjs. Implemented Json web Token for the authentication, Used the AES.js package to encrypt the request payload being pasted to the endpoint..`,

      experienceDuration: "07/21 - present",

      experienceTags: ["-Firstbank Nigeria | ", "Full time | ", "present"],
    },
    {
      experienceTitle: "Frontend Engineer",
      experienceDesc: `My role is to write and style the front-end components that meet the requirements of our mock-ups and fulfill our user stories. I also monitor and process pull requests for production deployments. 
      Technologies used: ReactJs, JavaScript, ES6, TailwindCSS, CSS3, HTML5, Styled-Components`,

      experienceDuration: "03/21 - 07/21",

      experienceTags: [
        "-Digiscript|Tech Solutions | ",
        "Internship | ",
        "4 months",
      ],
    },
    {
      experienceTitle: "Frontend Developer",
      experienceDesc:
        "Translated designs and wireframes into high-quality code and wrote application interface code via javaScript following React.js workflows.",
      experienceDuration: "01/20 - 02/21",
      experienceTags: ["-Netpacks LTD | ", "Full time | ", "1year"],
    },
    {
      experienceTitle: "Technical Support Engineer",
      experienceDesc:
        "Install and configure computer hardware operating systems and applications, monitor and maintain computer systems and networks. Talked to staff or clients through a series of actions, either face-to-face or over the phone to help set up systems or resolve issues.",
      experienceDuration: "06/18 - 12/19",
      experienceTags: [
        "-Fiberdel System LTD | ",
        "Full time | ",
        "1year and half",
      ],
    },
  ],
};

const openSourceSection = {
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "Fuglydami",
  numberOfRepos: 5,
};

const projectsSection = {
  projects: [
    {
      projectName: "Central Admin Dashboard",
      projectBio:
        "Admin dashboard for the subsidiaries of First Bank of Nigeria (Guinea, Gambia, Sierra Leone, Dr Congo) to provide support for it mobile apps",

      projectUrl: "https://subcentralportal.azurewebsites.net/",
      projectImage: centralAdmin,

      stackList: [
        "Reactjs",
        "Json Web Token",
        "Aesjs",
        "Styled-Components",
        "Framer Motion",
      ],
    },
    {
      projectName: "comfy-sloth Ecommerce Website",
      projectBio:
        "A react ecommerce website with stripe payment and authentication/authorization features",

      projectUrl: "https://comfy-sloth-ecommerce-website.netlify.app/",
      projectImage: comfySloth,
      stackList: ["React", "Auth0", "Stripe-api", "Netlify Function"],
    },
    {
      projectName: "Github Users Search",
      projectBio:
        "A react web-app that consumes GitHub API to request for GitHub user's data. it included error page, authorization/authentication and charts",

      projectUrl: "https://get-github-profiles.netlify.app/login",
      projectImage: githubSearch,

      stackList: [
        "React",
        "Github Api",
        "Styled-components",
        "auth0",
        "fusion-charts",
      ],
    },

    {
      projectName: "Chat Application",
      projectBio: "A real time chat application using chat engine api.",

      projectUrl: "https://chat-dami.netlify.app/",
      projectImage: chatApplication,

      stackList: ["ReactJs", "Chat-Engine", "Context-api"],
    },
  ],
};

const contactSection = {
  contactTagline: `Have a question or wanna make something together?
Start by saying hi.`,

  contactList: ["+2347031203859", "damoye81@gmail.com"],
};

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  projectsSection,
  skillsSection,
  openSourceSection,
  experienceSection,
  contactSection,
};
