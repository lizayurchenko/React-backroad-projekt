import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const iconLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://x.com/?lang=ru",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];

export const serviceIconsLinks = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tourCards = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "best of java",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "explore hong kong",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2024",
    title: "kenya highlights",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    days: 20,
    price: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: "august 26th, 2024",
    title: "Safari Adventure",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "africa",
    days: 4,
    price: 2100,
  },
  {
    id: 6,
    image: tour6,
    date: "december 5th, 2024",
    title: "Explore Egypt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Egypt",
    days: 10,
    price: 3200,
  },
];
