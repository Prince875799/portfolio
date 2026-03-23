import React from 'react'
import "./Home.css"
import {TypeAnimation} from "react-type-animation"
import  man from "../../assets/man.png"
import {Link} from "react-scroll"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {

  useGSAP(()=>{
    let t2=gsap.timeline()
    t2.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    t2.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    t2.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })
  return (
    <div id='home'>
        <div className='lefthome'>
             <div className='homedetails'>
                <div className='line1'>I'M</div>
                <div className='line2'>PRINCE KUMAR</div>
                <div className='line3'>
                 <TypeAnimation
                    sequence={[
                   "WEB DEVELOPER",
                     2000,
                    "SOFTWARE DEVELOPER",
                      2000,
                      ]}
                    speed={50}
                    repeat={Infinity}
                     cursor={true}
                    />

                </div>
                <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}> <button>hire me</button> </Link>
                
                
                
             </div>
        </div>
        <div className='righthome'>
            <img src={man} alt=' ' />
        </div>
    </div>
  )
}

export default Home