import { Menu } from "../models/menu";

const menu: Menu[] = [{
  group: "Your Account",
  children:[
    {
      name: "Home",
      icon: "fa fa-house",
      link: "/"
    },
    {
      name: "Transfer",
      icon: "fa fa-right-left",
      link: "transfer"
    },
    {
      name: "History",
      icon: "fa fa-chart-simple",
      link: "history"
    },
    {
      name: "Profile",
      icon: "fa-regular fa-circle-user",
      link: "profile"
    },
    {
      name: "Settings",
      icon: "fa fa-gear",
      link: "settings"
    },
    {
      name: "Billing",
      icon: "fa-regular fa-credit-card",
      link: "billing"
    },
    
  ]
},
{
  group: "Support",
  children: [
    {
      name: "FAQ",
      icon: "fa-regular fa-circle-question",
      link: "faq"
    },
    {
      name: "Help",
      icon: "fa-regular fa-circle-question",
      link: "help"
    }
  ]
}
];

export default menu;