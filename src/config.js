module.exports = {
  siteTitle: 'Rohan Nirmal',
  siteDescription:
    'Rohan is a Data Engineer at TCS, who loves learning new things.',
  siteUrl: 'https://rohannirmalextraprojects.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rohan Nirmal',
  location: 'Gujarat, India',
  email: 'rohannirmal999@gmail.com',
  github: 'https://github.com/Rony109',
  twitterHandle: 'https://twitter.com/RohanNirmal3',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Rony109',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rohan-nirmal-44185519b/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rohan.4real_/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/RohanNirmal3',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
