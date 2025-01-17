import Image from 'next/image';
import React from 'react';

const RecentNews: React.FC = () => {
  const articles = [
    {
      image: '/diet.jpg', // Replace with actual image paths
      title:
        'Eating for Your Health: 4 Diet Tips for Muscle and Immunity Support',
    },
    {
      image: '/stretching.jpg',
      title:
        'Incorporating Assisted Stretching into a Personal Training Program',
    },
    {
      image: '/health.jpg',
      title: '5 Healthy Living Choices You Might be Overlooking',
    },
  ];

  return (
    <div className="px-4 md:px-40 py-8 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Recent News</h2>
        <div className="mt-2 w-16 h-1 bg-green-500 mx-auto"></div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Square Container */}
            <div className="relative w-full h-64">
              {' '}
              {/* Set both height and width for a square */}
              <Image
                src={article.image}
                alt={article.title}
                fill // This replaces layout="fill"
                style={{ objectFit: 'cover' }} // This replaces objectFit="cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <p className="text-green-600 font-medium">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
