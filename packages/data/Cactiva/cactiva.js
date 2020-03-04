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
    title: 'Canvas Editor',
    description:
      'This editor manage your design pages from inside the editor and also be able to edit the component such drag and drop component, add, edit, delete,move or copy the component',
  },
  {
    id: 2,
    icon: 'flaticon-briefing',
    title: 'Props Editor',
    description:
      'We provide some tools to manage any state or props, so you can use it eficiency.',
  },
  {
    id: 3,
    icon: 'flaticon-creative',
    title: 'Preview',
    description:
      'This feature allows you to preview your html files, live. And also to preview your CSS editing.',
  },
  {
    id: 4,
    icon: 'flaticon-creative',
    title: 'Generator',
    description:
      'We provide simple Generate Functionality such as React features (Components ,Virtual DOM, etc)',
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
        text: "Images & B-roll"
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
      },
      {
        url: "#",
        text: "Unwanted software policy"
      }
    ]
  }
];

export const Service = [
 {
    id: 1,
    icon: 'flaticon-briefing',
    title: 'Canvas Editor',
    description:
      'This editor manage your design pages from inside the editor and also be able to edit the component such drag and drop component, add, edit, delete,move or copy the component',
    },
  {
    id: 2,
    icon: 'flaticon-trophy',
    title: 'Props Editor',
    description:
      'We provide some tools to manage any state or props, so you can use it eficiency.',
   },
  {
    id: 3,
    icon: 'flaticon-atom',
    title: 'Preview',
    description:
      'This feature allows you to preview your html files, live. And also to preview your CSS editing.',
  },
  {
    id: 4,
    icon: "flaticon-ruler",
    title: 'Generator',
    description:
      'We provide simple Generate Functionality such as React features (Components ,Virtual DOM, etc)',
  },
  {
    id: 5,
    icon: "flaticon-creative",
    title: "Eksport and import workspace",
    description:
      "You can generate your workspace into other kind of types."
  },
  {
    id: 6,
    icon: "flaticon-conversation",
    title: "Demo and tutorial",
    description:
      "..."
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
    path: "#service_section",
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
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "30+ Webmaster Tools"
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
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "30+ Webmaster Tools"
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
        content: "1,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "eCommerce Store "
      },
      {
        content: "30+ Webmaster Tools"
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
        content: "Unlimited secure storage"
      },
      {
        content: "2,000s of Templates Ready"
      },
      {
        content: "Blog Tools"
      },
      {
        content: "24/7 phone support"
      },
      {
        content: "50+ Webmaster Tools"
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
