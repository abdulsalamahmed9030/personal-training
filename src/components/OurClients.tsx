import React from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'AMANDA SMITH',
    description:
      'A mother, age 35, staying in Chicago, Illinois, transformed her life with our personalized diet and workout routine.',
    before: '/before.jpg',
    after: '/after.jpg',
  },
  {
    name: 'BRIAN JONES',
    description:
      'A father, age 40, working in Austin, Texas, achieved his dream physique with our coaching and guidance.',
    before: '/before.jpg',
    after: '/after.jpg',
  },
  {
    name: 'JESSICA JOHNSON',
    description:
      'Age 28, from Seattle, Washington, blossomed into a confident individual with our diet and workout routine.',
    before: '/before.jpg',
    after: '/after.jpg',
  },
];

const OurClients: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex space-x-2 mb-4">
                <Image
                  src={client.before}
                  alt={`${client.name} before`}
                  className="w-1/2 h-auto rounded-lg"
                  width={150}
                  height={150}
                  priority // Add priority here
                />
                <Image
                  src={client.after}
                  alt={`${client.name} after`}
                  className="w-1/2 h-auto rounded-lg"
                  width={150}
                  height={150}
                  priority // Add priority here
                />
              </div>
              <h3 className="text-xl font-bold">{client.name}</h3>
              <p className="text-gray-600 mt-2">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
