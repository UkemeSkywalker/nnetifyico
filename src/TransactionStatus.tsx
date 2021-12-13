import React from 'react'
import img from './images/Failed.png';
import Mainbutton from './Mainbutton';

function TransactionStatus() {
    return (
        <div className="box-container">
            <div className="box">
                <div className="transaction__status">
                    <div className="img__holder">
                        <img src={img} alt=""></img>
                    </div>
                    <div className="transaction_title">
                        <h1>Transaction Failed</h1>
                        <p> There has been an error in your transaction</p>
                    </div>
                    
                    < Mainbutton button="Back" />
                </div>
            </div>
        </div>
    )
}

export default TransactionStatus
