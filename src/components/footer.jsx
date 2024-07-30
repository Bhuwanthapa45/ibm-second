import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 block sm:flex'>
      <div className='px-[5vw] pt-[20vh]'>
        <h1 className='text-[15vh] font-bold leading-none tracking-tighter'> 
          ALL-
          <br />
          ACADEMIC
        </h1>
      
      </div>
      <div className='pl-[5vw] pt-[20vh]'>
      <h1 className='text-[15vh] font-bold leading-none tracking-tighter'> 
          EVENTS
        </h1>
      <div>
        <h1 className='text-[4vh] font-semibold text-red-500'> at one platform.</h1>

      </div>
      <div className='block mt-[5vh]'>
        <h1 className='font-bold'>
          Social:

        </h1>
        <a href="https://www.instagram.com/">
        <h1 className='mt-[2vh]'>Instagram</h1>
        </a>
        <a href="https://www.instagram.com/">
        <h1 >X</h1>
        </a>
        <a href="https://www.instagram.com/">
        <h1 >Facebook</h1>
        </a>
        <a href="https://www.instagram.com/">
        <h1 >You Tube</h1>
        </a>
       
      </div>
      <div className='block mt-[5vh]'>
        <a href="https://www.google.com/maps/place/Guru+Gobind+Singh+Indraprastha+University/@28.5946224,77.0188309,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1aafdb891567:0x10d270731c930a87!8m2!3d28.5946224!4d77.0214058!16zL20vMDd5dDg4?entry=ttu"> <h1 className='font-bold'>
          Location:

        </h1>
        <h1 className='mt-[2vh]'>GGSIPU,Dwarka Sector 16C <br />
        Delhi,India</h1></a>
       
       
      </div>
      </div>
    </div>
  )
}

export default Footer;

