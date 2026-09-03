export interface Pet {
  id: number;
  name: string;
  breed: string;
  age?: string;
  image: string;
}

export const pets: Pet[] = [
  { id: 1, name: "Yuki",  breed: "Scottish Fold", age: "5 Months (Kitten)", image: "/images/yuki.png" },
  { id: 2, name: "Snow",  breed: "Scottish Fold", age: "6 Months (Kitten)", image: "/images/snow.png" },
  { id: 3, name: "Haru",  breed: "Scottish Fold", image: "/images/haru1.png" },
  { id: 4, name: "Lara",  breed: "Scottish Fold", image: "/images/lara.png" },
  { id: 5, name: "Chewy", breed: "Scottish Fold", image: "/images/chewy.png" },
  { id: 6, name: "Patch", breed: "Scottish Fold", image: "/images/patch.png" },
  { id: 7, name: "Nidra", breed: "Scottish Fold", image: "/images/nidra.png" },
  { id: 8, name: "Kyomie",breed: "Scottish Fold", image: "/images/kyomie.png" },
  { id: 9, name: "Iris",  breed: "Scottish Fold", image: "/images/iris.png" },
];

export const categories = [
  { label: "Cat",       image: "/images/cat.png" },
  { label: "Guinea Pig",image: "/images/guinea-pig.png" },
  { label: "Dog",       image: "/images/dog.png" },
  { label: "Rabbit",    image: "/images/rabbit.png" },
];

export const popularFriends = [
  { name: "Kaki",   breed: "", image: "/images/kaki.png" },
  { name: "Yanna",  breed: "", image: "/images/yanna.png" },
  { name: "Lebron", breed: "", image: "/images/lebron.png" },
  { name: "Haru",   breed: "", image: "/images/haru1.png" },
  { name: "Mimi",   breed: "", image: "/images/mimi.png" },
];