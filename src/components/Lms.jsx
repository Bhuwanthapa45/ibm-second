import DemoTimer from "./DemoTimer";
import { useState } from "react";
import Lvl from "./Lvl";
import { IoMdArrowBack } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { FaRoadBarrier } from "react-icons/fa6";
function Lms(props) {

  const [STimerHrs,SetSTimerHrs] = useState(0);
  const [STimerMins,SetSTimerMins] = useState(0);
  const [RTimerHrs,SetRTimerHrs] = useState(0);
  const [RTimerMins,SetRTimerMins] = useState(0);
  const [selected,setSelect] = useState(false);
  const [level,setLevel] = useState("lvl");
  function handleClick(isActive,setIsActive,sh,sm,rm,lvl){
    console.log("function started");
    SetSTimerHrs(sh);
    SetSTimerMins(sm);
    SetRTimerHrs(0);
    SetRTimerMins(rm);
    setIsActive(!isActive);
    setLevel(lvl);
    console.log(`${sh} , ${sm} ,${0} ,${rm} `);
  }

  function SubmitHandler(){
    if(SetSTimerHrs !=0){
      setSelect(true);
    }
  }

  function buttonClick(selected){
    setSelect(!selected);
  }


    return ( 
        <div className=" relative h-[100vh] w-[100vw] bg-gradient-to-bl from-red-200 to-red-300 text-white flex flex-col items-center justify-center text-center">
            {selected ? <div className=' h-[100%] w-[100%] flex items-center justify-center flex-col'>
            <DemoTimer STime={STimerHrs*(60*60) + STimerMins*60} RTime={RTimerMins*60} level={level} />
          </div> : 
      <div className='flex flex-wrap justify-center md:items-center md:justify-center md:h[80%] md:flex-col text-black gap-6 items-center h-[80%] w-[80%] bg-gradient-to-bl from-cyan-200 to-sky-300 rounded-xl '>
        <h1 className=' m-4 text-2xl self-baseline'>Choose your level</h1>
      <div className='flex self-baseline ml-[30%] flex-col' >
        
        <Lvl handleClick={handleClick} icon={<FaWalking/>} Shours={0} Smins={30} Sseconds={0} Rhours={0} Rmins={5} Rseconds={0} colour={`lightgreen`} level="Walk" onClick={(event)=>{handleClick(event)}}></Lvl>
        <Lvl handleClick={handleClick} icon={<FaRunning/>} Shours={1} Smins={0} Sseconds={0} Rhours={0} Rmins={15} Rseconds={0} onClick={(event) => {handleClick(event)}} colour={`skyblue`} level="Sprint"></Lvl>
        <Lvl handleClick={handleClick} icon={<GiRunningShoe/>} Shours={1} Smins={30} Sseconds={0} Rhours={0} Rmins={20} Rseconds={0} onClick={(event) => {handleClick(event)}} colour={`orange`} level="Run Up"></Lvl>
        <Lvl handleClick={handleClick} icon={<FaRoadBarrier/>} Shours={2} Smins={0} Sseconds={0} Rhours={0} Rmins={30} Rseconds={0} onClick={(event) => {handleClick(event)}} colour={`violet`} level="Marathon"></Lvl>
      </div>
      <button className='h-6 w-20 bg-green-200 rounded-md' onClick={() => {SubmitHandler()}} > Submit </button>
      </div>
      }
      

    </div>
     );
}

export default Lms;
