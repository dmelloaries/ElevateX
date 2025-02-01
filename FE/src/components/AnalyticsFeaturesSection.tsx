"use client";
import {
  BarChart2,
  Users,
  Clock,
  PieChart,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface AnalyticsFeaturesSectionProps {
  id?: string; // Add id prop
}

const AnalyticsFeaturesSection: React.FC<AnalyticsFeaturesSectionProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}) => {
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6 text-violet-500" />,
      title: "Engagement Analytics",
      description:
        "Track likes, comments, saves, and shares. Understand what content resonates with your audience.",
    },
    {
      icon: <Users className="w-6 h-6 text-violet-500" />,
      title: "Audience Insights",
      description:
        "Detailed demographic data, follower growth patterns, and audience behavior analysis.",
    },
    {
      icon: <Clock className="w-6 h-6 text-violet-500" />,
      title: "Best Posting Times",
      description:
        "AI-powered recommendations for optimal posting times based on your audience's activity.",
    },
    {
      icon: <PieChart className="w-6 h-6 text-violet-500" />,
      title: "Performance Reports",
      description:
        "Automated weekly and monthly reports with key metrics and actionable insights.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-violet-500" />,
      title: "Competitor Analysis",
      description:
        "Compare your performance with competitors and identify growth opportunities.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-violet-500" />,
      title: "Content Performance",
      description:
        "Detailed analysis of each post's performance with AI-powered recommendations.",
    },
  ];

  return (
    <div
      id="features"
      className="w-full px-4 py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Powerful Analytics Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get comprehensive insights into your Skill performance with our
            advanced analytics tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-violet-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AnalyticsFeaturesSection;
