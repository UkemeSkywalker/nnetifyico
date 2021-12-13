import React, {useState}from 'react'
import "./Dashboard.css"
import Form from './Form'
import {FormDataView} from './FormDataView';
// import formImage from './images/form-image.png'

const defaultValues = {
    numberOfToken: "1029", 
    totalAmountUSD: "45", 
    bscAddress: "",
    paymentMethod: "Meta Mask",
    currency: "BNB"
}


function BuyCoin() {
    
    const [formData, setFormData] = useState(defaultValues)
    return (
        <div className="buy__coin">                
        <div className="form__wrapper">
            <h1> Connecting worlds</h1>
            <p>How many Nnetify would you like to buy?</p>
            < Form submitData = {setFormData}/>
        </div>
        <div className="order__summary">
            <div className="order__summary__card">
                {/* <h3>Summary</h3>     */}
                
                < FormDataView  formData ={formData} />
               
            </div>
            {/* <img src={formImage} alt="" /> */}
        </div>
        </div>
    )
}

export default BuyCoin
