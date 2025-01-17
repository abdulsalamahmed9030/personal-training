import Image from 'next/image';
import React from 'react';

const MissionStatement: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-12 px-4 md:px-24 py-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src="/your-image3.jpg" // Replace with the actual image path
          alt="People exercising"
          width={500} // Adjust based on the desired width
          height={400} // Adjust based on the desired height
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl text-green-600 font-semibold mb-2">
          MISSION STATEMENT
        </h2>
        <p className="text-xl md:text-6xl font-semibold text-gray-800 leading-relaxed">
          To maximize your innate health potential by changing your entire
          lifestyle, starting with the way you think, eat and exercise.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
