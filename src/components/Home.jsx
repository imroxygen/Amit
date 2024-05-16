import React, { useRef } from 'react'
import {animate, motion}from "framer-motion"
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown}from"react-icons/bs"
import me from "../assets/me.png"

const Home = () => {

    const clientCount=useRef(null);
    const projectCount=useRef(null);

    const animationClientsCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
        });
    };
    const animationProjectsCount=()=>{
        animate(0,500,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
        });
    };
    const animations ={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }



  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I Am <br />Amit Sarkar
                </motion.h1>

                <Typewriter options={{
                    strings:["A Student","A Developer","A Coder","A Creater"],
                    autoStart:true,
                    loop:true,
                    cursor:"",
                    wrapperClassName:"typewriterpara",
                }}/>
                <div>
                   <a href="mailto:amj153942@gmail.com" >Hire Me</a>
                   <a href="#work">
                    Projects <BsArrowUpRight />
                   </a>
                </div>
                <article>
                    <p>
                        +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                    </p>
                    <span>Client WrodWide</span>
                </article>
                <aside>
                <article>
                    <p>
                        +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                    </p>
                    <span>Projects Done</span>
                </article>
                <article data-special>
                    <p>Contact</p>
                    <span>amj153942@gmail.com</span>
                </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="Amit Sarkar" />
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home