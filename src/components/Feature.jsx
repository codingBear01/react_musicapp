import { React, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

function Feature({ icon, title }) {
  const [elIsVisible, setElIsVisible] = useState(false);

  const variant = {
    true: { transform: 'scale(1)' },
    false: { transform: 'scale(0.5)' },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElIsVisible(isVisible)}
      minTopValue={100}
    >
      <div className="feature flex flex-col items-center justify-center mx-12 text-center relative">
        <motion.div
          variants={variant}
          animate={`${elIsVisible}`}
          transition={{ duration: 1, type: 'ease-out' }}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            className="w-[3rem]"
            src={require(`./../img/${icon}.png`)}
            alt="icon"
          />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">
          Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
          libero, sit amet laoreet lorem.
        </span>

        <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
          Learn more
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
