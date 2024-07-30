import { useState } from "react";

function Lvl(props) {

    const [hov,setHov] = useState(false);
    const colour = props.colour
    const [isActive, setIsActive] = useState(false);

    return (
        <div  onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)} className="flex gap-3 self-baseline m-3 hover:shadow-md rounded-md justify-center items-center" style={{backgroundColor : props.colour}} >
        <div className="m-2 text-xl">
            {props.icon}
        </div>
        <input  type="radio" name="lvl"
        onChange={() => props.handleClick(isActive,setIsActive,props.Shours,props.Smins,props.Rmins,props.level)} className={` text-md rounded-md hover:shadow-md`}/>
        <h2 className="m-3 p-2">
            {props.level}
        </h2>    
        
        {hov==true ? (<div className="flex gap-3"> <h2>study time = 0{props.Shours} : {props.Smins} : 0{props.Sseconds}</h2> <h2>rest time = {props.Rmins} : 0{props.Rseconds} </h2> </div>) : (<></>)}
        </div>
    );
}

export default Lvl;