import emoji from 'react-easy-emoji'

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
  title: 'Damilare Oyedeji',
  // Note : consider leaving null if you dont have any head icon
  description:
    'An impecabble Front-End Developer that has a good eye for designs.',
}

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: 'https://github.com/Fuglydami',
  linkden: 'https://www.linkedin.com/in/damilare-oyedeji-229a16110/',
  twitter: 'https://twitter.com/blackkolanut',
}

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: '< D.O />',
  bannerHeading: 'Damilare.',
  bannerTagLine: emoji(
    'A Front-End Developer😀, Who loves to play with different stacks and love to give breath to Ui/Ux designs.'
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: 'avatar.jpeg.jpg',
  resumeLink:
    'https://drive.google.com/file/d/1C9wylYtAU9NbZaBwmQ6uGmNWmWS8_I6F/view?usp=sharing',
}

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: '@Damilare',
  firstCommand: ' node start about.js',
  about: `Damilare is a creative, self-motivated and passionate Front-End Developer, passionate about writing clean and organized code, and keen on personal and professional development.

    I'm very ethusiatic about Back-End technologies and AI also.
    
    While improving my ReactJS library skill and currently getting myself familiar with more back-end technologies, I'm open to and currently looking for opportunities where i can contribute my skills and collaborate with team on ambitious projects.
    
    Cheers, you now know about me`,
}

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    'Excitable towards giving breath to different mockup PSDs and web designs using Html / Css, ReactJs and bootstrap.',
    'Love to Build Scalable web and native application using ReactJS with the several stacks, packages, and services.',
    'Also Passionate towards other stuff like Back-End development (Node, expressJs and postgres)',
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      fontAwesomeClassname: 'fab fa-github',
    },
    {
      fontAwesomeClassname: 'fab fa-git',
    },
    {
      fontAwesomeClassname: 'fab fa-windows',
    },
    {
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      fontAwesomeClassname: 'fas fa-server',
    },
  ],
}

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/

const openSourceSection = {
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: 'Fuglydami',
  //Note :  no of open source projects you want to show.
  numberOfRepos: 4,
}

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline: `Have a question or wanna make something together?
Start by saying hi.`,
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ['07031203859', 'damoye81@gmail.com'],
}

// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  contactSection,
}
