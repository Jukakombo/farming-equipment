import { v4 as uuidv4 } from "uuid";
import excavator from "../assets/excavator.jpg";
import forklift from "../assets/forklift.png";
import bomblifter from "../assets/bomblift.jpg";
import compaction from "../assets/compaction.webp";
import roller from "../assets/yellow-road-roller-belongs-fulton-260nw-2007562172.webp";
import scissor from "../assets/Scissor-Lift-Useful-Information-1.jpeg";
export const navlinks = [
  {
    _id: "jkcnkcnbj455E3",
    link: "Home",
  },
  {
    _id: "jkcnkcnbjxx455E3",
    link: "Equipment List",
  },
  {
    _id: "jkcnkcssqnbj455E3",
    link: "About Us",
  },
  {
    _id: "jkcnkcnbj45sqs5E3",
    link: "Our Projects",
  },
  {
    _id: "jkcnkcnsscbj455E3",
    link: "Contact Us",
  },
];
export const categories = [
  {
    _id: uuidv4(),
    image: excavator,
    category: "Ecavators",
  },
  {
    _id: uuidv4(),
    image: scissor,
    category: "Scissor Lift",
  },
  {
    _id: uuidv4(),
    image: bomblifter,
    category: "Bomblift",
  },
  {
    _id: uuidv4(),
    image: forklift,
    category: "Forklift",
  },
  {
    _id: uuidv4(),
    image: compaction,
    category: "Compactions",
  },
  {
    _id: uuidv4(),
    image: roller,
    category: "Roller",
  },
];
