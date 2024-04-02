import React from 'react';
import './Hero.css';
import hero from '../../Assets/herologo1.png';
import { MdArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <div className='text'>
          <h1>Auzor Open AI</h1>
          <p>
          I'm your friendly AI buddy, crafted with care by OpenAI. Think of me as your digital sidekick, here to chat and hang out just like a good friend would. I love diving into conversations where I can share helpful answers, own up to mistakes, clear up any confusions, and politely turn down requests that don't quite fit. Let's chat and explore together, just like pals on a grand adventure!
          </p>
          <button className="btnhero">try AuzAI<MdArrowOutward /></button>
        </div>
        
        <div className='image'>
          <img src={hero} alt="Hero Logo" className='heroimg'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
