
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
    name: "FinanceWise",
    title: "Financial Advisor",
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
    id: "mental-health",
    name: "MindWise",
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
    id: "financial-planner",
    name: "WealthWise",
    title: "Financial Planner",
    description: "I specialize in long-term financial planning, wealth building, and securing your financial future.",
    expertise: [
      "Wealth building",
      "Estate planning",
      "Investment portfolios",
      "Financial independence",
      "Risk management"
    ],
    avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on comprehensive financial planning strategies, wealth management principles, and long-term investment approaches.",
    color: "from-purple-400 to-indigo-300"
  },
  {
    id: "mental-wellness",
    name: "WellnessWise",
    title: "Mental Wellness Coach",
    description: "I focus on holistic mental wellness, helping you build resilience and maintain emotional balance.",
    expertise: [
      "Resilience building",
      "Emotional regulation",
      "Stress reduction",
      "Sleep improvement",
      "Positive psychology"
    ],
    avatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been trained on the latest research in positive psychology, resilience training, and holistic approaches to mental wellness.",
    color: "from-orange-400 to-amber-300"
  },
  {
    id: "financial-education",
    name: "EduWise",
    title: "Financial Educator",
    description: "I help you understand financial concepts and develop financial literacy for better decision-making.",
    expertise: [
      "Financial literacy",
      "Market fundamentals",
      "Economic principles",
      "Personal finance basics",
      "Financial terminology"
    ],
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I've been designed to break down complex financial concepts into easy-to-understand explanations, helping you build your financial knowledge.",
    color: "from-pink-400 to-rose-300"
  }
];

export const getChatbotById = (id: string): Chatbot | undefined => {
  return chatbots.find(chatbot => chatbot.id === id);
};
