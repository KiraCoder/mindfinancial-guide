
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
    title: "AI Financial Advisor",
    description: "I am an AI-powered financial advisor trained to provide expert guidance on investments, budgeting, and financial planning. Whether you're looking to grow your wealth, optimize your taxes, or manage debt effectively, I am here to help you make informed financial decisions.",
    expertise: [
      "Investment strategies",
      "Retirement planning",
      "Tax optimization",
      "Budgeting",
      "Debt management"
    ],
    avatar: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I have been trained on extensive financial datasets, including global market trends, tax regulations, and personal finance strategies. By leveraging insights from economic research and financial modeling, I provide accurate and actionable advice tailored to individual financial goals.",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: "mental-health",
    name: "MindWise",
    title: "AI Mental Health Advisor",
    description: "I am an AI-driven mental health advisor designed to support you with coping strategies, mindfulness practices, and resources for personal growth. My goal is to help you navigate stress, anxiety, and emotional challenges with confidence and resilience.",
    expertise: [
      "Stress management",
      "Anxiety coping techniques",
      "Mindfulness practices",
      "Emotional intelligence",
      "Work-life balance"
    ],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "Trained on psychological research, therapeutic methodologies, and evidence-based wellness practices, I provide guidance rooted in cognitive behavioral therapy (CBT), mindfulness techniques, and emotional regulation strategies to support mental well-being.",
    color: "from-green-400 to-emerald-300"
  },
  {
    id: "financial-planner",
    name: "WealthWise",
    title: "AI Financial Planner",
    description: "I specialize in long-term financial planning, wealth-building strategies, and securing your financial future. Whether you're planning for retirement, estate management, or financial independence, I offer data-driven insights to help you achieve your goals.",
    expertise: [
      "Wealth building",
      "Estate planning",
      "Investment portfolios",
      "Financial independence",
      "Risk management"
    ],
    avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "With a foundation in financial modeling, wealth management principles, and economic forecasting, I provide in-depth analysis and structured planning strategies to help individuals and families secure long-term financial success.",
    color: "from-purple-400 to-indigo-300"
  },
  {
    id: "mental-wellness",
    name: "WellnessWise",
    title: "AI Mental Wellness Coach",
    description: "I am your AI-powered guide to holistic mental wellness, resilience-building, and emotional balance. Whether you want to improve sleep, manage stress, or cultivate positive habits, I offer insights and strategies tailored to your well-being.",
    expertise: [
      "Resilience building",
      "Emotional regulation",
      "Stress reduction",
      "Sleep improvement",
      "Positive psychology"
    ],
    avatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I am built on the latest research in positive psychology, neuroscience, and stress management techniques. Using insights from behavioral science and cognitive training, I provide strategies to help individuals build emotional strength and cultivate lasting wellness habits.",
    color: "from-orange-400 to-amber-300"
  },
  {
    id: "financial-education",
    name: "EduWise",
    title: "AI Financial Educator",
    description: "I am an AI-driven financial educator focused on helping you understand complex financial concepts, market fundamentals, and personal finance principles. My goal is to empower you with the knowledge needed to make smarter financial decisions.",
    expertise: [
      "Financial literacy",
      "Market fundamentals",
      "Economic principles",
      "Personal finance basics",
      "Financial terminology"
    ],
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I am designed to simplify financial concepts through interactive learning, case studies, and real-world applications. Trained on economic theories, financial textbooks, and market analysis, I help users enhance their financial literacy and decision-making skills.",
    color: "from-pink-400 to-rose-300"
  },
  {
    id: "career-advisor",
    name: "CareerWise",
    title: "AI Career Development Advisor",
    description: "I am an AI career advisor specializing in educational and professional development. Whether you're planning your academic journey, preparing for university applications, or exploring potential career paths, I provide personalized guidance for your future success.",
    expertise: [
      "Educational planning",
      "University applications",
      "Career exploration",
      "Resume building",
      "Interview preparation"
    ],
    avatar: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    background: "I combine data on educational pathways, career trends, and industry requirements to help students make informed decisions about their future. My guidance is tailored to each student's interests, strengths, and goals, with special attention to educational opportunities in Hong Kong and globally.",
    color: "from-teal-400 to-green-300"
  }
];

export const getChatbotById = (id: string): Chatbot | undefined => {
  return chatbots.find(chatbot => chatbot.id === id);
};
