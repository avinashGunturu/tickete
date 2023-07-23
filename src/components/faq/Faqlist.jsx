import React from 'react'
import Faq from './Faq'
import faqLists from '../../data/faqList'
import NeedhelpCard from '../needHelp/NeedhelpCard'
import faqsectioncss from './faq.module.css'

const Faqlist = () => {
  return (
     
        
        <div className={faqsectioncss.faqchatcontaner}>
          <div className={faqsectioncss.fqaListContaner}>
           <h4 className={faqsectioncss.faqhead}>Frequently asked questions</h4>
            {
              faqLists.map((faq)=> <Faq  key={faq.id} question={faq.question} answer={faq.answer} />)
            }
          </div>
          <NeedhelpCard />
        </div>
  
  )
}

export default Faqlist