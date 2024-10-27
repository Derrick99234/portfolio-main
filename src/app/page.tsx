import Image from "next/image";
import { MdOutlineArrowRight, MdDeveloperMode } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandUnsplash } from "react-icons/tb";
import { SiLinuxfoundation } from "react-icons/si";
import { IoLogoJavascript, IoMdApps } from "react-icons/io";
import { TiVideo } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiPlay1, CiStar } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section 
        className="h-screen" 
        style={{ 
          background: `url("https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?ga=GA1.1.1542621798.1729072211&semt=ais_hybrid") center/cover no-repeat`,
          backgroundColor: "rgba( 0, 20, 30, .8)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="relative z-10 text-white flex justify-center items-center flex-col h-screen">
          <h1 className="text-5xl font-bold">OLATUNBOSUN OLASHUBOMI</h1>
          <span className="font-serif my-3">SOFTWARE ENGINEER</span>
          <button className="mt-4 py-2 px-12 text-xl font-semibold bg-slate-900">Contact Me</button>
        </div>
        <span className="absolute left-0 bottom-16 bg-slate-800 text-white text-2xl p-1"><MdOutlineArrowRight /></span>
      </section>
      <section className="flex justify-center gap-20 items-center min-h-[90vh] max-[1037px]:flex-col max-[1037px]:p-36 max-[1037px]:px-8">
        <Image
          src="https://media.wired.com/photos/5c804d88b948cc3e882264a3/master/w_1600,c_limit/zucc-962130544.jpg"
          alt="Profile Picture"
          width={300}
          className="w-[30em] max-[1037px]:w-full"
          height={300}
        />
        <div className="max-w-md max-[1037px]:max-w-full">
          <span className="text-slate-900 font-semibold">ABOUT</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Olatunbosun is a Software Engineer based in Nigeria</h2>
          <p className="text-base text-[#5e5e5e] leading-7 text-justify">
            I&apos;m passionate about technology and enjoys building innovative solutions using his extensive knowledge of programming languages. He has worked in various industries, including technology, finance, and healthcare, and has a strong foundation in computer science and programming.
          </p>
          <button className="mt-8 px-9 py-3 bg-slate-800 text-white">DOWNLOAD CV</button>
        </div>
      </section>
      <section className="min-h-[28vh] bg-slate-800 opacity-90 grid grid-cols-4 max-[1037px]:grid-cols-2 gap-10 max-[1037px]:py-14 place-items-center">
        <div className="">
          <span className="text-white text-3xl font-bold text-center block mb-3">777</span>
          <p className="text-md text-[#969292]">Project Completed</p>
        </div>
        <div className="">
          <span className="text-white text-3xl font-bold text-center block mb-3">800+</span>
          <p className="text-md text-[#969292]">Happy Clients</p>
        </div>
        <div className="">
          <span className="text-white text-3xl font-bold text-center block mb-3">2M</span>
          <p className="text-md text-[#969292]">Lines Of Code</p>
        </div>
        <div className="">
          <span className="text-white text-3xl font-bold text-center block mb-3">100%</span>
          <p className="text-md text-[#969292]">Satisfaction Guarantee</p>
        </div>
      </section>
      <section className="min-h-screen py-[8rem] flex justify-center max-[1037px]:px-8">
        <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Services</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">What I Offer</h2>
          <div className="mt-20 grid grid-cols-3 gap-10 max-[1037px]:grid-cols-2">
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col group max-w-[270px] hover:bg-slate-900 transition-colors hover:text-white origin-top-left max-[1037px]:max-w-full">
              <span className="bg-slate-900 group-hover:bg-white w-20 h-20 flex justify-center items-center rounded-full group-hover:text-slate-900 text-white text-3xl"><SiMaterialdesignicons /></span>
              <h2 className="text-2xl font-bold mt-5">Creative Design</h2>
              <p className="leading-8 text-[#969292]">I create visually appealing and user-friendly designs for various projects.</p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px] max-[1037px]:max-w-full">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-4xl"><MdDeveloperMode /></span>
              <h2 className="text-2xl font-bold mt-5">Web Development</h2>
              <p className="leading-8 text-[#969292]">
                I help you build websites that are user-friendly, responsive, and SEO-friendly.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px] max-[1037px]:max-w-full">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-5xl"><IoMdApps /></span>
              <h2 className="text-2xl font-bold mt-5">App Development</h2>
              <p className="leading-8 text-[#969292]">
                I help you build mobile apps that are user-friendly, responsive, and optimized for both iOS and Android.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px] max-[1037px]:max-w-full">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-3xl"><TiVideo /></span>
              <h2 className="text-2xl font-bold mt-5">Video Editing</h2>
              <p className="leading-8 text-[#969292]">
                I help you create engaging and visually appealing videos that showcase your skills and projects.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px] max-[1037px]:max-w-full">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-5xl"><TbBrandUnsplash /></span>
              <h2 className="text-2xl font-bold mt-5">Branding</h2>
              <p className="leading-8 text-[#969292]">
                I help you create memorable and engaging branding materials that showcase your company's values and mission.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px] max-[1037px]:max-w-full">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-3xl"><SiLinuxfoundation /></span>
              <h2 className="text-2xl font-bold mt-5">UI/UX Design</h2>
              <p className="leading-8 text-[#969292]">
                I help you create visually appealing and user-friendly designs for various products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 min-h-[90vh] flex justify-center py-[8rem] max-[1037px]:px-8" >
        <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Skills</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Experience & Skills</h2>

          <div className="mt-20 grid grid-cols-2 max-[1037px]:grid-cols-1 gap-10">
            <div className="">
              <h2 className="text-2xl font-semibold mb-6">Frontend Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Html - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Css - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">JavaScript - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">React - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Next.js - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Typescript - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">TailWind - 85%</div>
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold mb-6">Backend Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Mongodb - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Node - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Express - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Typescript - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Nest.js - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Python - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">django - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] max-[1037px]:max-w-full uppercase font-medium">Firebase - 85%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex justify-center py-[8rem] max-[1037px]:px-8">
      <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Works</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Creative Portfolio</h2>
          <div className="flex gap-5 items-center font-medium">
            <span className="text-blue-950">All</span>
            <span>Youtube</span>
            <span>Vimeo</span>
            <span>Soundcloud</span>
            <span>Popup</span>
            <span>Content</span>
          </div>
          <div className="grid grid-cols-3 max-[1037px]:grid-cols-2 gap-10 mt-20">
            <div className="max-w-80 max-[1037px]:max-w-full h-60 relative text-white group overflow-hidden transition-all">
              <Image
                src="https://images.unsplash.com/photo-1699891730669-2d15cf3a5979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Youtube Video"
                width={300}
                height={300}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">So Skilled</h2>
                <span>vimeo</span>
              </div>
            </div>
              <div className="max-w-80 max-[1037px]:max-w-full h-60 relative text-white group overflow-hidden transition-all">
                <Image
                  src="https://images.unsplash.com/photo-1671347020855-8f35d210ee9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                  alt="Youtube Video"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">So Skilled</h2>
                <span>vimeo</span>
              </div>
              </div>
              <div className="max-w-80 max-[1037px]:max-w-full h-60 relative text-white group overflow-hidden transition-all">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1668473366952-45f06fbf6492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                  alt="Youtube Video"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">So Skilled</h2>
                <span>vimeo</span>
              </div>
              </div>
              <div className="max-w-80 max-[1037px]:max-w-full h-60 relative text-white group overflow-hidden transition-all">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1671156854811-92d6bff8209b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
                  alt="Youtube Video"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">So Skilled</h2>
                <span>vimeo</span>
              </div>
              </div>
              <div className="max-w-80 max-[1037px]:max-w-full h-60 relative text-white group overflow-hidden transition-all">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                  alt="Youtube Video"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">So Skilled</h2>
                <span>vimeo</span>
              </div>
              </div>
              <div className="max-w-80 max-[1037px]:max-w-full h-60 relative text-white group overflow-hidden transition-all">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                  alt="Youtube Video"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">So Skilled</h2>
                <span>vimeo</span>
              </div>
              </div>
          </div>
      </div>
      </section>

      <section className="bg-slate-900 h-[65vh] flex items-center flex-col">
        <div className="bg-black/10 -mt-14 mb-14 p-3 rounded-full">
          <div className="bg-blue-900 text-white w-24 rounded-full h-24 flex justify-center items-center text-4xl font-bold"><CiPlay1 /></div>
        </div>
        <h2 className="text-2xl text-white font-semibold text-center">Need help with template customization?<br /> Get in touch with us!</h2>
        <p className="text-white text-center mt-10 hover:underline font-mono font">pshubomi@gmail.com</p>

        <div className="bg-white w-4/6 max-[1037px]:w-4/5 h-[300px] mt-24 flex justify-center flex-col items-center gap-8 -mb-24 shadow-md">
          <div className="flex justify-center items-center gap-24 text-6xl text-slate-500">
            <IoLogoJavascript />
            <AiOutlinePython />
            <FaDatabase />
            <IoLogoReact />
          </div>
          <p>Empowering 120,000+Businesses with Innovation <span className="text-blue-900">trusted clients</span>.</p>
        </div>
      </section>
      <section className="min-h-[120vh] flex justify-center items-center max-[1037px]:px-8 max-[1037px]:pt-36">
        <div className="flex justify-center items-center gap-20 max-[1037px]:flex-col">
          <div className="max-w-md max-[1037px]:max-w-full">
            <span className="text-slate-900 font-semibold">Blog</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Latest Posts</h2>
            <p className="leading-9 text-[#969292] text-pretty">
              Testimonials are one of the most important tools a company can use to show potential customers how valuable their products and services are. Testimonials are a short statement that describes how a product or service worked for a customer. Testimonials can help build trust and credibility with your customers.
            </p>
            <button className="mt-8 px-9 py-3 bg-slate-800 text-white">CONTACT ME</button>
          </div>
          <div className="p-14 max-w-md shadow-lg max-[1037px]:max-w-full">
            <span className="items-center gap-1 text-lg mb-5 inline-flex"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></span>
            <p>
              Wonderful support. Immediate response and they return with and easy fix and clear information. Applied the fix and worked like a charm, you can definitely trust this developers!
            </p>
            <div className="flex gap-5 mt-10">
              <Image
                src={"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"}
                width={500}
                height={500}
                alt="Profile Picture"
                className="object-cover rounded-full w-20 h-20"
              />
              <div className="">
                <h3 className="text-2xl font-semibold">Derrick Smith</h3>
                <span className="text-slate-500 text-sm">Deritech company</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-center py-[8rem] bg-[#f9f9f9] max-[1037px]:px-8">
      <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Testimonials</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Experience & Skills</h2>

          <div className="mt-20 grid grid-cols-3 max-[1037px]:grid-cols-2 gap-10">
            <div className="w-72 max-[1037px]:w-full shadow-md bg-white overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/28720925/pexels-photo-28720925/free-photo-of-minimalist-diagonal-stairway-against-white-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                width={500}
                height={500}
                alt="Testimonial Image"
                className="object-cover hover:scale-125 transition-all duration-300"
              />
              </div>
                <div className="p-8">
                  <span className="text-[#969292] text-base">Oct 26, 2023 in <span className="text-blue-900">Design</span></span>
                  <hr className="my-5" />  
                  <h2 className="text-2xl font-semibold">Building Portfolio website with Vanilla</h2>
                </div>
            </div>
            <div className="w-72 max-[1037px]:w-full shadow-md bg-white overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={"https://images.pexels.com/photos/11931931/pexels-photo-11931931.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                    width={500}
                    height={500}
                    alt="Testimonial Image"
                    className="object-cover hover:scale-125 transition-all duration-300"
                />
                </div>
                <div className="p-8">
                  <span className="text-[#969292] text-base">Oct 26, 2023 in <span className="text-blue-900">Design</span></span>
                  <hr className="my-5" />  
                  <h2 className="text-2xl font-semibold">Building Portfolio website with Vanilla</h2>
                </div>
            </div>
            <div className="w-72 max-[1037px]:w-full shadow-md bg-white overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"}
                width={500}
                height={500}
                alt="Testimonial Image"
                className="object-cover hover:scale-125 transition-all duration-300"
              />
              </div>
                <div className="p-8">
                  <span className="text-[#969292] text-base">Oct 26, 2023 in <span className="text-blue-900">Design</span></span>
                  <hr className="my-5" />  
                  <h2 className="text-2xl font-semibold">Building Portfolio website with Vanilla</h2>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[90vh] flex justify-center py-[8rem] max-[1037px]:px-8">
      <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Contact</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Get in Touch</h2>

          <div className="flex justify-center items-center max-[1037px]:items-start max-[1037px]:flex-col gap-20 mt-20">
            <div className="">
              <div className="flex items-center gap-4 mt-10">
                <span className="bg-slate-900 p-5 text-3xl text-white rounded-full"><CiMail /></span>
                <div className="">
                  <span className="block text-[#767676] text-base">Mail:</span>
                  <Link href={"mailto:pshubomi@gmail.com"} className="font-semibold text-xl">pshubomi@gmail.com</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <span className="bg-slate-900 p-5 text-3xl text-white rounded-full"><FaPhoneAlt /></span>
                <div className="">
                  <span className="block text-[#767676] text-base">phone:</span>
                  <Link href={"tel:+2349161965510"} className="font-semibold text-xl">+234 916 196 5510</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <span className="bg-slate-900 p-5 text-3xl text-white rounded-full"><CiMail /></span>
                  <div className="">
                      <span className="block text-[#767676] text-base">Social:</span>
                      <div className=" flex gap-4 text-3xl text-slate-900">
                        <Link href="https://www.linkedin.com/in/derricktechtron-73717b23a" target="_blank"><FaLinkedin /></Link>
                        <Link href="https://x.com/Derrick9923" target="_blank"><FaXTwitter /></Link>
                        <Link href="https://github.com/Derrick99234" target="_blank"><FaGithub /></Link>
                        <Link href="https://web.facebook.com/profile.php?id=100089629576598" target="_blank"><FaFacebook /></Link>
                      </div>
                  </div>
              </div>
            </div>
            <form action="" className="max-[1037px]:w-full">
              <div className="flex gap-5">
                <input type="text" placeholder="Name" className="border-2 py-4 text-lg px-3 max-[1037px]:w-full" />
                <input type="text" placeholder="Email" className="border-2 py-4 text-lg px-3 max-[1037px]:w-full" />
              </div>
              <textarea placeholder="Message" className="border-2 pt-4 text-lg w-full px-3 mt-5 h-36 resize-none" />
              <button className="mt-3 px-9 py-3 bg-slate-800 text-white w-full">SEND MESSAGE</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
