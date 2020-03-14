import React from "react"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import ppl from "../images/aboutAmeya2.jpg"

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
      <p><span>H</span> ey everyone! Welcome to meymeyeats.</p>

      <p>I'm your average person who has an above-average obsession with food. I was born and raised in New York to an Indian family, and now I live in Barcelona Spain. One thing that's constant across all these cultures is a love for good food.</p>
      
      <p>My dad once said that I'm always either eating or thinking about eating. I couldn't think of a truer way to describe me. In my opinion,
      food (and drink!) is one of the main joys in life. So why waste time, energy, and (most importantly) money eating things that just... don't taste good?</p>

      <p> I'm here to help you make sure your meals out are amazing. Because the point of food is to bring us happiness.</p>

       <p> Come join me on this ride! Follow along on instagram at @meymeyeats.</p>
    </div>
  </div>
)

export default AboutPage
