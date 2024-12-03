import { DollarSign, Lock, Share2 } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <DollarSign />,
      title: "Advanced Object Detection",
      description:
        "Utilizing state-of-the-art YOLO v11 model for precise detection of insulators and defects.",
    },
    {
      icon: <Lock />,
      title: "Secure & Scalable",
      description:
        "Dockerized models ensure efficient deployment across diverse environments.",
    },
    {
      icon: <Share2 />,
      title: "Interactive Visuals",
      description:
        "A user-friendly Next.js-powered interface for clear and actionable insights.",
    },
  ];

  return (
    <section className="pb-10 dark:bg-[#2D3748]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Features
        </h2>
        <div className="flex justify-center space-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="max-w-xs p-6 rounded-lg shadow-lg dark:bg-[#1A202C]"
            >
              <div className=" mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-navy-600 dark:text-gray-100">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
