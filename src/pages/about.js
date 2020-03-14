import React from "react"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import ppl from "../images/Ameya_orange.jpg"

const AboutPage = () => (
  <div>
    <SEO title="About" />
    <Nav />
    <div className = "bio-container">
      <img className="bio-image" src={ppl} alt='' />
      <div className="containy">
        <h1 className="name"></h1> 
        <h1 className="short-bio"></h1> 
      </div>
    </div>
    
    <div className="biography-container">
      <p><span>H</span> ey everyone! Welcome to meymeyeats. I'm your average person who has an above-average obsession with food.</p>

      <p>I was born and raised in New York in an Indian family, and now I live in Barcelona, Spain. My dad once said that I'm always either eating or thinking about eating. I couldn't think of a truer way to describe me. In my opinion,
      food (and drink!) is one of the main joys in life. So if we're going to spend time, energy, and (most importantly) money eating, so why don't we make sure it tastes good?</p>
      
      <p>I'm here to share my meals with you... because the point of food is to bring us happiness.</p>

      <p> Come join me on this ride! Follow along on Instagram at <a href="https://www.instagram.com/meymeyeats/">@meymeyeats</a>.</p>
    </div>
  </div>
)

export default AboutPage
