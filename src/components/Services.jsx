import React from 'react'
import {motion} from "framer-motion";
import {AiFillIeCircle} from "react-icons/ai";

const Services = () => {
    const animations={
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:0,
            x:"-100%",
        },
        twoAndThree:{
            opacity:0,
            y:"-100%",
        },
        four:{
            opacity:0,
            x:"100%",
        },
    }



  return (
    <div id="services">
        <h2>Services</h2>
        <section>
            <motion.div className="servicesBox1" whileInView={animations.whileInView} initial={animations.one}>
                <h3>0+</h3>
                <p>Years Experience</p>
            </motion.div>
            <motion.div className="servicesBox2" whileInView={animations.whileInView} initial={animations.twoAndThree}>
                <AiFillIeCircle />
                <p>Frontend Development</p>
            </motion.div>
            <motion.div className="servicesBox3" whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{
                delay:0.2,
            }}>
                <AiFillIeCircle />
                <p>Backend Development</p>
            </motion.div>
            <motion.div className="servicesBox4" whileInView={animations.whileInView} initial={animations.four}>
                <AiFillIeCircle />
                <p>Full Development</p>
            </motion.div>
        </section>
    </div>
  )
}

export default Services