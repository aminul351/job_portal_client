import React from 'react';
import { color, motion } from "motion/react"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <motion.h1 

      initial={{ scale: 0 }} animate={{ scale: 1 }}
      



      className="text-5xl font-bold">Box  News!</motion.h1>
      <p className="py-6">
        <motion.span animate={{color:['#ff5733', '#33ff33'],
        transition : {duration:4, repeat : Infinity}
        }}>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
        </motion.span>
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;