export const MenuItems = [
  {
    title : "Home",
    url : "/",
    cName : "nav-links",
  },
  {
    title : "About",
    cName : "nav-links",
    submenu: [
      {
        title : "Chapters",
        url : "/about/chapters",
        cName : "sub-links",
      },
      {
        title : "Beta Chapter",
        url : "/about/betachapter",
        cName : "sub-links",
      }
    ],
  },
  {
    title : "Sisters",
    cName : "nav-links",
    submenu: [
      {
        title : "Cabinet",
        url : "/sisters/cabinet",
        cName : "sub-links",
      },
      {
        title : "Active House",
        url : "/sisters/activehouse",
        cName : "sub-links",
      }
    ],
  },
  {
    title : "Philanthropy",
    url : "/philanthropy",
    cName : "nav-links",
  },
  {
    title : "Rush",
    cName : "nav-links",
    submenu: [
      {
        title : "Meet our P-Mom",
        url : "/rush/pmom",
        cName : "sub-links",
      },
      {
        title : "Rush Week",
        url : "/rush/rushweek",
        cName : "sub-links",
      },
      {
        title : "I'm Interested",
        url : "https://docs.google.com/forms/d/e/1FAIpQLSfzGuAwJ70zVeIr7-_A7q2BHdMIkL5hnHU4FH1DDXsc4Ss0wg/viewform",
        cName : "sub-links",
        targ : "_blank"
      },
      {
        title : "FAQs",
        url : "/rush/faq",
        cName : "sub-links",
      }
    ],
  },
  {
    title : "More",
    cName : "nav-links",
    submenu: [
      {
        title : "Alumni",
        url : "/alumni",
        cName : "sub-links",
      }
    ],
  },
]