export interface Pet {
  id: number;
  name: string;
  breed: string;
  age?: string;
  image: string;
  category: string;
  personality: string[];
}

export const pets: Pet[] = [
  // ===== CATS (21) =====
  { id: 1, name: "Yuki",   breed: "Scottish Fold", age: "5 Months (Kitten)", image: "/images/pets/yuki.png",   category: "Cat", personality: ["Friendly", "Playful"] },
  { id: 2, name: "Snow",   breed: "Scottish Fold", age: "6 Months (Kitten)", image: "/images/pets/snow.png",   category: "Cat", personality: ["Quiet", "Shy"] },
  { id: 3, name: "Haru",   breed: "Scottish Fold", image: "/images/pets/haru1.png",  category: "Cat", personality: ["Obedient", "Loyal"] },
  { id: 4, name: "Lara",   breed: "Scottish Fold", image: "/images/pets/lara.png",   category: "Cat", personality: ["Playful", "Friendly"] },
  { id: 5, name: "Chewy",  breed: "Scottish Fold", image: "/images/pets/chewy.png",  category: "Cat", personality: ["Quiet", "Loyal"] },
  { id: 6, name: "Patch",  breed: "Scottish Fold", image: "/images/pets/patch.png",  category: "Cat", personality: ["Shy", "Obedient"] },
  { id: 7, name: "Nidra",  breed: "Scottish Fold", image: "/images/pets/nidra.png",  category: "Cat", personality: ["Friendly", "Loyal"] },
  { id: 8, name: "Kyomie", breed: "Scottish Fold", image: "/images/pets/kyomie.png", category: "Cat", personality: ["Playful", "Obedient"] },
  { id: 9, name: "Iris",   breed: "Scottish Fold", image: "/images/pets/iris.png",   category: "Cat", personality: ["Quiet", "Friendly"] },
  { id: 10, name: "Nala",     breed: "Persian", image: "/images/pets/cat10.png", category: "Cat", personality: ["Quiet", "Loyal"] },
  { id: 11, name: "Willow",   breed: "Persian", image: "/images/pets/cat11.png", category: "Cat", personality: ["Friendly", "Shy"] },
  { id: 12, name: "Tofu",     breed: "Persian", image: "/images/pets/cat12.png", category: "Cat", personality: ["Obedient", "Quiet"] },
  { id: 13, name: "Amber",    breed: "Persian", image: "/images/pets/cat13.png", category: "Cat", personality: ["Playful", "Friendly"] },
  { id: 14, name: "Sable",    breed: "Siamese", image: "/images/pets/cat14.png", category: "Cat", personality: ["Friendly", "Playful"] },
  { id: 15, name: "Jasmine",  breed: "Siamese", image: "/images/pets/cat15.png", category: "Cat", personality: ["Loyal", "Obedient"] },
  { id: 16, name: "Rumi",     breed: "Siamese", image: "/images/pets/cat16.png", category: "Cat", personality: ["Quiet", "Shy"] },
  { id: 17, name: "Whiskers", breed: "Domestic Shorthair Kitten", image: "/images/pets/cat17.png", category: "Cat", personality: ["Playful", "Friendly"] },
  { id: 18, name: "Shadow",   breed: "Domestic Shorthair Kitten", image: "/images/pets/cat18.png", category: "Cat", personality: ["Shy", "Quiet"] },
  { id: 19, name: "Marble",   breed: "Domestic Shorthair Kitten", image: "/images/pets/cat19.png", category: "Cat", personality: ["Obedient", "Loyal"] },
  { id: 20, name: "Kiko",     breed: "Japanese Bobtail", image: "/images/pets/cat20.png", category: "Cat", personality: ["Friendly", "Playful"] },
  { id: 21, name: "Ziggy",    breed: "Sphynx", image: "/images/pets/cat21.png", category: "Cat", personality: ["Quiet", "Loyal"] },

  // ===== DOGS (28) =====
  { id: 22, name: "Rocky",  breed: "Labrador Retriever", image: "/images/pets/rocky.png", category: "Dog", personality: ["Friendly", "Playful"] },
  { id: 23, name: "Bella",  breed: "Golden Retriever",   image: "/images/pets/bella.png", category: "Dog", personality: ["Friendly", "Loyal"] },
  { id: 24, name: "Max",    breed: "Poodle",             image: "/images/pets/max.png",   category: "Dog", personality: ["Obedient", "Playful"] },
  { id: 25, name: "Coco",   breed: "Beagle",             image: "/images/pets/coco.png",  category: "Dog", personality: ["Playful", "Loyal"] },
  { id: 26, name: "Duke",   breed: "Bulldog",            image: "/images/pets/duke.png",  category: "Dog", personality: ["Quiet", "Loyal"] },
  { id: 27, name: "Milo",   breed: "Shih Tzu",           image: "/images/pets/dog6.png",  category: "Dog", personality: ["Friendly", "Shy"] },
  { id: 28, name: "Zoe",    breed: "Labrador Retriever", image: "/images/pets/dog7.png",  category: "Dog", personality: ["Obedient", "Friendly"] },
  { id: 29, name: "Buddy",  breed: "Golden Retriever",   image: "/images/pets/dog8.png",  category: "Dog", personality: ["Playful", "Friendly"] },
  { id: 30, name: "Luna",   breed: "Poodle",             image: "/images/pets/dog9.png",  category: "Dog", personality: ["Quiet", "Obedient"] },
  { id: 31, name: "Cooper", breed: "Labrador Retriever", image: "/images/pets/dog10.png", category: "Dog", personality: ["Friendly", "Loyal"] },
  { id: 32, name: "Bear",   breed: "Labrador Retriever", image: "/images/pets/dog11.png", category: "Dog", personality: ["Playful", "Obedient"] },
  { id: 33, name: "Ranger", breed: "Labrador Retriever", image: "/images/pets/dog12.png", category: "Dog", personality: ["Friendly", "Playful"] },
  { id: 34, name: "Sunny",  breed: "Golden Retriever",   image: "/images/pets/dog13.png", category: "Dog", personality: ["Friendly", "Loyal"] },
  { id: 35, name: "Maple",  breed: "Golden Retriever",   image: "/images/pets/dog14.png", category: "Dog", personality: ["Quiet", "Friendly"] },
  { id: 36, name: "Honey",  breed: "Golden Retriever",   image: "/images/pets/dog15.png", category: "Dog", personality: ["Playful", "Obedient"] },
  { id: 37, name: "Gigi",   breed: "Poodle",             image: "/images/pets/dog16.png", category: "Dog", personality: ["Friendly", "Playful"] },
  { id: 38, name: "Fifi",   breed: "Poodle",             image: "/images/pets/dog17.png", category: "Dog", personality: ["Obedient", "Quiet"] },
  { id: 39, name: "Chico",  breed: "Poodle",             image: "/images/pets/dog18.png", category: "Dog", personality: ["Playful", "Loyal"] },
  { id: 40, name: "Snoopy", breed: "Beagle",             image: "/images/pets/dog19.png", category: "Dog", personality: ["Friendly", "Playful"] },
  { id: 41, name: "Waffles",breed: "Beagle",             image: "/images/pets/dog20.png", category: "Dog", personality: ["Loyal", "Obedient"] },
  { id: 42, name: "Cleo",   breed: "Beagle",             image: "/images/pets/dog21.png", category: "Dog", personality: ["Quiet", "Shy"] },
  { id: 43, name: "Benny",  breed: "Beagle",             image: "/images/pets/dog22.png", category: "Dog", personality: ["Playful", "Friendly"] },
  { id: 44, name: "Tank",   breed: "Bulldog",            image: "/images/pets/dog23.png", category: "Dog", personality: ["Quiet", "Loyal"] },
  { id: 45, name: "Moose",  breed: "Bulldog",            image: "/images/pets/dog24.png", category: "Dog", personality: ["Obedient", "Shy"] },
  { id: 46, name: "Winston",breed: "Bulldog",            image: "/images/pets/dog25.png", category: "Dog", personality: ["Friendly", "Loyal"] },
  { id: 47, name: "Pippin", breed: "Shih Tzu",           image: "/images/pets/dog26.png", category: "Dog", personality: ["Friendly", "Quiet"] },
  { id: 48, name: "Mochi",  breed: "Shih Tzu",           image: "/images/pets/dog27.png", category: "Dog", personality: ["Shy", "Loyal"] },
  { id: 49, name: "Button", breed: "Shih Tzu",           image: "/images/pets/dog28.png", category: "Dog", personality: ["Playful", "Obedient"] },

  // ===== GUINEA PIGS (12) =====
  { id: 50, name: "Peanut",     breed: "American",   image: "/images/pets/guinea1.png", category: "Guinea Pig", personality: ["Friendly", "Quiet"] },
  { id: 51, name: "Waffle",     breed: "Abyssinian", image: "/images/pets/guinea2.png", category: "Guinea Pig", personality: ["Playful", "Shy"] },
  { id: 52, name: "Biscuit",    breed: "Peruvian",   image: "/images/pets/guinea3.png", category: "Guinea Pig", personality: ["Obedient", "Quiet"] },
  { id: 53, name: "Clover",     breed: "Silkie",     image: "/images/pets/guinea4.png", category: "Guinea Pig", personality: ["Friendly", "Loyal"] },
  { id: 54, name: "Pepper",     breed: "Teddy",      image: "/images/pets/guinea5.png", category: "Guinea Pig", personality: ["Shy", "Quiet"] },
  { id: 55, name: "Ginger",     breed: "Texel",      image: "/images/pets/guinea6.png", category: "Guinea Pig", personality: ["Playful", "Friendly"] },
  { id: 56, name: "Hazel",      breed: "American",   image: "/images/pets/guinea7.png", category: "Guinea Pig", personality: ["Obedient", "Loyal"] },
  { id: 57, name: "Cocoa",      breed: "Abyssinian", image: "/images/pets/guinea8.png", category: "Guinea Pig", personality: ["Friendly", "Playful"] },
  { id: 58, name: "Nutmeg",     breed: "Peruvian",   image: "/images/pets/guinea9.png", category: "Guinea Pig", personality: ["Quiet", "Shy"] },
  { id: 59, name: "Fluffy",     breed: "Silkie",     image: "/images/pets/guinea10.png", category: "Guinea Pig", personality: ["Playful", "Loyal"] },
  { id: 60, name: "Marshmallow",breed: "Teddy",      image: "/images/pets/guinea11.png", category: "Guinea Pig", personality: ["Friendly", "Obedient"] },
  { id: 61, name: "Pumpkin",    breed: "Texel",      image: "/images/pets/guinea12.png", category: "Guinea Pig", personality: ["Quiet", "Playful"] },

  // ===== RABBITS (12) =====
  { id: 62, name: "Thumper",  breed: "Holland Lop",     image: "/images/pets/rabbit1.png", category: "Rabbit", personality: ["Friendly", "Playful"] },
  { id: 63, name: "Clover",   breed: "Netherland Dwarf",image: "/images/pets/rabbit2.png", category: "Rabbit", personality: ["Shy", "Quiet"] },
  { id: 64, name: "Oreo",     breed: "Rex",             image: "/images/pets/rabbit3.png", category: "Rabbit", personality: ["Obedient", "Loyal"] },
  { id: 65, name: "Daisy",    breed: "Lionhead",        image: "/images/pets/rabbit4.png", category: "Rabbit", personality: ["Playful", "Friendly"] },
  { id: 66, name: "Pancake",  breed: "Dutch",           image: "/images/pets/rabbit5.png", category: "Rabbit", personality: ["Quiet", "Obedient"] },
  { id: 67, name: "Mocha",    breed: "English Angora",  image: "/images/pets/rabbit6.png", category: "Rabbit", personality: ["Shy", "Friendly"] },
  { id: 68, name: "Buttons",  breed: "Holland Lop",     image: "/images/pets/rabbit7.png", category: "Rabbit", personality: ["Playful", "Loyal"] },
  { id: 69, name: "Snowball", breed: "Netherland Dwarf",image: "/images/pets/rabbit8.png", category: "Rabbit", personality: ["Friendly", "Obedient"] },
  { id: 70, name: "Basil",    breed: "Rex",             image: "/images/pets/rabbit9.png", category: "Rabbit", personality: ["Quiet", "Playful"] },
  { id: 71, name: "Cinnamon", breed: "Lionhead",        image: "/images/pets/rabbit10.png", category: "Rabbit", personality: ["Playful", "Friendly"] },
  { id: 72, name: "Bramble",  breed: "Dutch",           image: "/images/pets/rabbit11.png", category: "Rabbit", personality: ["Quiet", "Loyal"] },
  { id: 73, name: "Frosty",   breed: "English Angora",  image: "/images/pets/rabbit12.png", category: "Rabbit", personality: ["Shy", "Obedient"] },
];

export const categories = [
  { label: "Cat",       image: "/images/categories/cat.png" },
  { label: "Guinea Pig",image: "/images/categories/guinea-pig.png" },
  { label: "Dog",       image: "/images/categories/dog.png" },
  { label: "Rabbit",    image: "/images/categories/rabbit.png" },
];

export const breedsByCategory: Record<string, { label: string; count: number }[]> = {
  Cat: [
    { label: "Persian", count: 4 },
    { label: "Siamese", count: 3 },
    { label: "Scottish Fold", count: 9 },
    { label: "Domestic Shorthair Kitten", count: 3 },
    { label: "Japanese Bobtail", count: 1 },
    { label: "Sphynx", count: 1 },
  ],
  Dog: [
    { label: "Labrador Retriever", count: 5 },
    { label: "Golden Retriever", count: 5 },
    { label: "Poodle", count: 5 },
    { label: "Beagle", count: 5 },
    { label: "Bulldog", count: 4 },
    { label: "Shih Tzu", count: 4 },
  ],
  "Guinea Pig": [
    { label: "American", count: 2 },
    { label: "Abyssinian", count: 2 },
    { label: "Peruvian", count: 2 },
    { label: "Silkie", count: 2 },
    { label: "Teddy", count: 2 },
    { label: "Texel", count: 2 },
  ],
  Rabbit: [
    { label: "Holland Lop", count: 2 },
    { label: "Netherland Dwarf", count: 2 },
    { label: "Rex", count: 2 },
    { label: "Lionhead", count: 2 },
    { label: "Dutch", count: 2 },
    { label: "English Angora", count: 2 },
  ],
};

export const popularFriends = [
  { name: "Yuki",   breed: "Scottish Fold",     image: "/images/pets/yuki.png" },
  { name: "Rocky",  breed: "Labrador Retriever", image: "/images/pets/rocky.png" },
  { name: "Peanut", breed: "American",           image: "/images/pets/guinea1.png" },
  { name: "Thumper",breed: "Holland Lop",        image: "/images/pets/rabbit1.png" },
  { name: "Bella",  breed: "Golden Retriever",   image: "/images/pets/bella.png" },
];