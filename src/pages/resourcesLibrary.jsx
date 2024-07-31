import React from 'react'
import Navbar from '../components/navbar'
import Ebook from '../components/ebook'
import Footer from '../components/footer'



const ResourcesLibrary = () => {
  return (
    <div className='text-zinc-100 w-full bg-zinc-900 '>
      <Navbar/>
      <div className="container bg-zinc-900 mx-auto px-4 w-full h-full sm:h-[130vh] pt-[35vh] sm:pt-[20vh] block">
        <h1 className='mb-[1vh] text-[3vh] hover:text-[#CDEA68] font-semibold'>Featured E-Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Ebook 
          title="The Great Gatsby" 
          coverImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s" 
          author="F. Scott Fitzgerald" 
        />
        <Ebook
          title="1984" 
          coverImage="https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg" 
          author="George Orwell" 
        />
        <Ebook 
          title="To Kill a Mockingbird" 
          coverImage="https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg" 
          author="Harper Lee" 
        />
         <Ebook 
          title="Atomic Habit" 
          coverImage="https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png" 
          author="James Clear" 
        />
         <Ebook 
          title="Men are from Mars.." 
          coverImage="https://m.media-amazon.com/images/I/61SX8iUoHSL._AC_UF1000,1000_QL80_.jpg" 
          author="John Gray" 
        />
         <Ebook 
          title="How to win Freinds.." 
          coverImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvu45Vs7-h1_RAhvi7fgM2_6SiG4vlPWdZg&s" 
          author="Dale Garneige" 
        />
        {/* Add more BookCard instances as needed */}
      </div>
    </div>
    <div className='researchPaper block px-[8vw] mt-[4vh]'>
   <h1 className='text-[3vh] hover:text-[#CDEA68] font-semibold'>Research Papers </h1>
   <div className='flex justify-center gap-[5vw]  pt-[20vh] pb-[10vh]'>
    <a href="https://scholar.google.com/">
       <img className="w-[10vw] h-[15vh]"src="https://cdn1.lib.jmu.edu/wp-content/uploads/Screenshot-2023-10-25-at-5.01.23-PM.png" alt="" /></a>
   <a href="https://www.researchgate.net/">
   <img className="w-[10vw] h-[15vh]" src="https://play-lh.googleusercontent.com/qyNEwOebhNJTbeNQ9KOg_XdZVbTu0Rv5Oh4mDHbgUKv23VDP4wlhbvqcjEvUAjKRaEo" alt="" />

   </a>
 <a href="https://www.scopus.com/home.uri">
    <img className="w-[10vw] h-[15vh]"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAAB/CAMAAAAkVG5FAAAAt1BMVEX/////ggD/gAD/ewD/fAD/fgD/eQD/dwD/gwD/tnz/yaD///3/+vT/hQD//vr/4sv/8en/z6n/9u3/59P/q2n/6tn/8OP/kTb/28D/sXT/xpv/0q//wZL/ljz/n1D/0rH/uob/m0j/vov/pV3/2Ln/4M7/kS7/qmX/r3D/oVj/4MX/jRj/jST/jjT/nEv/ol//wJr/07r/mTn/sHv/p2v/5c3/59r/mj7/lUP/qnH/bQD/oFv/yKe/T194AAARsklEQVR4nO1daXvauBYGbWYxJjZg9p2wN03uNJN02v//u64hBB2tliG0nYnfL30a27KsVzo6mw6FQo4cOXLkyJEjR44cOXLk+OSoxq3G/X3nDff39404+N1d+qSIw9UeUUJYAozx8R9C0X7dj3531z4d+q8MU4SKMhCimEwr/u/u32fCtsZUIgAlxGvGv7uP/3b4jTBcuIxi18rFEaSUy6trEHVrifxneJ4mZfwpTuPiILFyNq5ASAhK9gFGSa1lvdFfknQycjauQuglXOwbUaNLKLVJK39PHcgoolxSXY6YoNqcIuZNg9aODM03aslAqnKFajkbF6NLcGNGkmHF60KMvIXxxqkophJ9FmNSrJVIsuUk1ga/sMuV3ItRwoPChJBxk7QLhRUeme6bMIELXGqOG2/DHsT1sPtK2IkRtKz+ss7/1xAwWk3YoM0RmRYKPzEyDGVD0KZISbHy/E63hg+EoNebd/o/C5+VknlPihTRdaHwxEwKURtuGsygC9e7CCM6vWF3/+ugOCqUD1sCmRUKFWxgow7lFO4aWwvCIZvfqqufABsvLHynCBG6KhTmZKe/aw2WBrEPd3x3g15+Fiy8ZSKGUNTz0HOHkrL2Jr8GdKZS7ju/GapLsqe4Uyj0CMOI6M2/lgfkVP8X9/BToe6h4sEGjxJDzuvp7wm5RoVq+dK4JcaJpUCn08Ss9maGWx655XdQvXLcEI0hJglwu266A2ziePwru/Yp0Zhtfswa5utzzgbbXv22ILpr1Tvjfhj2F/W7yM10vxMQ+VcY/P5dYxGGleTtjbtf6cU5vrfSqyRv3v59xZtHgA3jAnLsUjjfo1NE/RhTR1/mYWqgqzNkZyQLmaJae96/6Htag2nt9PLk7Xi36aftg4Gf4gaNWnEct2L7XXFvtCPHzpODZ88ju9dVxbIALIBsmP2KDmg1PTmojhAl3si64jpLT3IVo0MUnnWtLA53CfbLeQX8bbz0iPB6RBkdmNZZWCpR7wjThnpE1zuBGtXN+siDntXzd6OyPaSkBZBUxKB2uSBqYkOIhJqcLQk6bVP4l9CuZX18SWg/sMaHsqFtCeG9Yb1X8Ol2VLN9VvldxyEG0uINM3w3Ing4zqqk/sUbQ5YQSApCYglXmQKPram8LoSPKZqtny/vQ7k/fe7M1BLyJtoWKu/DjEo2qcjZ0Ddj/e7k5f+ztK0D0HCL+MKNw9/YMxz0lufMNKven2JNk5x5Z6P41rA1qM9GugnK2SjaNoUUNsqW6XRsfGkdNxULdsXDb4j2aUF1qgZG/CFLeSgZgrZh3p7ZYJ3kf/HOSit50LTA2bDG+s9sUJ1faZ32CcjgGzTiDk4rYnbhmhEX04PqbCA91Cq5ROJpSe+n5GsjEecLkpJ6hJtqC2c2isimL3A2/lIvzmQylOC1fVPSYQhbYJX0ByTcFRWF4ghRv0HiQ62i3O/TQzIde+3MPbOBan6ZiS/SxPOZugNxNqzpGzY2hFBEkWJy/IJEx+VfIX92OnqCmPGyOg59QUxQxmrt0ddv3759HVI4TKJleSeromT59ft6/W2zPEd9z3To9o4v/HsZAe1gj+6Hwx2WdiREFIl3PRvVPegoJc1FK6pWq1F8H5aH+KRgZmfDF3dAFmZ7/IGIfeL2d7Ad8muChhgs4WgR1Ny+j1bV366pMJTakMsXnWwitXU/DqqHRhYbUXqpEpizQWxmAWfju3ypD5YG3ogS1e+PKLmIjcJEokMW8VYMQJ/IUJ5mTT4DV+DPK8Ag8taSMIpWguzRTQ8NGwhXoO7UEDQLROT9JzMb3+RLS94HpjFG4glOjNHM+0Yh2InfxpruNksLkrFRr5+7DNlYgJAKQh31KWFf1qnHbYUNKts01Q2kQ1FQM7PxVboS8Y8wxfFme+8CrWgLRufY+tI5iW3IpQptayT8WX8mXK+B7COsHYsG3DyoKqsUNuhOVb5A35LdXuocZ0PfgxPMbGzP8xC1TU8H8SUO0IGkqlHiuJeP+YMGvX2PCcGMeR5fAjMgGU32Zgy3eU+5SWaD7jWGiV+CWoS0BDOz8UO6ssCmpq9GV6IDsZWTFxXMcqYPjtQfD+7tbYs354OBxsY9CqqPahqXxIZBD4b7rCxNABt/Wz6QsyGLYc6G9+Epf03ZkCElh9ATWBrUmMkoA2jUNtsfrlfF1S+yYUwPBrehvXiJs8Hc2JC/j/swPMvzF6Ks2JXsITU0wQ1HZNXaIapgPWHbGgdWqbJzCGygkundfSATPZGxq9nocDZucOKrpzjAKEnRdVv8Y91D6luw1VjdYnWgW3iS3BTYYM+mJgIgFKXgTWY2ZGfX8/k7SHb/RTo6qrsJ16wb1ITLHPf5MXeObr2AiL30wZANjdvjjCYI3ohTKysbSE56jc+T5TanWuK24pdGrGnZzXlenLvzFyg69siC4F2W91DABtG4BLVNiNIOsHFvacDMRsCX7o3SkydqmIJQ4wQGeXFpMo2jA8YnxTQCWZCoJhLH2TjHm7SIgMYgWgWZ2VAicWD/I683yYio15RIBTIGUsd8KVm/SACQbqkpKlCoiZKQs2GntLo00XY9G2UwVLR2ZYKHHoEmmkUMr+qeByvD6cwfYDNI09OBSiRtMZwNU7z6hBXvoyjdM7OhxFRbUK4jZgvjX476UrN7aAURH1hZmbeAr+90CwWKQjGBArBhz6yYgUxKYXllZkPdGbuCHCHoJknMVU28ms3VeVwFwts9vQH42FMzVKrg5olwBbBhVy+f+NQSvYMfwIYvelsRW360i+SIeKSIK6L6HsAmq/HrGeDz6e6Q2cilvqRUObMBrBtRk/0ANgotOY3KG96Ej4Wym9O97CQF/qY07YiDa+lFnH405yuXheJgcDawPTjWcGDDtgFzNnTCuC5HjhGbXp89qyKYyOKKys6giH+owcGvAR8dF5uJ53pJyReADbs7DbAvrgHAhm0+l997oN8aW4rFTL2XW6yPlpxhI3ut78Aea1dsALhr1uXsOVeHUUm44MxGdCUbZ73RkIsTPShJPJS9XpaDa0dPsgWl2F58CRsgRmM1294w4GxQ4cLQlQ24T5kk1TVsJH30FJ2HWj0YlyKWstbE9B4QhDWkRWrATXGXSgC9q9mIrmRjncpGIZ5qPBgkY66HCwIx7IEIFPWtS/aNTqa1AUIhF7IBtQaThmtj4+x2tOUbhCUlvw6xzQ2Wh5hOR6DfvOXuceLIJqmuZwN20mD9YZsn2YmNROehCh+0dIPdowfpQBRopWDaCek5VgA2aumTZ+YgqewiAWgNRYNnxMrG3ImNQ1U2ItsEyNrwhRBKwsA4A9Cp3MOwz6bR0aIMvEzCBc5GioDmtri0FkPOhs2jsXFkI5mcXXk7R7bIy6UYwUQY4AKJQOTP2cEPJEc260/cRAEbP60tgNUletT5wWzr6nrgCb+pvY3X0mEO5H28KRhDg5Pxv/s8sdmcUaQ0BnScdCc08Ie/CBeGrp4R7pSXfCucDWsLrxnYSObaRnQpIfTxpUBASKLI+NYEktRcduQ3VIGOk6oEVsHqEyN8rmyA+IYUEHNjI1hmYuPgARcT1y8/LWYCmM+COjgFSR3OYXG+oOgk7V7gZJLGErBh9QTHxggJYMPSQnT2jEoblxHVgeBSuu5gqxagLgx+4n9uOucbAADhkxpL/0lMLxiaprwEEK/yRKEB2LC0EAO3Wlpv39Fqw5zvj18cGxCvA+p9BVgDzirud0BhmngD+gMWF58rGxuTGgB4sjkSeEKhOxtiCr53wTFlO77r2XgGIpK5hmIBhWkBDpheImVcAzZsLjKfKyBywhdgw+JIAMHmor2zAuZZYmpZAbIFoKQCcTx3T1XLvcjMwux6cWQD1BeS0xr5rNed6DshAGfGsrAB+uduirkC5j5DtRRIMPcML34+Ky23Ycqb96R0QsDGxNIC2KSoZPlzh5l6aukMmDKc6ZQSkHCXHTM2A+pUQk4hPNzs7DgcgFVsS0yDr1XUSzc2OhbfDXfRKNnnZ8DTidnYiIEL4IMz2IG9IbqLIuGAhON2FQMKrdUCYNamLHwBG5ZZsDSs6QOAA8tY7+AVeiEyseHfjA1oi0vzCBaodDZ0oHyzFIsD6UqqSHtxYaMHWlDkBUijNY3zWjg5SA13aREBNrI8lw54YEvyg8GaiEXsKKvgORli3uNAlV51xDkbZmc+PJKoHvUBRQsMup104CsTG0BSvaTfDVDt2O3oMkh2U/KYR4LdaXExRGB2g93ZXH93ACY2UXZ7BzYieLpQDdxFxRS1py+nBZg/TkWda2zOgbgjWv94y9Cs3Ahn0JSDYWLRb1Mhy0J99A/4YiFlkulHcwwrkarNTlPZiGBRAc3sD+Cmoon+9aWTqUUi3zHrmV2C3CbI6BpJzLFDHXv9iRR/JMhOtVxuU4ixYK0F0dgcqoiBP8B84iJeaba5MQilUY2OCNjQJ9Zta7Dmss5TYN++JkoqiMxG1cN0ZdBcgJ2jVnGw4qi6IOrV/urIKySoiKVZNDxHYlEPspOnWbCYHqMwDPSqWoMPkaX8TUJqNtKd54YOy9pAEbXxGnq2UVE3IsApkMgqcUa0XtQKSzIbDXYYtZEuqF4B4V9nl9Eb3q0xRDHdd3927nw/CAI/eg5XJSwMtVbGj8VJhPAQ/DKg3+mWThU3BAW4IUSRKeny33es+ttJEa4dbaUNuPUgQqZjUM/Sr6+omK+s1aMjKIrIkHfP3851JcCw/OFHwijeVySBFW+g+pAtOB4UoYVDCfNIaberFRmTi/UZftymKU0jhMm02xuPw1nzlfISLmK3QlEqE7b/2p0MZpP11yVlAlVMuwtOxeGiGLdXk8rT07hX3tSkLEnPoFwIGghlw+as0g+T50vgeTAETHr83QpDBE9n9fcZGI/nsKKge4Ly6XF1GmiLCiXi22AbTOXwfLLMCD5W74SjKk5QWS4jSg8VM5WSSEzvy5oqvT78gCdW3lq0lE1pYU0D4vN4xM1MmY0V2HdIMnd3Lw8vO8KE6o4usX8BDVVCamE4IJ8gcPoFLlmtkesFGJ4y+E5UNgxAntnjvlamkfz2MjASZTYe5JwEpP6KqJc1JffeaVSKpG22mv1h2mcVNX5+Y11I8IHGoXRlAxkqPBwR2AvwvU2Fs8Ihn9F/Te1+kWX2pruxwea2yFCwSWsEMVW3GNOUISUl49SSJ6YBeG91nsUagQy6fFRazt4ymY3ULqAL6uAFe5xKMrUs9zcM7OU7qbZj8dJWKZR6TbPQdWKDepOU6GIDGduhp9Sxs1NdZiOu2cspUnrJyYGgjEx1hU/Nstd092w8NI5sooGuDONaURNYzy99sOmGDmxQtnHo9l6/bSL2Xvgsfp+sSjWRYILMfFA2v/BIf9QfqfrsW6cOlQKnbhwv9p7SxFFlRhOzI8wfUKY+lbx0bk+2gtopxkSROIiktXBCMPHUIUWsxO3cnseONeH/UR+OBiWmvvv49ulVJ5brgx/798Lsbzj0oDZsjt0pbnR3oIVDUapSe9VLM3/G85rHyFu9zIOWm7x1Hqa5EwAbZPtUniIP8yYwI68D525HkyVm56cPNTvZUPBU+9unTqfe0C+0erlNPeHx5AOWk+tTE4Ko1Qkrj4+DweDxUFSq04qyJr0Hd52w9zh7a2DxfOf22w1+a1F5LDdX8+Z68hh2Yoe3cjbQLjg2ET5OmvPRfL4e9MLnbEKiGj2Hvcl6tRltNpvVJP1XEcSnk+6Hj7Puaj7azOfNSW9xUcG2fzMAGx+fsJQjI0B6rVzhLscvB2Ajo5M0x8cDsJH/8tdvB2fD/chhjluBO1DdK2PluBUAG7coKpgjEwAbNziYnSMbeB5i/ouRvx+Ajaf0u3PcFjzl9MOLmOfIjG7Oxh8Efqz/2l9TzXE9eLZizsbvBz9SYi6inuNXAbBxizppOTKBlw9xPVKV43bghwfZDX78Ikc2POZs/EEAbNzity9yZMLPnI0/CICNm5T2z5EFvErIx/+8W46s6Byy2cghB1CTApjjV+O+36tU+ovOfe4YyZEjR44cOXLkyJEjR44c/w78H/3C/68HMPGoAAAAAElFTkSuQmCC" alt="" />

 </a>

   </div>
    </div>

    <Footer/>
    

     
    </div>
  )
}

export default ResourcesLibrary
