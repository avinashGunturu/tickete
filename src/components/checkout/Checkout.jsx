import React, { useEffect, useState } from 'react'
import Orderdetails from '../orderDetails/Orderdetails'
import checkoutcss from './checkout.module.css'
import sheild from '../../images/ShieldCheckeredPay.svg'
import aimg from '../../images/openboat.png'
import pFlag from '../../images/Group.svg'
import creditCard from '../../images/CreditCard.svg'

// for input(expiry date) masking
import InputMask from 'react-input-mask';

const Checkout = () => {

 const ProductData = {
    // here we are assuming all data is coming from the backend or store or url
    img:aimg,
    variantName : "Amsterdam open boat canal cruise",
    date:"Wed, 2nd Aug, 2023",
    time:"11:30 AM",
    heading:"Amsterdam open boat canal cruise - Live Ggide - from Anne Frgnk House",
    adults: {count:2,price:1400},
    Childs:{count:1,price:700},
}

const fee = 100 ;  // assume convienince fee coming from the backend or the store
const [totalPrice,setTotalPrice] = useState(ProductData.adults.count*ProductData.adults.price + ProductData.Childs.count*ProductData.Childs.price + fee ) // used to count total of price
const [istipsSelected ,setIsTipsSelected] = useState(false) 

// card selection

const [isCreditCard,setIsCreditCard] = useState(true)
const [isKarma,setIskarama] = useState(false)

// upi number taking 

const [upiNumber,setUpiNumber] = useState("")


// collecting details from the user 
 
const [userDetails,setUserDetails] = useState({
  fullName:"",
  PhoneNumber:"",
  email:"",
  confirmEmail:""
})
// additional details  

const [additionalDetails,setAdditionalDetais]=useState({
  age:"",
  occupation:""
})

// card details  

const [cardDetils,setCardDetials] = useState({
   nameOnCard:"",
   cardNumber:"",
   expireDate:"",
   cvvNum:"",
})


// all error object

const [inputErrorObj,setInputErrorObj] = useState({
    fullnameError:false,
    phonenumberError:false,
    emailError:false,
    conformEmail:false,
    isSameEmail:false,
    cardNumError:false,
    cardExpiryError:false,
})

useEffect(()=>{
},[userDetails.confirmEmail,userDetails.email])


const userDetailsHandle = (e,inputType)=>{
     
     if(inputType === 'fullname'){
    
      // settig the input value
          setUserDetails((prev) => ({ 
            ...prev,
            fullName: e.target.value,
          }))

      // checking the validation

          const isValid = validateFullName(userDetails.fullName)

      // updating the error object

        setInputErrorObj((prev)=> ( { ...prev ,fullnameError:!isValid}))

     }else if(inputType === "phonenum"){
      setUserDetails((prev) => ({ 
        ...prev,
        PhoneNumber: e.target.value,
      }))
     }else if ( inputType === "email"){
      setUserDetails((prev) => ({ 
        ...prev,
        email: e.target.value,
      }))

      const isevalid = validateEmail(userDetails.email)
      setInputErrorObj((prev)=> ( { ...prev ,emailError:!isevalid}))

     }
     else if ( inputType === "conemail"){
      setUserDetails((prev) => ({ 
        ...prev,
        confirmEmail: e.target.value,
      }))
      const isevalid = validateEmail(userDetails.confirmEmail)
      setInputErrorObj((prev)=> ( { ...prev ,conformEmail:!isevalid}))

     
      validateEmails()
     }
}

const HandelecardChange = (e,card) =>{
    if(card === "nameofcard"){
           // settig the input value
           setCardDetials((prev) => ({ 
            ...prev,
            nameOnCard: e.target.value,
          }))
    }else if(card === "cardnumber" && cardDetils.cardNumber.length < 14){
          // settig the input value

          let cardnum = formatCardNumber(e.target.value)
          setCardDetials((prev) => ({ 
            ...prev,
            cardNumber:cardnum,
          }))
    }else if(card === "cvv"){  
      if(e.target.value.length < 4){
        setCardDetials((prev) => ({ 
          ...prev,
          cvvNum:e.target.value,
        }))
      }
    }else if(card === "expirydate"){
      const inputDate = e.target.value
      setCardDetials((prev) => ({ 
        ...prev,
        expireDate:inputDate,
      }))
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year (YY format)
      const currentMonth = currentDate.getMonth() + 1; // Months are zero-based (0 - 11)

    const [inputMonth, inputYear] = inputDate.split('/').map((item) => parseInt(item, 10));

    // Check if the input expiry year is greater than the current year
    // or if the input expiry year is equal to the current year but the month is greater
    if (inputYear > currentYear || (inputYear === currentYear && inputMonth >= currentMonth)) {
      
      setInputErrorObj((prev) => ({...prev,cardExpiryError:false}))
    } else {
      
      setInputErrorObj((prev) => ({...prev,cardExpiryError:true}))

    }
    }
}

// used to validate full name validatation 
// user name should have two words 
// each word contain atleast 3 charachters

const validateEmails= ()=>{
  console.log(userDetails.email,userDetails.confirmEmail)
  return userDetails.confirmEmail && userDetails.email && userDetails.email === userDetails.confirmEmail ? setInputErrorObj((prev)=>({...prev,isSameEmail:true})): setInputErrorObj((prev)=>({...prev,isSameEmail:false}))
}

const validateFullName = (name) => {
  name = name.trim();
  const words = name.split(' ');
  return words.length === 2 && words.every(word => word.length >= 3);
}

// email validater  

const validateEmail = (email) => {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// validating card 

const formatCardNumber = (value) => {
  // Remove any non-numeric characters
  const numericValue = value.replace(/\D/g, "");

  // Split the number into groups of four digits
  const cardGroups = numericValue.match(/.{1,4}/g);

  // Join the groups with spaces
  return cardGroups ? cardGroups.join(" ") : "";
};






















  return (
    <div className={checkoutcss.payersection}>
        <div className={checkoutcss.payinfo}>
           <h1 className={checkoutcss.mainHeading}>Confirm and pay</h1>
           <div className={checkoutcss.eachSection}>
                <p className={checkoutcss.heading}>Enter your details</p>
                <p className={checkoutcss.sunHeading}>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
                <div className={checkoutcss.inputBoxs}>
                    <div  className={checkoutcss.inputcontainer}>
                      <div className={checkoutcss.labelContent}>
                        <input className={checkoutcss.floatingInput} type="text" placeholder=" " value={userDetails.fullName} onChange={(e) => userDetailsHandle(e,"fullname")} autoComplete="off"/>
                        <label className={checkoutcss.floatingLabel}>Full Name</label>
                      </div>
                      {
                        inputErrorObj.fullnameError ? <p className={checkoutcss.inputerrormsg}>Enter Full Name</p> :null
                      }
                       
                    </div>
                    {/* phone container */}
                    <div className={checkoutcss.inputPhonecontainer}>
                          <div className={checkoutcss.countrycodeNumber}>
                            <img src={pFlag} alt="india country img" />
                            <input type="tel" autoComplete='off' className={checkoutcss.phonenumINp} value={userDetails.PhoneNumber} onChange={(e) => userDetailsHandle(e,"phonenum")}   placeholder='+91 9381365400' />
                          </div>
                          <label className={checkoutcss.phoneLabel}>Phone</label>
                         <div className={checkoutcss.PhoneNumDropDownlist}>
                           <p>india</p>
                           <p>nagasaki</p>
                           <p>japan</p>
                         </div>
                         {
                        inputErrorObj.phonenumberError ? <p className={checkoutcss.inputerrormsg}>Invalid Phone Number</p> :null
                         } 
                    </div>
                    <div className={checkoutcss.inputcontainer}>
                        <div className={checkoutcss.labelContent}>
                          <input className={checkoutcss.floatingInput} type="email" placeholder=" " value={userDetails.email} onChange={(e) => userDetailsHandle(e,"email")}   autoComplete="off"/>
                          <label className={checkoutcss.floatingLabel}>Email</label>
                        </div>
                        {
                        inputErrorObj.emailError ? <p className={checkoutcss.inputerrormsg}>Enter Valid Email</p> :null
                        }
                    </div>
                    <div  className={checkoutcss.inputcontainer}>
                        <div className={checkoutcss.labelContent}>
                          <input className={checkoutcss.floatingInput} type="email" placeholder=" "  value={userDetails.confirmEmail}  onChange={(e) => userDetailsHandle(e,"conemail")} autoComplete="off"/>
                          <label className={checkoutcss.floatingLabel}>Confirm Email</label>
                        </div>
                        {/* {
                        inputErrorObj.conformEmail ? <p className={checkoutcss.inputerrormsg}>Enter Valid Email</p> :null
                        }  */}
                        {
                          inputErrorObj.isSameEmail ? null : userDetails.confirmEmail !== "" && <p className={checkoutcss.inputerrormsg}>Emails don't match</p>
                        }
                       
                    </div>    
                </div>
           </div>
           <div className={checkoutcss.eachSection}>
                <p className={checkoutcss.heading}>Additional information</p>
                <p className={checkoutcss.sunHeading}>We need a few more details to complete your reservation.</p>
               
                <div className={checkoutcss.inputBoxs}>
                    <div  className={checkoutcss.inputcontainer}>
                      <div className={checkoutcss.labelContent}>
                        <input className={checkoutcss.floatingInput} type="number" placeholder=" " value={additionalDetails.age} onChange={(e)=>{setAdditionalDetais((prev)=>( e.target.value > 10  && {...prev,age:e.target.value}))}} autoComplete="off"/>
                        <label className={checkoutcss.floatingLabel}>Age</label>
                      </div>
                      {/* <p className={checkoutcss.inputerrormsg}>error</p>  */}
                    </div>
                    <div  className={checkoutcss.inputcontainer}>
                      <div className={checkoutcss.labelContent}>
                        <input className={checkoutcss.floatingInput} type="text" placeholder=" " onChange={(e)=>{setAdditionalDetais((prev)=>({...prev,occupation:e.target.value}))}} value={additionalDetails.occupation} autoComplete="off"/>
                        <label className={checkoutcss.floatingLabel}>Occupation</label>
                      </div>
                      {/* <p className={checkoutcss.inputerrormsg}>error</p>  */}
                    </div>
                </div> 
           </div>
           <div className={checkoutcss.eachSection}>
                <p className={checkoutcss.heading}>Select your mode of payment</p>
                <p className={checkoutcss.sunHeading}>Payments with Tickete are secure and encrypted.</p>
                <div className={checkoutcss.PymentModes}>
                  <div className={checkoutcss.eachPaymentMode}>
                     <div className={checkoutcss.paymentHeaadng} onClick={()=> setIsCreditCard((prev)=>!prev)}>
                         <div className={checkoutcss.ctxt}>
                           <img src={creditCard} alt="credit card svg from the tickete" /> 
                           <p>Credit & debit card</p>
                         </div> 
                         {
                          !isCreditCard ? <div className={checkoutcss.normalc}></div> :
                          <div className={checkoutcss.selectedcircle}></div>
                         }
                     </div>
                     { isCreditCard ?
                     <div className={checkoutcss.payeedetails}>
                          <div  className={checkoutcss.inputcontainer}>
                            <div className={checkoutcss.labelContent}>
                              <input className={checkoutcss.floatingInput} type="text" placeholder="Avinash Gunturu" value={cardDetils.nameOnCard} onChange={(e) => HandelecardChange(e,"nameofcard")} autoComplete="off"/>
                              <label className={checkoutcss.floatingLabel}>Name on Card</label>
                            </div> 
                          </div>
                          <div  className={checkoutcss.inputcontainer}>
                            <div className={checkoutcss.labelContent}>
                              <input className={checkoutcss.floatingInput} type="text" value={cardDetils.cardNumber} onChange={(e) => HandelecardChange(e,"cardnumber")} placeholder="**** **** ****" autoComplete="off"/>
                              <label className={checkoutcss.floatingLabel}>Card Number</label>
                            </div>
                            {inputErrorObj.cardNumError ? <p className={checkoutcss.inputerrormsg}>Invalid Card Number</p> :null}
                             
                          </div>
                          <div  className={checkoutcss.inputcontainer}>
                            <div className={checkoutcss.labelContent}>
                              {/* <input className={checkoutcss.floatingInput} type="text" placeholder="MM/YY" onChange={(e) => HandelecardChange(e,"expirydate")} value={cardDetils.expireDate} autoComplete="off"/> */}
                              <InputMask
                                  mask="99/99"
                                  className={checkoutcss.floatingInput}
                                  maskChar={null}
                                  placeholder="MM/YY"
                                  value={cardDetils.expireDate}
                                  onChange={(e)=>HandelecardChange(e,"expirydate")}
                                />
                              <label className={checkoutcss.floatingLabel}>Expiry Date</label>
                              {inputErrorObj.cardExpiryError ? <p className={checkoutcss.inputerrormsg}>Expiry Date Cannot Be in Past</p> :null}
                            </div>
                          </div>
                          <div  className={checkoutcss.inputcontainer}>
                            <div className={checkoutcss.labelContent}>
                              <input className={checkoutcss.floatingInput} type="number" placeholder="123" onChange={(e) => HandelecardChange(e,"cvv")} value={cardDetils.cvvNum} autoComplete="off"/>
                              <label className={checkoutcss.floatingLabel}>CVV/CVC</label>
                            </div>
                          </div>
                     </div> : null }
                  </div>
                  <div className={checkoutcss.eachPaymentMode}>
                     <div className={checkoutcss.paymentHeaadng} onClick={()=> setIskarama((prev)=>!prev)}>
                         <div className={checkoutcss.ctxt}>
                           <img src={creditCard} alt="credit card svg from the tickete" /> 
                           <p>UPI Payment</p>
                         </div> 
                         {
                          !isKarma ? <div className={checkoutcss.normalc}></div> :
                          <div className={checkoutcss.selectedcircle}></div>
                         }
                         
                     </div>
                     { 
                       isKarma ? 
                       <div className={checkoutcss.inputBoxs} >
                          <div  className={checkoutcss.inputcontainer}>
                           <div className={checkoutcss.labelContent}>
                              <input className={checkoutcss.floatingInput} type="text" placeholder="93813654@ybl" value={upiNumber} onChange={(e) => setUpiNumber(e.target.value)} autoComplete="off"/>
                               <label className={checkoutcss.floatingLabel}>UPI Number</label>
                            </div>
                          </div>
                        </div>
                       : null
                     }
                     
                  </div>

                </div>
           </div>
           <div className={checkoutcss.totalPriceBox}>
             <p className={checkoutcss.totalPrice}>Total: ₹ {totalPrice} </p>
             <p className={checkoutcss.currwncy}>You will pay in Rupee</p>
           </div>
            <div className={checkoutcss.recivetips} onClick={()=> setIsTipsSelected((prev)=> !prev)}>
                {
                !istipsSelected ?
                 <div className={checkoutcss.normalc}></div> :
                 <div className={checkoutcss.selectedcircle}></div>
                }
                <p className={checkoutcss.rtext}>Receive travel tips, suggestions and offers by email</p>
            </div>
          <div className={checkoutcss.paymentsecurity}>
            {/* here in span we need to use the link to send them to particular page */}
            <p className={checkoutcss.paysecuin}>With payment, you agree to the general  <span>terms and conditions of Tickete</span> & the <span>activity provider.</span></p>
           {/* here i used div insted if button  */}
            <div className={checkoutcss.capay}>
                 Confirm and pay 
                <img src={sheild} alt="security sheild from tickete"/>
            </div>
          </div>
        </div>
         <Orderdetails  img={ProductData.img} variantName={ProductData.variantName} date = {ProductData.date} time = {ProductData.time} heading={ProductData.heading} adults={ProductData.adults} Childs={ProductData.Childs} totalPrice={totalPrice} fee={fee} setTotalPrice={setTotalPrice} />
    </div>
  )
}

export default Checkout