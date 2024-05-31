const initialSelectorArray = [
  { id: 1, name: "Albert Einstein", type: "person", emoji: "👨‍🔬" },
  { id: 2, name: "Platypus", type: "species", emoji: "🦦" },
  { id: 3, name: "Existentialism", type: "concept", emoji: "💭" },
  { id: 4, name: "Simulation Hypothesis", type: "proposed idea", emoji: "💻" },
  { id: 5, name: "July 4, 1776", type: "date", emoji: "🎆" },
  {
    id: 6,
    name: "The Industrial Revolution",
    type: "historical event",
    emoji: "🏭",
  },
  {
    id: 7,
    name: "The Great Barrier Reef",
    type: "geographical connection",
    emoji: "🐠",
  },
  { id: 8, name: "Gravity", type: "scientific phenomenon", emoji: "🍎" },
  { id: 9, name: "The Printing Press", type: "invention", emoji: "🖨️" },
  { id: 10, name: "The Starry Night", type: "work of art", emoji: "🌌" },
  { id: 11, name: "The Odyssey", type: "literary reference", emoji: "📜" },
  { id: 12, name: "Zeus", type: "mythological element", emoji: "⚡" },
  {
    id: 13,
    name: "Japanese Tea Ceremony",
    type: "social/cultural practice",
    emoji: "🍵",
  },
  { id: 14, name: "Onomatopoeia", type: "linguistic connection", emoji: "💬" },
  { id: 15, name: "Supply and Demand", type: "economic concept", emoji: "📈" },
  { id: 16, name: "Democracy", type: "political notion", emoji: "🗳️" },
  {
    id: 17,
    name: "Quantum Mechanics",
    type: "academic discipline",
    emoji: "⚛️",
  },
  { id: 18, name: "Alzheimer's Disease", type: "health topic", emoji: "🧠" },
  { id: 19, name: "Global Warming", type: "environmental issue", emoji: "🌡️" },
  { id: 20, name: "The Olympic Games", type: "sports reference", emoji: "🏅" },
  { id: 21, name: "Marie Curie", type: "person", emoji: "👩‍🔬" },
  { id: 22, name: "Giant Sequoia", type: "species", emoji: "🌲" },
  { id: 23, name: "Utilitarianism", type: "concept", emoji: "⚖️" },
  { id: 24, name: "The Fermi Paradox", type: "proposed idea", emoji: "👽" },
  { id: 25, name: "December 25", type: "date", emoji: "🎄" },
  { id: 26, name: "The Moon Landing", type: "historical event", emoji: "🚀" },
  {
    id: 27,
    name: "The Amazon Rainforest",
    type: "geographical connection",
    emoji: "🌴",
  },
  {
    id: 28,
    name: "Photosynthesis",
    type: "scientific phenomenon",
    emoji: "🌿",
  },
  { id: 29, name: "The Internet", type: "invention", emoji: "🌐" },
  { id: 30, name: "The Mona Lisa", type: "work of art", emoji: "🖼️" },
  {
    id: 31,
    name: "To Kill a Mockingbird",
    type: "literary reference",
    emoji: "🐦",
  },
  { id: 32, name: "Athena", type: "mythological element", emoji: "🦉" },
  {
    id: 33,
    name: "Dia de los Muertos",
    type: "social/cultural practice",
    emoji: "💀",
  },
  { id: 34, name: "Palindrome", type: "linguistic connection", emoji: "🔁" },
  { id: 35, name: "Cryptocurrency", type: "economic concept", emoji: "₿" },
  { id: 36, name: "Communism", type: "political notion", emoji: "☭" },
  { id: 37, name: "Neuroscience", type: "academic discipline", emoji: "🧠" },
  { id: 38, name: "Yoga", type: "health topic", emoji: "🧘" },
  { id: 39, name: "Deforestation", type: "environmental issue", emoji: "🪓" },
  { id: 40, name: "The FIFA World Cup", type: "sports reference", emoji: "⚽" },
  { id: 41, name: "Nelson Mandela", type: "person", emoji: "✊🏿" },
  { id: 42, name: "Honeybee", type: "species", emoji: "🐝" },
  { id: 43, name: "Nihilism", type: "concept", emoji: "🕳️" },
  { id: 44, name: "The Singularity", type: "proposed idea", emoji: "🤖" },
  { id: 45, name: "January 1, 2000", type: "date", emoji: "🎉" },
  {
    id: 46,
    name: "The French Revolution",
    type: "historical event",
    emoji: "🇫🇷",
  },
  {
    id: 47,
    name: "The Grand Canyon",
    type: "geographical connection",
    emoji: "🏜️",
  },
  { id: 48, name: "Evolution", type: "scientific phenomenon", emoji: "🐒" },
  { id: 49, name: "The Wheel", type: "invention", emoji: "🎡" },
  { id: 50, name: "The Thinker", type: "work of art", emoji: "🤔" },
  {
    id: 51,
    name: "Pride and Prejudice",
    type: "literary reference",
    emoji: "💒",
  },
  { id: 52, name: "Anubis", type: "mythological element", emoji: "🐕" },
  { id: 53, name: "Ramadan", type: "social/cultural practice", emoji: "🌙" },
  { id: 54, name: "Idiom", type: "linguistic connection", emoji: "🗣️" },
  { id: 55, name: "Globalization", type: "economic concept", emoji: "🌍" },
  { id: 56, name: "Monarchy", type: "political notion", emoji: "👑" },
  { id: 57, name: "Anthropology", type: "academic discipline", emoji: "👥" },
  { id: 58, name: "Meditation", type: "health topic", emoji: "🧘" },
  {
    id: 59,
    name: "Renewable Energy",
    type: "environmental issue",
    emoji: "🌞",
  },
  { id: 60, name: "The Super Bowl", type: "sports reference", emoji: "🏈" },
  { id: 61, name: "William Shakespeare", type: "person", emoji: "🎭" },
  { id: 62, name: "Giant Panda", type: "species", emoji: "🐼" },
  { id: 63, name: "Determinism", type: "concept", emoji: "🎲" },
  { id: 64, name: "The Multiverse Theory", type: "proposed idea", emoji: "🌌" },
  { id: 65, name: "February 14", type: "date", emoji: "💝" },
  { id: 66, name: "The Renaissance", type: "historical event", emoji: "🎨" },
  {
    id: 67,
    name: "The Sahara Desert",
    type: "geographical connection",
    emoji: "🏜️",
  },
  {
    id: 68,
    name: "Plate Tectonics",
    type: "scientific phenomenon",
    emoji: "🌋",
  },
  { id: 69, name: "The Compass", type: "invention", emoji: "🧭" },
  {
    id: 70,
    name: "The Persistence of Memory",
    type: "work of art",
    emoji: "🕰️",
  },
  { id: 71, name: "Moby-Dick", type: "literary reference", emoji: "🐳" },
  { id: 72, name: "Thor", type: "mythological element", emoji: "🔨" },
  { id: 73, name: "Haka Dance", type: "social/cultural practice", emoji: "🕺" },
  { id: 74, name: "Alliteration", type: "linguistic connection", emoji: "🔤" },
  {
    id: 75,
    name: "Keynesian Economics",
    type: "economic concept",
    emoji: "💰",
  },
  { id: 76, name: "Federalism", type: "political notion", emoji: "🏛️" },
  { id: 77, name: "Astrophysics", type: "academic discipline", emoji: "🔭" },
  { id: 78, name: "Acupuncture", type: "health topic", emoji: "💉" },
  {
    id: 79,
    name: "Ocean Acidification",
    type: "environmental issue",
    emoji: "🌊",
  },
  { id: 80, name: "The Tour de France", type: "sports reference", emoji: "🚴" },
  { id: 81, name: "Frida Kahlo", type: "person", emoji: "👩‍🎨" },
  { id: 82, name: "Komodo Dragon", type: "species", emoji: "🐉" },
  { id: 83, name: "Absurdism", type: "concept", emoji: "🤪" },
  { id: 84, name: "The Gaia Hypothesis", type: "proposed idea", emoji: "🌍" },
  { id: 85, name: "October 31", type: "date", emoji: "🎃" },
  {
    id: 86,
    name: "The Scientific Revolution",
    type: "historical event",
    emoji: "🔬",
  },
  {
    id: 87,
    name: "The Great Wall of China",
    type: "geographical connection",
    emoji: "🧱",
  },
  {
    id: 88,
    name: "Quantum Entanglement",
    type: "scientific phenomenon",
    emoji: "🪢",
  },
  { id: 89, name: "The Telephone", type: "invention", emoji: "📞" },
  {
    id: 90,
    name: "The Girl with a Pearl Earring",
    type: "work of art",
    emoji: "👩",
  },
  {
    id: 91,
    name: "One Hundred Years of Solitude",
    type: "literary reference",
    emoji: "📖",
  },
  { id: 92, name: "Quetzalcoatl", type: "mythological element", emoji: "🐍" },
  { id: 93, name: "Feng Shui", type: "social/cultural practice", emoji: "🧘" },
  { id: 94, name: "Oxymoron", type: "linguistic connection", emoji: "🙃" },
  { id: 95, name: "Microcredit", type: "economic concept", emoji: "💸" },
  { id: 96, name: "Totalitarianism", type: "political notion", emoji: "👮" },
  { id: 97, name: "Epidemiology", type: "academic discipline", emoji: "🦠" },
  { id: 98, name: "Veganism", type: "health topic", emoji: "🥗" },
  {
    id: 99,
    name: "Sustainable Development",
    type: "environmental issue",
    emoji: "♻️",
  },
  {
    id: 100,
    name: "The Wimbledon Championships",
    type: "sports reference",
    emoji: "🎾",
  },
];

export const getRandomEntities = (count) => {
  const shuffled = [...initialSelectorArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
