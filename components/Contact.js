import React , {useEffect}from "react";
import { useForm } from "react-hook-form";
import {
  AiFillPhone,
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import  AOS  from "aos";
import linkStyle from '../styles/css/links.module.css'


function Contact() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      once: true
    })
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact" className="contact" data-aos="fade-up">
      <h1 className="my-3">Contact</h1>
      <div className="contactUs">
        <div className="info">
            <a className={`${linkStyle.link}`}>
              <i>
                <MdLocationPin />
              </i>
              Agadir, Souss-Massa, Morocco
            </a>
            <a href="tel:212680735078" className={`${linkStyle.link}`}>
              <i>
                <AiFillPhone />
              </i>
              +212680735078
            </a>

            <a href="mailto:nourddinebachikh@gmail.com" className={`${linkStyle.link}`}>
              <i>
                <AiTwotoneMail />
              </i>
              noureddine@bachikh.com
            </a>
            <a href="https://www.linkedin.com/in/noureddine-bachikh-0aa681224/" target="_blank" className={`${linkStyle.link}`}>
              <i>
                <AiFillLinkedin />
              </i>
              linkedin
            </a>
            <a href="https://github.com/noureba" target="_blank" className={`${linkStyle.link}`}>
              <i>
                <AiFillGithub />
              </i>
              Github
            </a>
            <a href="https://twitter.com/NBachikh" target="_blank" className={`${linkStyle.link}`}>
              <i>
                <AiFillTwitterCircle />
              </i>
              Twitter
            </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("FullName", { required: true })}
          />
          {errors.FullName && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          {errors.Email && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            type="text"
            placeholder="Subject"
            {...register("Subject", { required: true })}
          />
          {errors.Subject && (
            <span className="text-danger">This field is required</span>
          )}
          <textarea
            placeholder="Type here ..."
            {...register("Message")}
          ></textarea>

          <input type="submit" className="button" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
