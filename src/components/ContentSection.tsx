'use client';

import React from 'react';

const ContentSection: React.FC = () => {
  const cards = [
    {
      heading: 'Importance of personal training in rehabilitation',
      content:
        'Personal training is crucial in rehabilitation because it offers tailored exercises and guidance to assist individuals in regaining strength and mobility. One-on-one sessions allow for personalized attention and the ability to focus on specific needs, ensuring a customized approach to recovery. A skilled personal trainer can create a program that targets the areas needing improvement, gradually advancing as progress is made. Consistent supervision and support from a trainer can boost motivation and adherence to the rehabilitation process.',
    },
    {
      heading: 'How personal training aids in recovery',
      content:
        'Personal training plays a crucial role in aiding recovery from injuries. Here’s how it can help you:\n1. Customized Plans: Personal trainers design specialized workout plans tailored to your injury and fitness level.\n2. Targeted Exercises: They incorporate exercises focusing on strengthening the injured area and improving flexibility.\n3. Monitoring Progress: Trainers track your progress, adjust the workout intensity, and ensure safe rehabilitation.\n4. Motivation and Support: They provide encouragement, motivation, and a positive attitude, essential for a successful recovery journey.',
    },
    {
      heading: 'Success stories of injury rehabilitation',
      content:
        'People often succeed in injury rehabilitation with the help of personal training. These success stories show how individuals have overcome their injuries with personalized training programs. Personal trainers work closely with clients to create tailored workout plans that focus on strengthening weak areas, improving flexibility, and preventing future injuries. These stories highlight the importance of dedication, persistence, and the guidance of a skilled trainer in achieving successful rehabilitation outcomes.',
    },
    {
      heading: 'Role of personalized training programs',
      content:
        'Personalized training programs play a crucial role in injury rehabilitation success stories. They are tailored to meet the specific needs of individuals recovering from injuries. These programs focus on targeting areas that need improvement, strengthening muscles, enhancing flexibility, and improving overall physical well-being. With personalized training, individuals receive guidance and support from a professional trainer, ensuring that exercises are performed correctly and safely to aid in the recovery process.',
    },
    {
      heading: 'Integrating strength training in rehabilitation',
      content:
        'People who undergo injury rehabilitation may benefit greatly from incorporating strength training in their recovery process. Strength training can aid in regaining muscle strength, improving overall body function, and enhancing recovery speed. Fitness instructors can tailor programs to suit individual needs, ensuring safe and effective progress towards rehabilitation goals.',
    },
    {
      heading: 'Benefits of cardiovascular exercises',
      content:
        'Cardiovascular exercises are great for improving heart health, increasing stamina, and burning calories. They can also help reduce the risk of heart disease, improve circulation, and boost energy levels. Examples of cardiovascular exercises include running, swimming, cycling, and jumping rope. Engaging in these activities can contribute to weight loss and overall well-being.',
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Key Insights on Personal Training and Injury Rehabilitation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 border-l-4 border-green-300"
            >
              <h3 className="text-xl font-bold text-green-600 mb-4">
                {card.heading}
              </h3>
              <p className="text-gray-600 text-sm">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
