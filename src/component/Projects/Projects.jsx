import React from 'react'
import Card from '../Card/Card'
import va from '../../assets/va.png'
import './Projects.css'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  useGSAP(()=>{
      gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 30%"
      }
    })
     
      gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 30%"
      }
    })
  })
  return (
    <div id='projects'>
        <h1 id='para' >FRESHER</h1>
        <div className='slider'>
          <Card title="VIRTUAL ASSISTANT" image={va} />
          <Card title="AI CAREER GUIDANCE"/>
          <Card title="ELECTICITY MECHANICS SHOP"/>
          <Card />
        </div>
    </div>
  )
}

export default Projects