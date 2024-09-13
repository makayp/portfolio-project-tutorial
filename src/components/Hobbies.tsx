'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const hobbies = [
  { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
  { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Hiking', emoji: '🥾', left: '35%', top: '40%' },
  { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
  { title: 'Music', emoji: '🎵', left: '70%', top: '45%' },
  { title: 'Fitness', emoji: '🏋️‍♀️', left: '5%', top: '65%' },
  { title: 'Reading', emoji: '📚', left: '45%', top: '70%' },
];

export default function Hobbies() {
  const constraintRef = useRef(null);

  return (
    <div className='relative flex-1' ref={constraintRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
          drag
          dragConstraints={constraintRef}
          dragTransition={{
            power: 0.2,
          }}
        >
          <motion.span className='font-medium text-gray-950'>
            {hobby.title}
          </motion.span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
}
