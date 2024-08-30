'use client';

import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import clsx from 'clsx';

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [toggle, setToggle] = useState(false);

  //   const handleQA = () => {};

  return (
    <div className="border-white border-b border-opacity-30 pb-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-md">{question}</h4>
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FiMinus className="text-white" size={22} />
          ) : (
            <GoPlus className="text-white" size={22} />
          )}
        </div>
      </div>
      <div>
        <p className={clsx(toggle ? 'text-md mt-3 text-white/60' : 'hidden')}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
