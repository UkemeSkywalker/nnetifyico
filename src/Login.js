import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';  
import {auth, provider} from './Firebase'; 
import "./Login.css";
import logo from "./images/Nnetify-Text.png"
import bg from "./images/wp3028461.jpg"
import { useStateValue } from './StateProvider';
import { actionTypes} from './reducer/reducer';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) =>{
        
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) =>  alert(error.message));
    }
    return (
        <div className='login__Container'>
            <div className='Login'>
                <div className="login_wrap">
                    <h1> Sign in to buy tokens</h1>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <button type="submit" onClick={signIn}>Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
