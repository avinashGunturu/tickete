import React from 'react'
import cardCss from './PromiseCard.module.css'

const PromiseCard = ({img,heading,text}) => {
  return (
    <div className={cardCss.PromiseCard}>
       <img src={img} alt={heading} className={cardCss.cardsvg} width="42px" height="42px" />
       <div>
            <p className={cardCss.promisehead}>{heading}</p>
            <p className={cardCss.promiseText}>{text}</p>
       </div>
    </div>
  )
}

export default PromiseCard