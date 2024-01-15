import { v4 as uuidv4 } from "uuid";

type carrouselImage = {
  id: number;
  value: string;
  key: string;
};

type NavBar = {
  key: string;
  id: number;
  content: string;
  href: string;
};

export const images: carrouselImage[] = [
  { id: 1, value: "/assets/img/product-1.jpg", key: uuidv4() },
  { id: 2, value: "/assets/img/product-2.jpg", key: uuidv4() },
  { id: 3, value: "/assets/img/product-3.jpg", key: uuidv4() },
  { id: 4, value: "/assets/img/product-4.jpg", key: uuidv4() },
];

export const namesItems: NavBar[] = [
  { content: "Collection", href: "#", id: 1, key: uuidv4() },
  { content: "Men", href: "#", id: 2, key: uuidv4() },
  { content: "Women", href: "#", id: 3, key: uuidv4() },
  { content: "About", href: "#", id: 4, key: uuidv4() },
  { content: "Contact", href: "#", id: 5, key: uuidv4() },
];

export const description: string =
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";
