import React from 'react'
import PromiseCard from '../PromiseCard/PromiseCard'
import ourPromisses from '../../data/ourPromis'
import  ourPromissescss  from './Ourpromisses.module.css'

const Ourpromisses = () => {
  return (
    <div className={ourPromissescss.container}> 
      <div className={ourPromissescss.ourPromiseContainer}>
        <p className={ourPromissescss.heading}>The Tickete promise</p>
        <div className={ourPromissescss.PList}>
          {
            ourPromisses.map((data)=>
              <PromiseCard key={data.id} img={data.PromiseSvg} heading={data.PromiseHead} text={data.promiseText}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Ourpromisses