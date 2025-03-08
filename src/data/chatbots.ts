
export interface Chatbot {
  id: string;
  name: string;
  title: string;
  description: string;
  expertise: string[];
  avatar: string;
  background: string;
  color: string;
}

export const chatbots: Chatbot[] = [
  {
    id: "financial-expert",
    name: "FinGPT",
    title: "Financial Expert",
    description: "I can help you understand investments, budgeting, and financial planning to reach your monetary goals.",
    expertise: [
      "Investment strategies",
      "Retirement planning",
      "Tax optimization",
      "Budgeting",
      "Debt management"
    ],
    avatar: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on extensive financial data, market trends, and personal finance strategies to provide accurate and personalized financial advice.",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: "career-advisor",
    name: "CareerGPT",
    title: "Career Advisor",
    description: "I can guide you through career decisions, resume building, and professional development opportunities.",
    expertise: [
      "Career transitions",
      "Resume optimization",
      "Job interview preparation",
      "Skill development",
      "Networking strategies"
    ],
    avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on career development resources, industry trends, and professional guidance to help you navigate your professional journey.",
    color: "from-purple-400 to-indigo-300"
  },
  {
    id: "mental-health",
    name: "MindGPT",
    title: "Mental Health Advisor",
    description: "I can provide support, coping strategies, and resources for mental wellbeing and personal growth.",
    expertise: [
      "Stress management",
      "Anxiety coping techniques",
      "Mindfulness practices",
      "Emotional intelligence",
      "Work-life balance"
    ],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on psychological research, therapeutic approaches, and mental health resources to provide supportive and informative guidance.",
    color: "from-green-400 to-emerald-300"
  },
  {
    id: "fitness-coach",
    name: "FitGPT",
    title: "Fitness Coach",
    description: "I can help you develop personalized fitness plans, nutrition advice, and wellness strategies.",
    expertise: [
      "Workout programming",
      "Nutrition planning",
      "Recovery strategies",
      "Habit formation",
      "Health tracking"
    ],
    avatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on exercise science, nutritional research, and behavioral psychology to help you achieve your fitness and wellness goals.",
    color: "from-orange-400 to-amber-300"
  },
  {
    id: "tech-advisor",
    name: "TechGPT",
    title: "Technology Advisor",
    description: "I can provide guidance on technology decisions, digital transformation, and tech troubleshooting.",
    expertise: [
      "Digital transformation",
      "Software recommendations",
      "Tech troubleshooting",
      "Digital privacy",
      "Emerging technologies"
    ],
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on technology trends, digital solutions, and technical documentation to provide clear and actionable technology advice.",
    color: "from-pink-400 to-rose-300"
  }
];

export const getChatbotById = (id: string): Chatbot | undefined => {
  return chatbots.find(chatbot => chatbot.id === id);
};
