export type Player = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  subtitle: string;
  theme: {
    primary: string;
    secondary: string;
    headerGrad1: string;
    headerGrad2: string;
    bgHighlight: string;
    bgHighlight2: string;
    borderHighlight: string;
    accentBg: string;
    accentBorder: string;
  };
  intro: string;
  stats: { label: string; value: string }[];
  currentClub: string;
  position: string;
  jerseyNumber: number;
  status: string;
  achievements: string[];
  careerPhase: { title: string; subtitle: string; points: string[] };
  impact: string[];
  videos: { title: string; url: string }[];
  defaultImage: string;
  iconSvg: string;
};

export const players: Record<string, Player> = {
  messi: {
    id: "messi",
    name: "LEOMESSI10",
    firstName: "LIONEL",
    lastName: "MESSI",
    subtitle: "The Magician of Argentine Football",
    theme: {
      primary: "#f5576c",
      secondary: "#f093fb",
      headerGrad1: "#1a472a",
      headerGrad2: "#2d5a3d",
      bgHighlight: "rgba(240, 147, 251, 0.1)",
      bgHighlight2: "rgba(245, 87, 108, 0.1)",
      borderHighlight: "#f5576c",
      accentBg: "#fff9e6",
      accentBorder: "#ffe4b5",
    },
    intro: "Lionel Andrés Messi (born June 24, 1987) is an Argentine professional footballer, widely considered one of the greatest footballers of all time. With unmatched dribbling skills, vision, and goal-scoring ability, Messi has redefined what it means to be a complete footballer across three decades of elite competition.",
    stats: [
      { value: "807+", label: "Career Goals" },
      { value: "188", label: "International Caps" },
      { value: "8", label: "Ballon d'Or Awards" },
      { value: "4", label: "Champions League Titles" },
    ],
    currentClub: "Inter Miami CF (MLS)",
    position: "Forward / Midfielder",
    jerseyNumber: 10,
    status: "2022 FIFA World Cup Winner - Leading Argentina to Glory",
    achievements: [
      "Ballon d'Or: Record 8 awards (2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023)",
      "UEFA Champions League: 4 titles (All with FC Barcelona)",
      "FIFA World Cup: 2022 Winner - Leading Argentina to Glory in Qatar",
      "Copa America: 2 titles (2021, 2024)",
      "Olympic Gold: 2008 Beijing Olympics Gold Medal",
      "La Liga Titles: 10 championships (mostly with Barcelona)",
    ],
    careerPhase: {
      title: "🇺🇸 The Miami Era (2023–Present)",
      subtitle: "Inter Miami's New Avatar",
      points: [
        "MLS Impact: Already becoming the most dominant force in the league with exceptional performances",
        "Attendance Records: Record-breaking crowds at Inter Miami games due to Messi's presence",
        "Legacy Extension: Continuing to play at the highest level and inspire a new generation of footballers in North America",
      ],
    },
    impact: [
      "Global Icon: Considered the face of modern football worldwide with unparalleled global influence",
      "Social Media King: One of the most followed athletes on social media platforms",
      "Humanitarian: Established the Leo Messi Foundation to help underprivileged children in education and sports",
      "World Cup Hero: Led Argentina to their first World Cup victory in 36 years (2022), ending a national drought and cementing his legacy as all-time great",
    ],
    videos: [
      { title: "Messi Highlight Reel", url: "https://www.youtube.com/embed/zHVUkjQNHC4?si=K_eSyDHq2EFnzh6N" },
      { title: "Amazing Skills & Tricks", url: "https://www.youtube.com/embed/zHVUkjQNHC4?si=K_eSyDHq2EFnzh6N" },
      { title: "World Cup 2022 Highlights", url: "https://www.youtube.com/embed/zHVUkjQNHC4?si=K_eSyDHq2EFnzh6N" },
    ],
    defaultImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/300px-Lionel_Messi_20180626.jpg",
    iconSvg: "PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMxRUE0RjciLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHg9IjIwIiB5PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CjxwYXRoIGQ9Ik0xMiAxMkM5IDkgOSA3IDkgNHYxNmM4IDggMTYgOCA4IDh6Ii8+Cjwvc3ZnPgo8L3N2Zz4="
  },
  ronaldo: {
    id: "ronaldo",
    name: "CR7",
    firstName: "CRISTIANO",
    lastName: "RONALDO",
    subtitle: "The Greatest Footballer of Our Time",
    theme: {
      primary: "#667eea",
      secondary: "#764ba2",
      headerGrad1: "#1a1a2e",
      headerGrad2: "#16213e",
      bgHighlight: "rgba(102, 126, 234, 0.1)",
      bgHighlight2: "rgba(118, 75, 162, 0.1)",
      borderHighlight: "#667eea",
      accentBg: "#fff9e6",
      accentBorder: "#ffe4b5",
    },
    intro: "Cristiano Ronaldo (born February 5, 1985) is a Portuguese forward, widely regarded as one of the greatest footballers in history. With a record-breaking career spanning three decades, he continues to redefine what's possible in professional football at the highest level.",
    stats: [
      { value: "967+", label: "Career Goals" },
      { value: "226", label: "International Caps" },
      { value: "5", label: "Ballon d'Or Awards" },
      { value: "5", label: "Champions League Titles" },
    ],
    currentClub: "Al-Nassr FC (Saudi Pro League)",
    position: "Forward / Striker",
    jerseyNumber: 7,
    status: "Most-capped male player in football history",
    achievements: [
      "Ballon d'Or: 5 awards (2008, 2013, 2014, 2016, 2017)",
      "UEFA Champions League: 5 titles (1x Man Utd, 4x Real Madrid)",
      "European Championships: Euro 2016 Winner",
      "European Golden Shoes: 4 record-breaking scoring seasons",
      "All-Time Goals Record: Over 960 official career goals",
    ],
    careerPhase: {
      title: "🇸🇦 The Saudi Era (2023–Present)",
      subtitle: "Al-Nassr's Game-Changer",
      points: [
        "This Season: 23 goals in 23 appearances - the league's most clinical finisher",
        "Recent Milestone: Celebrated his 100th Saudi Pro League game with a signature brace against Al-Najma",
        "The Road to 1,000: Just 33 goals away from becoming the first player in history to score 1,000 official career goals!",
      ],
    },
    impact: [
      "The Billionaire Club: In 2025, he became the first active footballer to surpass a $1.4 billion net worth",
      "Digital King: First person to reach 1 billion followers across all social media platforms combined",
      "Final Chapter: The 2026 FIFA World Cup will be his final international tournament, marking a historic sixth World Cup appearance",
    ],
    videos: [
      { title: "Best Goals Compilation", url: "https://www.youtube.com/embed/mmeLCAP74KA?si=lTbVl878hC-IJ1cO" },
      { title: "Amazing Skills & Tricks", url: "https://www.youtube.com/embed/mhfJSTJTnXU" },
      { title: "Recent Goals in Saudi", url: "https://www.youtube.com/embed/VQU7zVK9_oE" },
    ],
    defaultImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/300px-Cristiano_Ronaldo_2018.jpg",
    iconSvg: "PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiM3RjE5MTkiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHg9IjIwIiB5PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CjxwYXRoIGQ9Ik0xMiAxMkM5IDkgOSA3IDkgNHYxNmM4IDggMTYgOCA4IDh6Ii8+Cjwvc3ZnPgo8L3N2Zz4="
  },
};
