import React from 'react'
import chaticon from '../../images/ourPromiseImgs/ChatsCircle.svg'
import helpCardcss from './Needhelp.module.css'

const NeedhelpCard = () => {
  return (
     <div className={helpCardcss.needhelpCard}>
          <div className={helpCardcss.textIcon}>
              <div className="text">
                  <p className={helpCardcss.nhelp}>Need help?</p>
                  <p className={helpCardcss.nhtext}>We're here to help, 24*7</p>
              </div>
              <div className="icon">
                  <img src={chaticon} alt="Need Help from Tikete"/>
              </div>
          </div>
          <div className={helpCardcss.chatButton}>
              Chat with us
          </div>
      </div>
  )
}

export default NeedhelpCard