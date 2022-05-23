import React,{useState} from "react";
import Image from "next/image";
import {AiFillLinkedin,AiFillCloseCircle, AiOutlineBars, AiFillGithub, AiFillTwitterCircle, AiTwotoneMail, AiFillHome, AiFillProject, AiFillPhone} from 'react-icons/ai'
import {GiSkills} from "react-icons/gi"
import {FcAbout} from 'react-icons/fc'
import linkStyle from '../styles/css/links.module.css'

function SideBar() {
  const [state, setState] = useState(false)
  const handel = ()=>{
    setState(!state)
  }
  return (
    <div className={`sideBar ${state? "show" : ""} sideBar`}>
      <div className="bar" onClick={handel}>
        <i>{state ? <AiFillCloseCircle/>:<AiOutlineBars/>}</i>
      </div>
      <div className="p-4">
        <Image
          className="rounded-circle text-center overflow-hidden animate__bounce99i"
          src="https://res.cloudinary.com/dia3y316g/image/upload/v1653317276/20211230_181518-removebg_fvf6ng.jpg"
          alt="profil"
          width="200"
          height="200"
        />
      </div>
      <div className="d-flex flex-column menu">
          <a  href="#home" className={linkStyle.links} onClick={handel}><i><AiFillHome/></i>Home</a>
          <a href="#about" className={linkStyle.links} onClick={handel}><i><FcAbout/></i>About Me</a>
          <a  href="#skils" className={linkStyle.links} onClick={handel}><i><GiSkills/></i>Skils</a>
          <a href="#portfolio" className={linkStyle.links} onClick={handel}><i><AiFillProject/></i>Portfolio</a>
          <a href="#contact" className={linkStyle.links} onClick={handel}><i><AiFillPhone/></i>Contact Me</a>
      </div>
      <div className=" social">
          <a href="https://www.linkedin.com/in/noureddine-bachikh-0aa681224/" target="_blank"><i className={linkStyle.social}><AiFillLinkedin/></i></a>
          <a href="https://github.com/noureba" target="_blank"><i className={linkStyle.social}><AiFillGithub/></i></a>
          <a href="https://twitter.com/NBachikh" target="_blank"><i className={linkStyle.social}><AiFillTwitterCircle/></i></a>
          <a href="mailto:nourddinebachikh@gmail.com" target="_blank"><i className={linkStyle.social}><AiTwotoneMail/></i></a>
      </div>
    </div>
  );
}

export default SideBar;
