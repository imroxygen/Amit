import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/88242426?v=4"} alt="Founder" />
            <h2>Amit Sarkar</h2>
            
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a  target="blank" href="https://youtube.com"><AiFillYoutube /></a>
                <a  target="blank" href="https://instagram.com"><AiFillInstagram /></a>
                <a  target="blank" href="https://github.com"><AiFillGithub /></a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp />
        </a>
    </footer>
  );
};

export default Footer;
