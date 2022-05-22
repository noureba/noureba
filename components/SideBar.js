import React,{useState} from "react";
import Image from "next/image";
import Profile from "../img/profil.png";
import Link from "next/link";
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
    <div className={`sideBar ${state? "show" : ""}`}>
      <div className="bar" onClick={handel}>
        <i>{state ? <AiFillCloseCircle/>:<AiOutlineBars/>}</i>
      </div>
      <div className="p-4">
        <Image
          className="rounded-circle text-center overflow-hidden animate__bounce99i"
          src={Profile}
          alt="profil"
          width="200"
          height="200"
        />
      </div>
      <div className="d-flex flex-column">
        <Link  href="#home" passHref>
          <a className={linkStyle.links} onClick={handel}><i><AiFillHome/></i>Home</a>
        </Link>
        <Link href="#about" passHref>
          <a className={linkStyle.links} onClick={handel}><i><FcAbout/></i>About Me</a>
        </Link>
        <Link href="#skils" passHref>
          <a className={linkStyle.links} onClick={handel}><i><GiSkills/></i>Skils</a>
        </Link>
        <Link href="#portfolio" passHref>
          <a className={linkStyle.links} onClick={handel}><i><AiFillProject/></i>Portfolio</a>
        </Link>
        <Link href="#contact" passHref>
          <a className={linkStyle.links} onClick={handel}><i><AiFillPhone/></i>Contact Me</a>
        </Link>
      </div>
      <div className=" social">
          <Link href="https://www.linkedin.com/in/noureddine-bachikh-0aa681224/" passHref>
          <a target="_blank"><i className={linkStyle.social}><AiFillLinkedin/></i></a>
        </Link>
        <Link href="https://github.com/noureba" passHref>
          <a target="_blank"><i className={linkStyle.social}><AiFillGithub/></i></a>
        </Link>
        <Link href="https://twitter.com/NBachikh" passHref>
          <a target="_blank"><i className={linkStyle.social}><AiFillTwitterCircle/></i></a>
        </Link>
        <Link href="mailto:nourddinebachikh@gmail.com" passHref>
          <a target="_blank"><i className={linkStyle.social}><AiTwotoneMail/></i></a>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
