import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuyCoin from './BuyCoin';
import Header from './Header';
import Confirmation from './Confirmation';
import TransactionStatus from './TransactionStatus';
// import FormProvider from './Context/FormProvider';
// import TransactionFailed from './TransactionFailed';



function Dashboard() {
 
    return (
        
        <div className="dashbaord__content">
                {/* <FormProvider> */}
                    <Header />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<BuyCoin />}></ Route>
                                <Route path="confirmation" element={<Confirmation />}/>
                                <Route path="transactionstatus" element={<TransactionStatus />}/>
                                {/* <Route path="transactionfailed" element={<TransactionFailed />}/> */}
                                
                            </Routes>
                        </BrowserRouter>
                    {/* </FormProvider> */}
            
                    
           
        </div>
    )
}

export default Dashboard
