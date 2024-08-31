'use client';

import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="border-white border-b border-opacity-30 pb-6 max-w-3xl mx-auto"
      onClick={() => setToggle(!toggle)}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-md">{question}</h4>
        <div>
          {toggle ? (
            <FiMinus className="text-white" size={22} />
          ) : (
            <GoPlus className="text-white" size={22} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <p className="text-md text-white/60">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
