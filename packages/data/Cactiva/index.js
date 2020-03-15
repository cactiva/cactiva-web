import Client1 from "@assets/image/saas/testimonial/client-1.jpg";
import Client2 from "@assets/image/agency/client/denny.png";

export const Faq = [
  {
    id: 1,
    expend: true,
    title: "How to contact with Customer Service?",
    description:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. "
  },
  {
    id: 2,
    title: "App installation failed, how to update system information?",
    description:
      "Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . "
  },
  {
    id: 3,
    title: "Website reponse taking time, how to improve?",
    description:
      "At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
  },
  {
    id: 4,
    title: "New update fixed all bug and issues?",
    description:
      "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us ."
  },
  {
    id: 4,
    title: "New update fixed all bug and issues?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];

export const Features = [
  {
    id: 1,
    icon: 'flaticon-flask',
    title: 'Faster Startup',
    description:
      'Optimize your build speed with easy startup. You can start to build one page in the one layout',
  },
  {
    id: 2,
    icon: 'flaticon-briefing',
    title: 'Simpler Builder',
    description:
      'Very Simple and intuitive. So you have to spend less time in paperwork and make an enchanting design in simple ways.',
  },
  {
    id: 3,
    icon: 'flaticon-creative',
    title: 'Increase your productivity',
    description:
      'All of the features and tools will help you to spend less time in paperwork and increase your work productivity.',
  },
];

export const Footer_Data = [
  {
    title: "About Us",
    menuItems: [
      {
        url: "#",
        text: "Support Center"
      },
      {
        url: "#",
        text: "About Us"
      },
      {
        url: "#",
        text: "Copyright"
      }
    ]
  },
  {
    title: "Our Information",
    menuItems: [      
      {
        url: "#",
        text: "Privacy Policy"
      },
      {
        url: "#",
        text: "Terms & Conditions"
      }
    ]
  },
  {
    title: "My Account",
    menuItems: [
      {
        url: "#",
        text: "Social media directories"
      },
      {
        url: "#",
        text: "Permissions"
      }
    ]
  },
  {
    title: "Policy",
    menuItems: [
      {
        url: "#",
        text: "Application security"
      },
      {
        url: "#",
        text: "Software principles"
      }
    ]
  }
];


export const Service = [
  {
     id: 1,
     icon: 'flaticon-briefing',
     title: 'Single Source of Truth',
     description:
       'A decent app not only needs a good design but also a working code, so we rely on the single source of truth which is based on the structure of code itself thus the end result will perform and display exactly as the way you intended them to be, minimizing bugs and becoming more productive.',
     },
   {
     id: 2,
     icon: 'flaticon-atom',
     title: 'Synced edit and preview',
     description:
       'This is our major feature, with synched edit you can either edit directly from the source code or from the visual preview which we provide in the IDE. Here you can highlight which line of code that corresponds to a certain preview and vice versa. Any change you make will be displayed directly in real time so the app’s design and the code will always be in sync. ',
    },
   {
     id: 3,
     icon: 'flaticon-creative',
     title: 'No unnecessary Assumptions and fancy file extension',
     description:
       'Feel free to decide any structure of your code because we don’t make our own assumption in any of your react projects. Everything will stay the same as the way you start the project so you can do the editing freely and more confidently. ',
   },
   {
     id: 4,
     icon: "flaticon-ruler",
     title: 'Supporting various react project and operating system',
     description:
       'Cactiva provides you with various react project editors which accommodates a lot of needs such as CRA, React Native, NextJS etc. We also have a broader range of use in various Operating Systems such as Windows, Linux and OSX. ',
   }
 ];
export const Timeline = [
  {
    title: "Wireframing for project",
    description:
      "We respect our customer opinions and deals with them with perfect wireframing."
  },
  {
    title: "UI/UX for project",
    description:
      "We provide the best UI/UX Design by following the latest trends of the market ."
  },
  {
    title: "Negotiation about project",
    description:
      "After the negotiation is done , We start to build the project with latest technology ."
  }
];

export const Testimonial = [
  {
    id: 1,
    name: "Michal Andry",
    designation: "Ceo of Invission Co.",
    comment:
      "Love to work with this designer in every our future project to ensure we are going to build best prototyping features.",
    avatar_url: Client1,
    social_icon: "flaticon-instagram"
  },
  {
    id: 2,
    name: "Roman Ul Oman",
    designation: "Co-founder of QatarDiaries",
    comment:
      "Impressed with master class support of the team and really look forward for the future. A true passionate team.",
    avatar_url: Client2,
    social_icon: "flaticon-twitter-logo-silhouette"
  }
];

export const MENU_ITEMS = [
  {
    label: "Home",
    path: "#banner_section",
    offset: "70"
  },
  {
    label: "About Us",
    path: "#partner_section",
    offset: "70"
  },
  {
    label: "Feature",
    path: "#feature_section",
    offset: "70"
  },
  {
    label: "Pricing",
    path: "#pricing_section",
    offset: "70"
  },
  {
    label: "Signup",
    path: "#signup_section",
    offset: "70"
  }
  // {
  //   label: 'FAQ',
  //   path: '#faq_section',
  //   offset: '70',
  // },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: "Basic Account",
    description: "Free package to build website ",
    price: "$ 0",
    priceLabel: "Only for first month",
    buttonLabel: "CREATE FREE ACCOUNT",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "Props Editor"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "Generator project"
      }
    ]
  },
  {
    name: "Pro Account",
    description: "For professional one who need to build website ",
    price: "$ 49",
    priceLabel: "Per year & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "Props Editor"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "Generator project"
      }
    ]
  }
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: "Basic Account",
    description: "For a single client or team who need to build website ",
    price: "$0",
    priceLabel: "Only for first month",
    buttonLabel: "CREATE FREE ACCOUNT",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "Props Editor"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "Generator project"
      }
    ]
  },
  {
    name: "Business Account",
    description: "For Small teams or group who need to build website ",
    price: "$6.00",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "Props Editor"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "Generator project"
      }
    ]
  },
  {
    name: "Premium Account",
    description: "For Large teams or group who need to build website ",
    price: "$9.99",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder"
      },
      {
        content: "3,000s of Templates Ready"
      },
      {
        content: "Advanced branding"
      },
      {
        content: "Knowledge base support"
      },
      {
        content: "80+ Webmaster Tools"
      }
    ]
  }
];
