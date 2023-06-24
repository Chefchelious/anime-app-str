import React from 'react';
import {motion, AnimatePresence} from "framer-motion";

import './WatchItem.css';

interface IProps {
  title: string;
  info: string;
}

const WatchItem: React.FC<IProps> = ({title, info}) => {
  return (
    <AnimatePresence>
      <div className="watch-block">
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.6
            }
          }}
        >
          <h3 className="watch-block__title">{title}</h3>
          <p className="watch-block__description">{info}</p>
          <button className="watch-block__play">watch now</button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WatchItem;