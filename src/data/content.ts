export interface LearningModule {
  id: string;
  title: string;
  description: string;
  iconName: string;
  topics: string[];
  level: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ACADEMY_INFO = {
  name: "SRR Academy",
  tagline: "Learn • Improve • Achieve",
  subtitle: "Chess Online Tutor",
  coachName: "Kishore A",
  fideId: "33316775",
  coachingLevel: "Beginner to Intermediate",
  whatsappNumber: "+91 6374819340",
  whatsappCleanNumber: "916374819340",
  whatsappUrl: "https://wa.me/916374819340",
};

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: "beginner-fundamentals",
    title: "Beginner Fundamentals",
    description: "Learn chess rules, piece movement, checkmate patterns, and basic principles.",
    iconName: "Compass",
    level: "Beginner",
    topics: [
      "Board setup & piece movement rules",
      "Check, checkmate & stalemate conditions",
      "Basic checkmate patterns (Rook & Queen mates)",
      "Understanding piece values & algebraic notation"
    ]
  },
  {
    id: "opening-principles",
    title: "Opening Principles",
    description: "Understand how to start a game properly, control the center, and develop pieces effectively.",
    iconName: "ShieldAlert",
    level: "Beginner - Intermediate",
    topics: [
      "The 3 core opening rules (Center, Development, King Safety)",
      "Castling timing & pawn structure safety",
      "Avoiding early queen traps and fast checkmates",
      "Building a solid personal opening repertoire"
    ]
  },
  {
    id: "middlegame-strategy",
    title: "Middlegame Strategy",
    description: "Improve positional understanding, tactical awareness, planning, and decision-making.",
    iconName: "Target",
    level: "Intermediate",
    topics: [
      "Creating concrete plans based on board position",
      "Controlling open files, diagonals & outposts",
      "Attacking weak pawns & king defenses",
      "Improving worst-placed pieces during play"
    ]
  },
  {
    id: "endgame-fundamentals",
    title: "Endgame Fundamentals",
    description: "Learn essential king and pawn endgames, piece coordination, and winning techniques.",
    iconName: "Crown",
    level: "Beginner - Intermediate",
    topics: [
      "King activation & opposition techniques",
      "Pawn promotion and square rule calculations",
      "Rook endgames & Lucena/Philidor positions",
      "Converting winning material advantages"
    ]
  },
  {
    id: "tactical-training",
    title: "Tactical Training",
    description: "Practice forks, pins, skewers, discovered attacks, and other important tactical patterns.",
    iconName: "Zap",
    level: "All Levels",
    topics: [
      "Knight forks, double attacks & absolute pins",
      "Skewers, deflection & removing the defender",
      "Discovered attacks & double check tactics",
      "Pattern recognition through targeted puzzles"
    ]
  },
  {
    id: "game-analysis",
    title: "Game Analysis",
    description: "Review your own games to identify mistakes and understand how to improve.",
    iconName: "BarChart3",
    level: "All Levels",
    topics: [
      "Detailed review of student online games",
      "Identifying tactical blunders & positional mistakes",
      "Learning critical decision points during matches",
      "Actionable feedback for rapid rating growth"
    ]
  }
];

export const WHY_CHOOSE_US: FeatureCard[] = [
  {
    id: "personalized-attention",
    title: "Personalized Attention",
    description: "Tailored lesson plans designed around each individual student's learning speed, strengths, and specific chess goals.",
    iconName: "UserCheck"
  },
  {
    id: "beginner-friendly",
    title: "Beginner-Friendly Teaching",
    description: "Clear, patient, and step-by-step guidance that makes learning chess enjoyable and easy to grasp for new players.",
    iconName: "Heart"
  },
  {
    id: "practical-analysis",
    title: "Practical Game Analysis",
    description: "Real game breakdowns to highlight mistake patterns and give actionable advice for your next competitive matches.",
    iconName: "Search"
  },
  {
    id: "interactive-classes",
    title: "Interactive Online Classes",
    description: "Live 1-on-1 virtual sessions featuring digital chess boards, interactive puzzle solving, and real-time feedback.",
    iconName: "Video"
  },
  {
    id: "structured-progress",
    title: "Structured Learning Progress",
    description: "A methodical curriculum taking you from fundamental board awareness to advanced tactical calculation.",
    iconName: "TrendingUp"
  },
  {
    id: "supportive-environment",
    title: "Friendly & Supportive Environment",
    description: "An encouraging environment where mistakes are celebrated as learning opportunities and curiosity is nurtured.",
    iconName: "Smile"
  }
];

export const BENEFIT_POINTS = [
  { title: "Logical Thinking", desc: "Formulate step-by-step reasoning and calculate sequential moves." },
  { title: "Concentration", desc: "Sustain deep focus for extended periods during intense tasks." },
  { title: "Problem Solving", desc: "Analyze complex positions and find optimal solutions under pressure." },
  { title: "Decision Making", desc: "Evaluate risks versus rewards before executing decisive actions." },
  { title: "Patience", desc: "Learn to build up position calmly without making impulsive blunders." },
  { title: "Strategic Thinking", desc: "Plan long-term goals while anticipating opponent counterplay." }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Attend a Demo Session",
    subtitle: "Experience the teaching style and understand the learning approach.",
    description: "Get a hands-on preview of how Coach Kishore A conducts interactive online sessions and evaluates student chess level."
  },
  {
    step: "02",
    title: "Decide Your Learning Goals",
    subtitle: "Discuss your chess level, strengths, weaknesses, and improvement goals.",
    description: "We map out a customized training roadmap focusing on your specific improvement areas—whether openings, tactics, or endgames."
  },
  {
    step: "03",
    title: "Join Monthly Coaching",
    subtitle: "Enroll in the regular paid sessions and begin structured chess training.",
    description: "Start your 12-session monthly program with regular 2-hour classes, game reviews, and continuous guidance."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who can join SRR Academy?",
    answer: "Anyone from beginner to intermediate level can join SRR Academy. Whether your child is just learning how pieces move or you are an intermediate player looking to improve your tactics and endgame calculation, our coaching is tailored for you."
  },
  {
    question: "Are classes conducted online?",
    answer: "Yes, all coaching sessions are conducted online using interactive chess platforms and live video conferencing, allowing students to learn conveniently from the comfort of their home anywhere in the world."
  },
  {
    question: "How long is each session?",
    answer: "Each coaching session lasts 2 hours, providing ample time for concept explanation, interactive practice, puzzle solving, and student game analysis."
  },
  {
    question: "How many sessions are included monthly?",
    answer: "The monthly coaching plan includes 12 sessions per month (totaling 24 hours of comprehensive coaching each month)."
  },
  {
    question: "How can I enquire about joining?",
    answer: "You can easily enquire about fees, schedule slots, and enrollment by contacting Coach Kishore A directly through WhatsApp at +91 6374819340 or by clicking any of the WhatsApp buttons on this website."
  },
  {
    question: "Is a demo session available?",
    answer: "Yes, demo sessions have already been conducted. Interested students and parents can contact the academy via WhatsApp for further details on upcoming demo availability or direct enrollment."
  }
];
