import { useEffect , useState , useRef } from "react";

const formatTimer = (time) => {
    
    let hours = Math.floor(time/(60*60))
    let minutes = Math.floor(time/60 - hours*60);
    let seconds = Math.floor(time - minutes*60 - hours*60*60);
    if(minutes < 10) minutes = '0' + minutes
    if(seconds < 10) seconds = '0' + seconds
    if(hours < 10) hours = '0' + hours
    return hours + ":" + minutes + ":" + seconds
}

function DemoTimer({STime , RTime ,level}) {
    const [SisActive,SetSisActive] = useState(true);
    const realTime = STime;
    const [count , SetCount] = useState(STime);
    const timerId = useRef();
    useEffect(() => {
        timerId.current = setInterval(() => {
            SetCount(prev => prev -1 ) 
        },1000)
        return () => clearInterval(timerId.current)
    },[])
    useEffect(() => {
        console.log(count)
        if(count<=0){
            
            SetSisActive(!SisActive);
            SisActive ? SetCount(STime) : SetCount(RTime);
            alert('END');
        }
    },[count])
    return (
        <div className="flex justify-center items-center h-[40%] w-[70%] md:w-[80%]" style={{fontSize: '100px'}}>
            {SisActive ? 
            <div className="flex flex-col gap-5">
                <p className="text-xl text-blue-500">Study Until the timer is over</p>
                <h2 className=" text-center h-[100%] w-[100%] rounded-lg bg-gradient-to-bl from-blue-300 to-blue-500">{formatTimer(count)}</h2> 
            </div>
            :
            <div className="flex flex-col gap-5">
                <p className="text-xl text-yellow-500">Rest You have some time</p>
                <h2 className=" text-center h-[100%] w-[100%] rounded-lg bg-gradient-to-tr from-yellow-300 to-yellow-500">{formatTimer(count)}</h2>
            </div>
            }
            <button></button>

        </div>
     );
}

export default DemoTimer;