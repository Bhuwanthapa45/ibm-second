import React from 'react'
import Navbar from '../components/navbar';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect,useState,useRef } from 'react'
import Footer from '../components/footer';
const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [rotate, setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX= e.clientX;
      let mouseY= e.clientY;
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
      setRotate(angle -180);
    })
  })
  return (
    <div className='text-zinc-100  w-full '>
        
        <div div data-scroll data-scroll-section data-scroll-speed='-.7' className='firstSection bg-zinc-900 h-[115vh]'>
        <div className='textstucture pl-[5vw] pt-[40vh] sm:pt-[20vh] text-[4.5vh] sm:text-[10vh] sm:leading-none inline-block'>
          <Link to="/courses-scholarship"><h1 className='hover:text-[#CDEA68]'>Explore Scholarship Globally</h1></Link>
          <Link to="/courses-scholarship"> <h1 className='hover:text-[#CDEA68]'>Explore Courses</h1></Link>
         
          <div className='flex'>
          <motion.div
                     initial={{width:0}} 
                     animate={{width:"15vw"}} 
                     transition={{ease : [0.76, 0, 0.24, 1], duration: 1}}
                     className='mr-[1vw] w-[8vw] rounded-3xl h-[5.5vw]  relative bg-cover '>
                      <img className='rounded-md w-[30vw] sm:w-[15vw] h-[20vh] sm:h-[15vw] pt-[5vh]' src="https://th.bing.com/th/id/OIG3.VsR9NCJOVktUXdruPQrR?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />

                    </motion.div>
                    <Link to="/resources"><h1 className='sm:text-[10vw] pt-[8vh] sm:pt-[5vh] text-[#CDEA68] hover:text-[#44c4b9]'>E-Books</h1></Link>
                   
                   
                    
            </div>
          
        

        </div>
        <div className="border-t-[1px] border-zinc-800 pt-[5vh] block mt-[10vh]">
          <div className='flex justify-center items-center text-[2vh] px-[5vw]'>
          <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
          <h1>Aimming United Nations Sustinable development Goals</h1>
</a>
</div>
          
          <div className='pl-[25vw] sm:pl-[0vw] block sm:flex justify-center items-center gap-[20vw] pt-[10vh] text-[3vh]'>
          <a href="https://sdgs.un.org/goals/goal4" target="_blank" rel="noopener noreferrer">
          <h1>Quality Education</h1>
          </a>

           
          <a href="https://sdgs.un.org/goals/goal17" target="_blank" rel="noopener noreferrer">
          <h1>Partnerships for the goals</h1>
          </a>
          <a href="https://sdgs.un.org/goals/goal10" target="_blank" rel="noopener noreferrer">
          <h1>Reduced Inequalites</h1>
          </a>
          </div>
          

        </div>
        </div>

        <div div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap '>
          <Link to="/lms">
          < motion.h1 
        initial={{x: "0"}}
         animate={{x: "-100%"}}
          transition={{ repeat: Infinity, ease:"linear", duration: 15}} 
          className='text-[15vw] leading-none font-bold uppercase pt-10 pr-20'>Explore Our Learning Management System</ motion.h1>
          </Link>
          <Link to="/lms">
        < motion.h1 
         initial={{x: "0"}}
         animate={{x: "-100%"}}
          transition={{ repeat: Infinity, ease:"linear", duration: 15}} 
          className='text-[15vw] leading-none font-bold uppercase pt-10 pr-20'>Explore Our Learning Management System</ motion.h1>
          
          </Link>
        </div>
      
    </div>
    {/* About Section */}
    <div   className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[4.5vw] tracking-tight font-semibold'>LearnLoom is an online platform that connects users with a wide range of educational resources, courses, and academic events. It centralizes information, making it easier for learners to find and manage opportunities, fostering continuous and accessible learning.</h1>
   
<div className='w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 block sm:flex gap-5'>
    <div className='w-full sm:w-1/2 py-20'>
    <h1 className='text-2xl sm:text-7xl'>Collabrate With Us :
        </h1>
        <Link to="/collabration">
        <button className='px-3 sm:px-10 py-2 sm:py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center'>Read More
            <div className='w-2 h-2  bg-zinc-100 rounded-full'></div>
        </button></Link>
        
        </div>
    <div className='w-full sm:w-1/2  sm:h-[70vh] rounded-3xl bg-cover'>
    <img className=" w-full h-[40vh] sm:h-[70vh] rounded-3xl "src="https://th.bing.com/th/id/OIG4.uPUYUBDkE93.zM0NKHSA?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />

    </div>    
    </div>
       
    </div>
  {/* Eyes */}
  <div className='eyes w-full h-screen overflow-hidden '>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className='flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  gap-2 sm:gap-10  '>
      <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 '>
  <div className='relative items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
  <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
    <div className='w-6 sm:w-10 h-6 sm:h-10 bg-zinc-100 rounded-full'>
    </div>
    </div>
  </div>
</div>
<div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 '>
<div className='relative items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
<div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
    <div className='w-6 sm:w-10 h-6 sm:h-10 bg-zinc-100 rounded-full'>
    </div>
    </div>
  </div>
</div>
</div> 
</div>
 
    </div>
{/* Fetured Course */}
<div div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[120vh] sm:h-[130vh] bg-zinc-900'>
  <div className='pl-[10vw] pt-[5vh] sm:pt-[10vh] pb-[5vh] sm:pb-[10vh]'>
    <h1 className='text-[3vw]'>Featured Courses:</h1>

  </div>

  <div className='bt-[1px] border-zinc-100   w-full block sm:flex gap-10 px-[10vh] gap-y-[10vh] sm:gap-y-[0vh]'>
    <div className='cardcontainer w-full sm:w-1/2 h-[40vh] sm:h-[75vh]  rounded-xl  bg-slate-400 block'>
   <a href="https://alison.com/course/machine-learning-with-artificial-intelligence?utm_source=bing&utm_medium=cpc&utm_campaign=531498932&utm_content=1358998909448010&utm_term=kwd-84938597287859:loc-90&msclkid=4a6fd69776921060e959b03012c40d3b">
   <img src="https://wallpapercave.com/wp/wp2316798.jpg" alt="" />
   <h1 className='mt-[2vh] px-[2vw] font-semibold'>Machine Learning with Artificial Intelligence</h1>
   </a>
 

   
   
    </div>
    <div className='cardcontainer w-full sm:w-1/2 h-[40vh] sm:h-[75vh]  rounded-xl  bg-slate-800 block'>
    <a href="https://pll.harvard.edu/subject/business/free">
      <img src="https://1.bp.blogspot.com/-cQk1EwTYQ1I/V1qEedsuv-I/AAAAAAAAAcM/1ur3d5sieyca91aiaFCCohJ5B5FDRH42QCLcB/s1600/hjb.jpg" alt="" />
    <h1 className='mt-[2vh] px-[2vw] font-semibold'>Free Business Courses from Harvard</h1>
    </a>
    </div>

  </div>
  <div className='flex justify-center mt-[2vh]'>
    <button className='px-3 sm:px-10 py-2 sm:py-6 bg-zinc-100 rounded-full text-black font-semibold mt-10 flex gap-10 items-center hover:text-[red] hover:font-bold'>
<Link to="/courses-scholarship"> Other Courses</Link>
     
    </button>
  </div>
</div>
<Footer/>

      
    </div>
  )
}

export default Home;
