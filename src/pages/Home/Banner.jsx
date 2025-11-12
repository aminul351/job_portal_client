import React from 'react';
import { color, motion } from "motion/react"
import img1 from '../../assets/team1.jpg'
import img2 from '../../assets/team2.jpg'
import { img } from 'motion/react-client';



const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <motion.img
    animate={{y:[100,150,100]}}
    transition={{duration:5, repeat:Infinity}}
    
      src={img2}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-blue-500 border-s-8 border-b-8 "
    />


    <motion.img
    animate={{x:[100,150,100]}}
    transition={{duration:5, repeat:Infinity}}
    
      src={img1}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-blue-500 border-s-8 border-b-8 "
    />
    
    
    <div>
      <motion.h1 

      // initial={{ scale: 0 }} animate={{ scale: 1, x:200, y:-200, transition:{duration:4} }}
      



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