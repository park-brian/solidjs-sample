import { lazy } from "solid-js";

import Home from "./home.js";
const About = () => import("./about.js");
const CountUp = () => import("../components/countup.js");

const routes = [
  {
    path: "",
    title: "Home",
    component: Home,
  },
  {
    path: "/about",
    title: "About",
    component: lazy(About),
  },
  {
    path: "/counting",
    title: "Counting",
    component: lazy(CountUp),
  },
];

export default routes;
