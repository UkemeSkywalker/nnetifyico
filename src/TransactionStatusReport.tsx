import React from 'react'
import img from './images/Failed.png';
import Mainbutton from './Mainbutton';

function TransactionStatusReport() {
    return (
        <div>
            <div className="transaction__status">
                <div className="transaction_title">
                    <h1>Transaction Failed</h1>
                    <p> There has been an error in your transaction</p>
                </div>
                
                <div className="img__holder">
                    <img src={img} alt=""></img>
                </div>
                < Mainbutton button="Back" />
            </div>
        </div>
    )
}

export default TransactionStatusReport
