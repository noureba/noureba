import React , {useEffect}from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  AiFillPhone,
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import  AOS  from "aos";


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
          <Link href="" passHref>
            <a>
              <i>
                <MdLocationPin />
              </i>
              Agadir, Souss-Massa, Morocco
            </a>
          </Link>
          <Link href="tel:212680735078" passHref>
            <a>
              <i>
                <AiFillPhone />
              </i>
              +212680735078
            </a>
          </Link>

          <Link href="mailto:nourddinebachikh@gmail.com" passHref>
            <a >
              <i>
                <AiTwotoneMail />
              </i>
              noureddine@bachikh.com
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/noureddine-bachikh-0aa681224/" passHref>
            <a target="_blank">
              <i>
                <AiFillLinkedin />
              </i>
              linkedin
            </a>
          </Link>
          <Link href="https://github.com/noureba" passHref>
            <a target="_blank">
              <i>
                <AiFillGithub />
              </i>
              Github
            </a>
          </Link>
          <Link href="https://twitter.com/NBachikh" passHref>
            <a target="_blank">
              <i>
                <AiFillTwitterCircle />
              </i>
              Twitter
            </a>
          </Link>
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
