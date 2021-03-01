import React,{ Component } from 'react';
import {  Link} from "react-router-dom";

class Login extends Component{

    render () {
        return(
            <div>
                <input id='username'></input>
                <input id='password'></input>
                <button value='Login'><Link to="/home">Login</Link></button>
            </div>
        )
    }
}

export default Login;