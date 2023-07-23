import React from 'react'
import fotterLogo from '../../images/fotterLogo.svg'
import facebookLogo from '../../images/FacebookLogo.svg'
import instagramLogo from '../../images/InstagramLogo.svg'
import twitterLogo from '../../images/TwitterLogo.svg'
import fotterCss from './fotter.module.css'

const Fotter = () => {
  return (
    <div className={fotterCss.footerContainer}>
        <div className={fotterCss.fcontainer}>
            <div className={fotterCss.footerMain}>
                <img src={fotterLogo} alt="white tickete logo"/>
            </div>
            <div className={fotterCss.footerLinks}>
                <div className={fotterCss.pages}>
                    <p className={fotterCss.pagelink}>© Tickete Inc.</p>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Cancellation <span className={fotterCss.policytxt}>policy</span></li>
                    </ul>
                </div>
                <div className={fotterCss.socialmedia}>
                     <img src={instagramLogo} alt="instagram logo in tickete" />
                     <img src={facebookLogo} alt="facebook logo in tickete" />
                     <img src={twitterLogo} alt="twitter logo in tickete" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter