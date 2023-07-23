import React, { useEffect, useState } from 'react'
import ordercss from './Orderdetails.module.css'
import ticket from '../../images/Ticket.svg'
import calener from '../../images//calenderblack.svg'
import clock from '../../images/Clock.svg'
import discountTag from '../../images/Tag.svg'

const Orderdetails = ({
    img,
    variantName,
    date,
    time,
    heading,
    adults,
    Childs,
    totalPrice,
    setTotalPrice,
    fee
}) => {
  
    // all Consideration the data may be comming from the backend or from the store

    // const fee = 100 ;  
    // const [totalPrice,setTotalPrice] = useState(adults.count*adults.price + Childs.count*Childs.price ) // used to count total of price
    const [isCoupenApplied,setIsCoupenApplied] = useState(false)
    const couponCode  = "TickEtE 10"
    const [couponAmount ,setCouponAMount] = useState(0) ;

    const HandleCouponAdd = ()=>{
        setCouponAMount((prev)=> prev + 100)
        setIsCoupenApplied(!isCoupenApplied)
        setTotalPrice((prev) => prev - 100);
    }

    const HadleCouponRemove = ()=>{
        setCouponAMount((prev)=> prev - 100)
        setIsCoupenApplied(!isCoupenApplied) 
        setTotalPrice((prev) => prev + 100);       
    }
   
    useEffect(()=>{
    },[isCoupenApplied])


  return (
    <div className={ordercss.Ordercontainer}>
        <div className={ordercss.orderdetails}>
            <img src={img} className={ordercss.mainImg} alt={heading}/>
            <p className={ordercss.heading}>{heading}</p>
            <div className={ordercss.data}>
                <img src={ticket} alt="ticket svg from tickete"/>
                <p className={ordercss.atext}>{variantName}</p>
            </div>
            <div className={ordercss.data}>
                <img src={calener} alt="calnder svg from tickete" />
                <p className={ordercss.atext}>{date}</p>
            </div>
            <div className={ordercss.data}>
                <img src={clock} alt="clock svg from tickete" />
                <p className={ordercss.atext}>{time}</p>
            </div>
        </div>
        <div className={ordercss.ticketOverview}>
             <div className={ordercss.tickhead}>Tickets overview</div>
             {
                adults && adults.count > 0 ? 
                <div className={ordercss.paytp}>
                    <p className={ordercss.paytype}>Audlt ({adults.count})</p>
                    <p className={ordercss.price}>₹ {adults.price * adults.count}</p>
                </div>
                :null 
             }
             {
                Childs && Childs.count > 0 ?
                <div className={ordercss.paytp}>
                    <p className={ordercss.paytype}>Child ({Childs.count})</p>
                    <p className={ordercss.price}>₹ {Childs.price * Childs.count}</p>
                </div>
                :null
             }
             <div className={ordercss.paytp}>
                    <p className={ordercss.paytype}>fee</p>
                    <p className={ordercss.price}>₹ {fee}</p>
            </div>
            <div className={ordercss.paytp}>
                    <p className={ordercss.discount}>discount applied</p>
                    <p className={ordercss.discount}>- ₹ {couponAmount}</p>
            </div>
            <div className={ordercss.promocode}>
                <div className={ordercss.coupntext}>
                    <img src={discountTag} alt="Discount tag for tickete"/> 
                    {
                        isCoupenApplied ?
                            <p className={ordercss.discount}>
                                {couponCode} Applied
                            </p> 
                     :
                            <p className={ordercss.discount} onClick={HandleCouponAdd} >Have a promo code?
                            </p>
                  }
                </div> 
                 {
                    isCoupenApplied ? <div className={ordercss.couponRemove} onClick={HadleCouponRemove}>
                    <p>Remove</p>
                </div>  : null
                 }
            </div>
            <div className={ordercss.totalbox}>
                <div className={ordercss.paytpt}>
                    <p className={ordercss.textbold}>Total</p>
                    <p className={ordercss.textbold}>₹ {totalPrice}</p>
                </div>
                <p className={ordercss.litetext}>You will pay in Rupee</p>
            </div>
            <div className={ordercss.freeCancelation}>
                <p className={ordercss.fbt}>Free cancellation</p>
                <p className={ordercss.flt}>Tickets can be cancelled by 13th December, 2023.</p>
            </div>
        </div>
    </div>
  )
}

export default Orderdetails