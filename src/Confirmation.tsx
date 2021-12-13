import React, {useState} from "react";
import Mainbutton from "./Mainbutton"


// const defaultState = {
//     bscAddress: "0x40D30512f28903F176Af08AA01C9F10404B9509a",
//     numberofToken: 20123,
//     amountUSD: 53021,
//     payment: "Metamask"
// }

function Confirmation({formData}: any) {
    const [formState, setformState] = useState(formData);
    return (
        <div className="box-container">
            <div className="box">
                <div className="Ctitle">
                    <h1>Confirmation</h1>
                </div>
                <div className="confirmation-summary">
                    <ul>
                        <li>
                            <label className="corder-summary-title">BSC Address</label>
                            <span>{formState.bscAddress} </span>
                        </li>
                        <li>
                            <label className="corder-summary-title">Number of Token</label>
                            <span> {formState.numberofToken}</span>
                        </li>
                        <li>
                            <label className="corder-summary-title">Total Amount in USD</label>
                            <span>{'$'} {formState.amountUSD}</span>
                        </li>
                        <li>
                            <label className="corder-summary-title">Payment Method</label>
                            <span>{formState.payment}</span>
                        </li>
                    </ul>
                </div>
                < Mainbutton button="Confirm"/>
            </div>
            
        </div>
    )
}

export default Confirmation
