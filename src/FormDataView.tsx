import React from 'react';
export function FormDataView({formData}: any) {

    const tokenRateUsd = 0.09;
    const total = formData.numberOfToken * tokenRateUsd;
    const roundTotal = Math.round((total + Number.EPSILON) * 100) / 100
    
   
    return <div className="formData__wrapper">
    <div className="formData__View">
        <div className="order-summary__title"><h3>Summary</h3></div>
        
        <div className="order-summary__item">
            <span className="order-summary__field">Rate</span>
            <span className="order-summary__value">1 Token = $0.09</span>
        </div>
        <div className="order-summary__item">
            <span className="order-summary__field">Total Tokens</span>
            <span className="order-summary__value">{formData.numberOfToken}NFY</span>
        </div>
        {/* <div className="order-summary__item">
            {formData.totalAmountUSD}</div> */}
        {/* <div className="order-summary__item">
            {formData.bscAddress}</div> */}
        <div className="order-summary__item">
            <span className="order-summary__field">Transaction Currency</span>
            <span className="order-summary__value"> {formData.currency}</span>
        </div>
        
        <div className="order-summary__item">
            <span className="order-summary__field">Transaction Method</span>
            <span className="order-summary__value"> {formData.paymentMethod}</span>
        </div>
       <div className="order-summary__item-divider"></div>
        <div className="order-summary__item">
        <span className="order-summary__field">Total:</span>
        <span className="order-summary__value"> {roundTotal +"USD"}</span>
        </div>
    </div>
    </div>
}