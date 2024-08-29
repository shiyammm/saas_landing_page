import React from 'react';
import { LuBox } from 'react-icons/lu';

type featuresCardTypes = {
  heading: string;
  description: string;
};

const FeatureCards = ({ heading, description }: featuresCardTypes) => {
  return (
    <div className=" border border-white p-10 text-center rounded-xl border-opacity-35 space-y-3  flex flex-col items-center">
      <div className="bg-white size-16 rounded-lg flex items-center justify-center">
        <LuBox size={25} className="text-black" />
      </div>
      <h1 className="text-lg font-semibold">{heading}</h1>
      <p className="text-md text-white text-opacity-65">{description}</p>
    </div>
  );
};

export default FeatureCards;
