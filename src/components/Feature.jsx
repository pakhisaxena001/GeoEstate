import React from 'react';
import { FileCheck, Shield, Clock, GitMerge } from 'lucide-react';

const features = [
  {
    icon: FileCheck,
    title: 'AI-Powered Smart Contracts',
    description: 'Automate property transactions with intelligent contracts that self-execute based on predefined conditions, ensuring security and transparency.',
  },
  {
    icon: Clock,
    title: 'Real-Time Document Verification',
    description: 'Instantly verify property documents using advanced AI algorithms, reducing processing time from weeks to minutes.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Protect against property fraud with our AI system that analyzes patterns and detects suspicious activities in real-time.',
  },
  {
    icon: GitMerge,
    title: 'Automated Land Mutation',
    description: 'Streamline land mutation processes with automated workflows that ensure accuracy and compliance with local regulations.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transforming Land Registry
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our AI-powered platform brings revolutionary features to modernize land registry management
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center">
                    <Icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-gray-500 text-center text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;