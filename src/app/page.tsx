import Image from "next/image";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { TbBrandUnsplash } from "react-icons/tb";
import { SiLinuxfoundation } from "react-icons/si";
import { IoMdApps } from "react-icons/io";
import { TiVideo } from "react-icons/ti";

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
      <section className="flex justify-center gap-20 items-center h-[90vh]">
        <Image
          src="https://media.wired.com/photos/5c804d88b948cc3e882264a3/master/w_1600,c_limit/zucc-962130544.jpg"
          alt="Profile Picture"
          width={300}
          className="w-[30em]"
          height={300}
        />
        <div className="max-w-md">
          <span className="text-slate-900 font-semibold">ABOUT</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Olatunbosun is a Software Engineer based in Nigeria</h2>
          <p className="text-base text-[#5e5e5e] leading-7 text-justify">
            I&apos;m passionate about technology and enjoys building innovative solutions using his extensive knowledge of programming languages. He has worked in various industries, including technology, finance, and healthcare, and has a strong foundation in computer science and programming.
          </p>
          <button className="mt-8 px-9 py-3 bg-slate-800 text-white">DOWNLOAD CV</button>
        </div>
      </section>
      <section className="h-[28vh] bg-slate-800 opacity-90 flex justify-center items-center gap-40">
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
      <section className="min-h-screen py-[8rem] flex justify-center">
        <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Services</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">What I Offer</h2>
          <div className="mt-20 grid grid-cols-3 gap-10">
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col group max-w-[270px] hover:bg-slate-900 transition-colors hover:text-white origin-top-left">
              <span className="bg-slate-900 group-hover:bg-white w-20 h-20 flex justify-center items-center rounded-full group-hover:text-slate-900 text-white text-3xl"><SiMaterialdesignicons /></span>
              <h2 className="text-2xl font-bold mt-5">Creative Design</h2>
              <p className="leading-8 text-[#969292]">I create visually appealing and user-friendly designs for various projects.</p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px]">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-4xl"><MdDeveloperMode /></span>
              <h2 className="text-2xl font-bold mt-5">Web Development</h2>
              <p className="leading-8 text-[#969292]">
                I help you build websites that are user-friendly, responsive, and SEO-friendly.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px]">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-5xl"><IoMdApps /></span>
              <h2 className="text-2xl font-bold mt-5">App Development</h2>
              <p className="leading-8 text-[#969292]">
                I help you build mobile apps that are user-friendly, responsive, and optimized for both iOS and Android.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px]">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-3xl"><TiVideo /></span>
              <h2 className="text-2xl font-bold mt-5">Video Editing</h2>
              <p className="leading-8 text-[#969292]">
                I help you create engaging and visually appealing videos that showcase your skills and projects.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px]">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-5xl"><TbBrandUnsplash /></span>
              <h2 className="text-2xl font-bold mt-5">Branding</h2>
              <p className="leading-8 text-[#969292]">
                I help you create memorable and engaging branding materials that showcase your company's values and mission.
              </p>
            </div>
            <div className="shadow-lg bg-white p-10 py-12 gap-4 flex flex-col max-w-[270px]">
              <span className="bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full text-white text-3xl"><SiLinuxfoundation /></span>
              <h2 className="text-2xl font-bold mt-5">UI/UX Design</h2>
              <p className="leading-8 text-[#969292]">
                I help you create visually appealing and user-friendly designs for various products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 min-h-[90vh] flex justify-center py-[8rem]" >
        <div className="max-w-5xl w-full">
          <span className="text-slate-900 font-semibold">Skills</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Experience & Skills</h2>

          <div className="mt-20 grid grid-cols-2 gap-10">
            <div className="">
              <h2 className="text-2xl font-semibold mb-6">Frontend Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">Html - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">Css - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">JavaScript - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">React - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">Next.js - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">Typescript - 85%</div>
                <div className="py-3 px-8 bg-slate-200 text-[#333] max-w-[200px] uppercase font-medium">TailWind - 85%</div>
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold mb-6">Backend Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Mongodb - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Node - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Express - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Typescript - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Nest.js - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Python - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">django - 85%</div>
                <div className="py-3 px-8 bg-blue-100 text-[#333] max-w-[200px] uppercase font-medium">Firebase - 85%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex justify-center py-[8rem]">
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
          <div className="grid grid-cols-3 gap-10 mt-20">
            <div className="max-w-80 h-60 relative text-white group overflow-hidden transition-all">
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
              <div className="max-w-80 h-60 relative text-white group overflow-hidden transition-all">
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
              <div className="max-w-80 h-60 relative text-white group overflow-hidden transition-all">
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
              <div className="max-w-80 h-60 relative text-white group overflow-hidden transition-all">
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
              <div className="max-w-80 h-60 relative text-white group overflow-hidden transition-all">
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
              <div className="max-w-80 h-60 relative text-white group overflow-hidden transition-all">
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
    </>
  );
}
