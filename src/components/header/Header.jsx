import React, { useState,useEffect } from 'react'
import logo from '../../images/Logo.png'
import headerCss from './header.module.css'
import QuestionSvg from '../../images/Question.svg'
import backSvg from '../../images/CaretCircleLeft.svg'

const Header = () => {

  const [previousScroll, setpreviousScroll] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
        setIsScrollingUp(currentScroll < previousScroll);
        setpreviousScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScroll,isScrollingUp]);

  
  return (
    <div className={`container sticky-header${isScrollingUp ? ' visible' : ''}`} >
       <div className={headerCss.navContainer}>
            <img src={logo}  alt="tickete logo"/>
            <div className={headerCss.helpcontainer}>
                <img src={QuestionSvg} alt="Question mark Svg"/>
                <p>Help</p>
            </div>
       </div>
       <div className={headerCss.mobileNav}>
           <img src={backSvg} alt="going back Svg"/>
       </div>
    </div>
  )
}

export default Header