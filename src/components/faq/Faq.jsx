import React, { useState } from 'react'
import close from '../../images/Minus.svg'
import open from '../../images/Plus.svg'
import faqcss from './faq.module.css'

const Faq = ({question,answer}) => {

  const[isQuestionOpen,setIsQuestionOpen] = useState(false)

  return (
    <div className={faqcss.qaContainer}>
        <div className={faqcss.qcontainer}>
            <p className={faqcss.question}>{question}</p>
            <div className={faqcss.openClose}>
                {
                    isQuestionOpen ?  
                    <div onClick={()=> setIsQuestionOpen(!isQuestionOpen) }>
                        <img src={close} alt="question close button"/>
                    </div>
                    :
                    <div onClick={()=> setIsQuestionOpen(!isQuestionOpen) }>
                      <img src={open} alt="question open button"/>
                    </div>
                }  
            </div>
        </div>
        {
            isQuestionOpen ?
             <div className={faqcss.acontaner}>
               <p className={faqcss.answer}>{answer}</p>
            </div>
            : null
        }
       
    </div>
  )
}

export default Faq