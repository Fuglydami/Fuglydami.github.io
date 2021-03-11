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
    'Damilare Oyedeji is a Software Developer who loves to play with different tech stacks and convert Ui/Ux designs to web pages.',
}

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  github: 'https://github.com/Fuglydami',
  linkden: 'https://www.linkedin.com/in/DamilareOyedeji/',
  twitter: 'https://twitter.com/blackkolanut',
}

const bannerSection = {
  username: '< D.O />',
  bannerHeading: 'Damilare.',
  bannerTagLine: emoji(
    'A Front-End Developer😀, Who loves to play with different stacks and love to give breath to Ui/Ux designs.'
  ),

  bannerAvatar: 'avatar.jpg',
  resumeLink:
    'https://drive.google.com/file/d/16WWEda154rD2XpxUVD-X6dN-DKSOG1dg/view?usp=sharing',
}

const aboutSection = {
  admin: '@Damilare',
  firstCommand: ' node about.js',
  about: `Damilare is a talented, self-motivated and enthusiatic Front-End Developer who is passionate about writing clean and structured code. I am also committed to both personal and professional growth learning from any situation in which i find myself. Backend and AI technology are stacks i'm very interested in learning. I am currently getting acquainted with more backend technologies while strengthening my ReactJs library skills.

  Research, where i can apply my skills and work with enthusiastic team members, is what i want. As long as i collaborate with people who build on my interest in the field of technology, I can overcome every hurdle
    
    Cheers, you now know about me`,
}

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    'Excitable towards giving breath to different mockup PSDs and web designs using Html / Css, ReactJs and bootstrap.',
    'Love to Build Scalable web and native application using ReactJS with the several stacks, packages, and services.',
    'Also Passionate towards other stuff like Back-End development (Node, expressJs and postgres)',
  ],

  // Recommended : don't add more than 12 skills.
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

const experienceSection = {
  experiences: [
    {
      experienceTitle: 'Technical Support Engineer',
      experienceDesc:
        'Install and configure computer hardware operating systems and applications, monitor and maintain computer systems and networks. Talked to staff or clients through a series of actions, either face-to-face or over the phone to help set up systems or resolve issues.',
      experienceDuration: '06/18-12/19',
      experienceTags: [
        '-Fiberdel System LTD | ',
        'Full time | ',
        '1year and half',
      ],
    },
    {
      experienceTitle: 'Frontend Developer',
      experienceDesc:
        'Translated designs and wireframes into high-quality code and wrote application interface code via javaScript following React.js workflows.',
      experienceDuration: '01/20-02/21',
      experienceTags: ['-Netpacks LTD | ', 'Full time | ', '1year'],
    },
  ],
}

const openSourceSection = {
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: 'Fuglydami',
  numberOfRepos: 4,
}

const contactSection = {
  contactTagline: `Have a question or wanna make something together?
Start by saying hi.`,

  contactList: ['+2347031203859', 'damoye81@gmail.com'],
}

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  experienceSection,
  contactSection,
}
